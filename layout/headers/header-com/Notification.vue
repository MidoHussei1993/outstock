<template>
  <div
    class="mini-cart p-2"
    style="
      background: rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2.2px);
      -webkit-backdrop-filter: blur(2.2px);
      border: 1px solid rgba(255, 255, 255, 0.47);
    "
  >
    <div v-if="!notificationList.length">
      <h5>No Notifications</h5>
    </div>
    <div v-if="notificationList.length" class="mini-cart-inner">
      <ul
        :class="`mini-cart-list ${
          notificationList.length === 1
            ? 'slider-height_1'
            : notificationList.length === 2
            ? 'slider-height_2'
            : 'slider-height'
        }`"
      >
        <li
          v-for="(item, i) in notificationList"
          @click="readNotification(item)"
          :key="i"
          style="margin-bottom: 5px"
          class="notification-item"
          :class="{
            'notification-item text-dark': item.is_read,
            'un-read-notification-item  text-white': !item.is_read,
          }"
        >
          <div class="d-flex justify-content-between rounded-2 notif">
            <div class="p-2">
              <h4>
                {{ item.title }}
              </h4>
              <p class="mb-0">
                {{ item.body }}
              </p>
            </div>
            <div class="p-1 d-flex flex-column justify-content-between">
              <div class="p-1">
                <small>
                  {{ item.created_at }}
                </small>
              </div>
              <div class="p-1">
                <p class="mb-0 text-center" v-if="!item.is_read">
                  <i
                    class="fad fa-eye h5 pointer"
                    @click.prevent="readOnlyNotification(item)"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="text-center" v-if="pagination">
          <div>
            <button
              v-if="pagination?.current_page < pagination?.total_pages"
              class="btn btn-primary mx-auto px-4 mt-2"
            >
              {{ $t("action.loadMore") }}
            </button>
          </div>
        </li>
      </ul>
      <div class="total-price d-flex justify-content-between mb-10 pt-2">
        <button class="btn btn-dark mx-auto" @click="MarkAllAsRead()">
          <i class="fas fa-low-vision mx-1"></i>
          {{ $t("action.markAllAsRead") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "~~/store/useCart";
import { storeToRefs } from "pinia";
import { INotification, IPagination } from "~/types";
import { IAction } from "~/types/action";
import { Formatter } from "sarala-json-api-data-formatter";

const { setLoader } = useLoader();
const fetch = $useHttpClient();
const emit = defineEmits(["UpdateNotificationCount"]);
const formatter = new Formatter();
const store = useCartStore();
const { getAction, hasAction } = $FN();
const { cart_products, total } = storeToRefs(store);
const notificationList = ref<INotification[]>([]);
const pagination = ref<IPagination>();
const getNotificationList = async () => {
  try {
    setLoader(true);
    const { data, meta, ...res } = await fetch("/notifications", {
      method: "get",
    });
    notificationList.value = data;
    pagination.value = meta.pagination;
    console.log(pagination.value?.total);
    setLoader(false);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
const readNotification = async (notification: INotification) => {
  if (!hasAction(notification, "mark_notification_as_read")) return;
  const action: any = getAction(notification, "mark_notification_as_read");
  try {
    setLoader(true);
    const { data, ...res } = await fetch(action.endpoint_url, {
      method: "get",
    });
    window.open(notification.url, "_blank");
    setLoader(false);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
const readOnlyNotification = async (notification: INotification) => {
  if (!hasAction(notification, "mark_notification_as_read")) return;
  const action: IAction = getAction(notification, "mark_notification_as_read");
  try {
    setLoader(true);
    const { data, ...res } = await fetch(action.endpoint_url, {
      method: "get",
    });
    setLoader(false);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
const MarkAllAsRead = async () => {
  try {
    setLoader(true);
    const res = await fetch("/notifications/mark-all-as-read", {
      method: "get",
    });
    setLoader(false);
    getUnReadCount();
    getNotificationList();
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
const getUnReadCount = async () => {
  try {
    setLoader(true);
    const res = await fetch("/notifications/unread-count", {
      method: "get",
    });
    console.log("🚀 ~ file: Notification.vue:154 ~ getUnReadCount ~ res:", res);
    const data = formatter.deserialize(res);
    emit("UpdateNotificationCount", { count: data.unread_count });
    setLoader(false);
    getNotificationList();
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
onMounted(() => {
  getNotificationList();
  getUnReadCount();
});
const subString = (str: string, len: number, char = "...") => {
  if (str.length > len) {
    return str.substring(0, len) + char;
  }
  return str;
};
</script>
<style lang="scss" scoped>
/* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */

/* total width */
.mini-cart {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.47);
  .notification-item {
    background: rgba(255, 255, 255, 0.62);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.9px);
    -webkit-backdrop-filter: blur(11.9px);
    border: 1px solid rgba(255, 255, 255, 0.51);
  }
  .un-read-notification-item {
    /* From https://css.glass */
    background: rgba(15, 15, 15, 0.62);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.9px);
    -webkit-backdrop-filter: blur(11.9px);
    border: 1px solid rgba(15, 15, 15, 0.51);
  }
}
.mini-cart-list::-webkit-scrollbar {
  background-color: #fff;
  width: 16px;
}

/* background of the scrollbar except button or resizer */
.mini-cart-list::-webkit-scrollbar-track {
  background-color: #fff;
}

/* scrollbar itself */
.mini-cart-list::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
.mini-cart-list::-webkit-scrollbar-button {
  display: none;
}
.notification-item {
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
}
.notif {
  border-color: 1px solid black !important;
}
</style>

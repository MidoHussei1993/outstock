<template>
  <div class="mini-cart p-2">
    <div v-if="cart_products.length === 0">
      <h5>Your cart is empty</h5>
    </div>
    <div v-if="cart_products.length > 0" class="mini-cart-inner">
      <ul
        :class="`mini-cart-list ${
          cart_products.length === 1
            ? 'slider-height_1'
            : cart_products.length === 2
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
        >
          <div class="d-flex justify-content-between border rounded-2">
            <div class="p-2">
              <h4>
                {{ item.title }}
              </h4>
              <p class="mb-0">
                {{ item.body }}
              </p>
            </div>
            <div class="p-2">
              <small>
                {{ item.created_at }}
              </small>
            </div>
          </div>
        </li>
        <li class="text-center" v-if="pagination">
          <div>
            <button
              v-if="pagination?.current_page < pagination?.total_pages"
              class="btn btn-primary mx-auto px-4 mt-2"
            >
              load More
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "~~/store/useCart";
import { storeToRefs } from "pinia";
import { INotification, IPagination } from "~~/types";
import { IAction } from "~~/types/action";
const { setLoader } = useLoader();
const fetch = $useHttpClient();
const emit = defineEmits(["UpdateNotificationCount"]);

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
    emit("UpdateNotificationCount", { count: pagination.value?.total });
    setLoader(false);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
const readNotification = async (notification: INotification) => {
  if (!hasAction(notification, "mark_notification_as_read")) return;
  const action: IAction = getAction(notification, "mark_notification_as_read");
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
onMounted(() => {
  getNotificationList();
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
  background-image: linear-gradient(
      222deg,
      rgba(137, 137, 137, 0.02) 0%,
      rgba(137, 137, 137, 0.02) 21%,
      transparent 21%,
      transparent 63%,
      rgba(101, 101, 101, 0.02) 63%,
      rgba(101, 101, 101, 0.02) 99%,
      rgba(35, 35, 35, 0.02) 99%,
      rgba(35, 35, 35, 0.02) 100%
    ),
    linear-gradient(
      267deg,
      rgba(40, 40, 40, 0.02) 0%,
      rgba(40, 40, 40, 0.02) 23%,
      transparent 23%,
      transparent 48%,
      rgba(87, 87, 87, 0.02) 48%,
      rgba(87, 87, 87, 0.02) 98%,
      rgba(47, 47, 47, 0.02) 98%,
      rgba(47, 47, 47, 0.02) 100%
    ),
    linear-gradient(
      78deg,
      rgba(103, 103, 103, 0.02) 0%,
      rgba(103, 103, 103, 0.02) 40%,
      transparent 40%,
      transparent 64%,
      rgba(100, 100, 100, 0.02) 64%,
      rgba(100, 100, 100, 0.02) 84%,
      rgba(35, 35, 35, 0.02) 84%,
      rgba(35, 35, 35, 0.02) 100%
    ),
    linear-gradient(
      136deg,
      rgba(135, 135, 135, 0.02) 0%,
      rgba(135, 135, 135, 0.02) 14%,
      transparent 14%,
      transparent 67%,
      rgba(51, 51, 51, 0.02) 67%,
      rgba(51, 51, 51, 0.02) 68%,
      rgba(178, 178, 178, 0.02) 68%,
      rgba(178, 178, 178, 0.02) 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  &:hover {
    cursor: pointer;
    border-color: rgba(51, 51, 51, 0.02);
  }
}
</style>

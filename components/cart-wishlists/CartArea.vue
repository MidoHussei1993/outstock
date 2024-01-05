<template>
  <client-only>
    <section class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div v-if="state.cart_products.length === 0" class="text-center">
              <h3>{{ $t("c.noCartProduct") }}</h3>
              <nuxt-link class="os-btn os-btn-black mt-20" to="/">
                {{ $t("action.shopNow") }}
              </nuxt-link>
            </div>
            <form v-if="state.cart_products.length > 0" action="#">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">
                        {{ $t("c.images") }}
                      </th>
                      <th class="cart-product-name">
                        {{ $t("c.product") }}
                      </th>
                      <th class="product-quantity">
                        {{ $t("c.unitQuantity") }}
                      </th>
                      <th class="product-price">
                        {{ $t("c.quantity") }}
                      </th>
                      <th class="product-subtotal">
                        {{ $t("c.total") }}
                      </th>
                      <th class="product-remove">
                        {{ $t("c.remove") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <cart-item
                      v-for="(cartItem, i) in cart_products"
                      :key="i"
                      :index="i"
                      :item="cartItem"
                      @getCart="getCart()"
                    />
                  </tbody>
                </table>
              </div>
              <div class="row my-4" v-if="cart">
                <div class="col-md-6 col-sm-12 pt-3">
                  <div v-if="!cart.promoCode">
                    <h5 class="">{{ $t("c.couponCode") }}</h5>
                    <input
                      v-model="code"
                      id="coupon_code"
                      class="input-text mb-2"
                      name="coupon_code"
                      :placeholder="$t('c.couponCode')"
                      type="text"
                    />
                    <button
                      :disabled="!code.length"
                      @click="applyCoupon()"
                      class="os-btn os-btn-black"
                      name="apply_coupon"
                      type="button"
                    >
                      {{ $t("action.applyCoupon") }}
                    </button>
                  </div>
                  <div v-if="cart.promoCode">
                    <div
                      class="d-flex justify-content-around align-items-center"
                    >
                      <div class="p-2">
                        <h5 class="text-center">{{ $t("c.couponCode") }}</h5>
                        <p class="text-center">
                          {{ cart.promoCode.data.UserPromoCode.data.code }}
                        </p>
                      </div>
                      <div class="p-2">
                        <h5 class="text-center">
                          {{ $t("c.discount_value") }}
                        </h5>
                        <p class="text-center">
                          {{
                            cart.promoCode.data.UserPromoCode.data
                              .discount_value
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="p-2">
                        <h5>{{ $t("c.savedAddresses") }}</h5>
                      </div>
                      <div class="p-2">
                        <button
                          class="btn btn-dark btn-sm"
                          @click.prevent="visible = true"
                        >
                          {{ $t("action.addNewAddress") }}
                        </button>
                        <Dialog
                          v-model:visible="visible"
                          header="Header"
                          :style="{ width: '50rem' }"
                          :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
                        >
                          <div class="row">
                            <Form
                              :validation-schema="schema"
                              @submit="onSubmit"
                              :disabled="busySubmit"
                            >
                              <div class="col-lg-12">
                                <label for="name">
                                  {{ $t("form.address") }}
                                  <span>**</span></label
                                >
                                <Field
                                  name="address"
                                  type="text"
                                  :placeholder="
                                    $t('form.enter') + ' ' + $t('form.address')
                                  "
                                />
                                <ErrorMessage
                                  name="address"
                                  class="text-danger"
                                />
                              </div>
                              <div class="col-lg-12 mt-3">
                                <label for="mobile_number"
                                  >{{ $t("form.mobile") }}
                                  <span class="text-danger">*</span></label
                                >
                                <Field
                                  name="mobile_number"
                                  id="mobile_number"
                                  type="number"
                                  :placeholder="
                                    $t('form.enter') + ' ' + $t('form.mobile')
                                  "
                                />
                                <ErrorMessage
                                  name="mobile_number"
                                  class="text-danger"
                                />
                              </div>
                              <div class="col-lg-12 mt-2">
                                <button
                                  type="submit"
                                  class="os-btn w-100"
                                  :disabled="busySubmit"
                                >
                                  <i
                                    class="far fa-spinner-third fa-spin text-success mx-2"
                                    style="font-size: 22px"
                                    v-if="busySubmit"
                                  ></i>
                                  {{ $t("action.addNewAddress") }}
                                </button>
                              </div>
                            </Form>
                          </div>
                        </Dialog>
                      </div>
                    </div>
                    <div class="form-group" v-if="addressList.length">
                      <select
                        class=""
                        v-model="user_address_id"
                        :placeholder="$t('c.selectAddress')"
                        style="
                          width: 100%;
                          height: 45px;
                          line-height: 56px;
                          background: var(--tp-grey-2);
                          border: 1px solid #ececec;
                          border-radius: 4px;
                          padding-left: 30px;
                          padding-right: 45px;
                        "
                      >
                        <option :value="null" disabled selected>
                          {{ $t("c.selectAddress") }}
                        </option>
                        <option
                          :value="item.id"
                          v-for="(item, index) in addressList"
                          :key="index"
                        >
                          {{ item.address }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-5 mx-auto">
                  <div class="">
                    <h4>{{ $t("c.cartTotal") }}</h4>
                    <ul class="mb-20">
                      <!-- <li>Subtotal <span>${{state.totalPriceQuantity.total}}</span></li> -->
                      <li>
                        <h6 class="mt-3" style="float: none">
                          {{ total }}
                          {{ currency }}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                  <button type="button" class="os-btn" @click="checkout()">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script lang="ts" setup>
import { useCartStore } from "~~/store/useCart";
import CartItem from "./CartItem.vue";
import { storeToRefs } from "pinia";
import { Field, Form, ErrorMessage } from "vee-validate";
import { useI18n } from "vue-i18n";
import { Formatter } from "sarala-json-api-data-formatter";
import * as yup from "yup";

const state = useCartStore();
const { setLoader } = useLoader();
const { t } = useI18n();
const fetch = $useHttpClient();
const { cart_products, total, currency, cart } = storeToRefs(state);
const addressList = ref([]);
const formatter = new Formatter();
const visible = ref<boolean>(false);
const busySubmit = ref<boolean>(false);
const user_address_id = ref(null);
const code = ref<string>("");
const schema = yup.object({
  address: yup
    .string()
    .trim()
    .required(t("_.required"))
    .label(t("form.address")),
  mobile_number: yup.number().required(t("_.required")).label(t("form.mobile")),
});
const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    setLoader(true);
    busySubmit.value = true;
    const { message, ...res } = await fetch("/user/add-new-address", {
      method: "post",
      body: $payloadParser(
        {
          id: 1,
          ...values,
        },
        "new address"
      ),
    });
    const userData = formatter.deserialize(res);
    localStorage.setItem("user", JSON.stringify(userData));
    addressList.value = userData.addresses.data;
    setLoader(false);
    busySubmit.value = false;
    visible.value = false;
    resetForm();
    useNuxtApp().$toast.success("done");
  } catch (error) {
    busySubmit.value = false;
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};
const getCart = () => {
  state.getUserCart();
};
const checkout = async () => {
  console.log("🚀 ~ file: CartArea.vue:286 ~ checkout ~ cart:", cart.value.id);

  if (!user_address_id.value) {
    useNuxtApp().$toast.error(t("_.address"));
    return;
  }
  try {
    setLoader(true);
    console.log("fireieieiei");
    const { message, ...res } = await fetch(
      `/orders/check-out/${cart.value.id}`,
      {
        method: "post",
        body: $payloadParser(
          {
            id: 1,
            user_address_id: user_address_id.value,
            lat: "30.375936",
            lng: "30.5135616",
          },
          "checkout order"
        ),
      }
    );
    setLoader(false);
    state.cart_products = [];
    getCart();
  } catch (error) {
    setLoader(false);
    console.log(error);
  }
};
const applyCoupon = async () => {
  try {
    setLoader(true);
    const { message, ...res } = await fetch(`/promo-codes/apply`, {
      method: "post",
      body: $payloadParser(
        {
          id: 1,
          code: code.value,
          cart_id: cart.value.id,
        },
        "apply_promocode"
      ),
    });
    setLoader(false);
    getCart();
  } catch (error) {
    setLoader(false);
    console.log(error);
  }
};
onMounted(async () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  if (user.addresses && user.addresses.data) {
    addressList.value = user.addresses.data;
  }
});
</script>
<style lang="scss">
input {
  width: 100%;
  height: 60px;
  line-height: 56px;
  background: white;
  border: 1px solid #ececec;
  border-radius: 4px;
  padding-left: 30px;
  padding-right: 45px;
}
</style>

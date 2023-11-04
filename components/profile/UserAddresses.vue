<template>
  <div
    class="tab-pane fade"
    id="nav-address"
    role="tabpanel"
    aria-labelledby="nav-address-tab"
  >
    <div class="order__info">
      <div
        class="order__info-top d-flex justify-content-between align-items-center"
      >
        <h3 class="order__info-title">
          {{ $t("c.addresses") }}
        </h3>
        <!-- <button type="button" class="order__info-btn">
          <i class="fa fa-plus-circle mx-1" aria-hidden="true"></i>
          {{ $t("action.addNewAddress") }}
        </button> -->
      </div>

      <div class="card">
        <div class="card-body">
          <div class="row">
            <Form :validation-schema="schema" @submit="onSubmit">
              <div class="col-lg-12">
                <label for="name">
                  {{ $t("form.address") }} <span>**</span></label
                >
                <Field
                  name="address"
                  type="text"
                  :placeholder="$t('form.enter') + ' ' + $t('form.address')"
                />
                <ErrorMessage name="address" class="text-danger" />
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
                  :placeholder="$t('form.enter') + ' ' + $t('form.mobile')"
                />
                <ErrorMessage name="mobile_number" class="text-danger" />
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
        </div>
      </div>

      <div class="card my-3">
        <div class="card-body">
          <h5 class="my-2 mb-3">
            {{ $t("c.savedAddresses") }}
          </h5>
          <table
            class="table table-hover table-striped table-inverse table-responsive"
            v-if="addressList && addressList.length"
          >
            <thead class="thead-inverse">
              <tr>
                <th colspan="2" class="text-center">
                  {{ $t("form.address") }}
                </th>
                <th class="text-center">
                  {{ $t("form.mobile") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in addressList" :key="index">
                <td colspan="2" class="text-center">
                  {{ item.address }}
                </td>
                <td class="text-center">
                  {{ item.mobile_number }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import { useI18n } from "vue-i18n";
import * as yup from "yup";
import { Formatter } from "sarala-json-api-data-formatter";

const { t } = useI18n();
const fetch = $useHttpClient();
const { setLoader } = useLoader();
const busySubmit = ref<boolean>(false);
const formatter = new Formatter();
const addressList = ref([]);
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
    busySubmit.value = true;
    setLoader(true);
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
    busySubmit.value = false;
    setLoader(false);
    resetForm();

    // useNuxtApp().$toast.success(message);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    busySubmit.value = false;
    setLoader(false);
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

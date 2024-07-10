<template>
  <section :class="`footer__area footer-bg ${box_style ? 'box-m-15' : ''}`">
    <!-- <div class="footer__top pt-100 pb-60">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-12">
            <div class="footer__widget mb-30">
              <div class="footer__widget-title mb-25">
                <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo-2.png" alt="logo" />
                </nuxt-link>
              </div>
              <div class="footer__widget-content">
                <p>
                  Outstock is a premium Templates theme with advanced admin
                  module. It’s extremely customizable, easy to use and fully
                  responsive and retina ready.
                </p>
                <div class="footer__contact">
                  <ul>
                    <li>
                      <div class="icon">
                        <i class="fal fa-map-marker-alt"></i>
                      </div>
                      <div class="text">
                        <span
                          >Add: 1234 Heaven Stress, Beverly Hill, Melbourne,
                          USA.</span
                        >
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="fal fa-envelope-open-text"></i>
                      </div>
                      <div class="text">
                        <span>Email: Contact@basictheme.com</span>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="fal fa-phone-alt"></i>
                      </div>
                      <div class="text">
                        <span>Phone Number: (800) 123 456 789</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-12">
            <div class="footer__widget mb-30">
              <div class="footer__widget-title">
                <h5>information</h5>
              </div>
              <div class="footer__widget-content">
                <div class="footer__links">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Delivery Inforamtion</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-12">
            <div class="footer__widget mb-30">
              <div class="footer__widget-title mb-25">
                <h5>Customer Service</h5>
              </div>
              <div class="footer__widget-content">
                <div class="footer__links">
                  <ul>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Help & Contact Us</a></li>
                    <li><a href="#">Returns & Refunds</a></li>
                    <li><a href="#">Online Stores</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="footer__bottom">
      <div class="container mb-3">
        <Form :validation-schema="schema" @submit="onSubmit">
          <div class="row mx-2">
            <div class="row">
              <!-- <div class="col-lg-3"></div> -->
              <div class="col-lg-12 col-md-12">
                <h4 class="font-weight-bold" style="color: #bc8246">
                  {{ $t("p.contactUs") }}
                </h4>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="name" class="mb-2"> {{ $t("form.name") }}</label>
              <Field
                name="name"
                type="text"
                :placeholder="$t('form.enter') + ' ' + $t('form.name')"
              />
              <ErrorMessage name="name" class="text-danger" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <label for="email-id" class="mb-2">{{ $t("form.email") }}</label>
              <Field
                name="email"
                id="email-id"
                type="text"
                :placeholder="$t('form.enter') + ' ' + $t('form.email')"
              />
              <ErrorMessage name="email" class="text-danger" />
            </div>
          </div>
          <div class="row mx-2 align-items-end">
            <div class="col-lg-10 col-md-9 col-sm-12 mx-auto">
              <label for="email-id" class="mb-2">{{
                $t("form.message")
              }}</label>
              <Field
                name="message"
                id="message-id"
                type="text"
                :placeholder="$t('form.enter') + ' ' + $t('form.message')"
              />
              <ErrorMessage name="message" class="text-danger" />
            </div>
            <div class="col-lg-2 col-md-3 col-sm-12">
              <button
                type="submit"
                class="btn btn-success btn-lg w-100 mt-2"
                :disabled="busySubmit"
              >
                <i
                  class="far fa-spinner-third fa-spin text-success mx-2"
                  style="font-size: 22px"
                  v-if="busySubmit"
                ></i>
                {{ $t("action.save") }}
              </button>
            </div>
          </div>
        </Form>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-7 mx-auto">
            <div class="footer__copyright">
              <p>
                Copyright {{ new Date().getFullYear() }} ©
                <nuxt-link href="/">Mattress</nuxt-link> all rights reserved.
                Powered by <nuxt-link href="/">KZWEB </nuxt-link>
              </p>
            </div>
          </div>
          <!-- <div class="col-xl-6 col-lg-5">
            <div class="footer__social f-right">
              <ul>
                <social />
                <li>
                  <a href="#"><i class="fas fa-share-alt"></i></a>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Social from "~~/components/social/Social.vue";

export default defineComponent({
  components: { Social },
  props: {
    box_style: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<script lang="ts" setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "vue-i18n";
const busySubmit = ref<boolean>(false);

const { t } = useI18n();
const schema = yup.object({
  name: yup.string().trim().required(t("_.required")).label(t("form.name")),
  message: yup
    .string()
    .trim()
    .required(t("_.required"))
    .label(t("form.message")),
  email: yup
    .string()
    .trim()
    .required(t("_.required"))
    .email(t("_.email"))
    .label(t("form.email")),
});

const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    const fetch = $useHttpClient();
    busySubmit.value = true;
    const { message, ...res } = await fetch("/contact-us", {
      method: "post",
      body: $payloadParser(
        {
          id: null,
          ...values,
        },
        "user"
      ),
    });
    busySubmit.value = false;
    console.log(message);
    console.log(res);
    // useNuxtApp().$toast.success(message);
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    busySubmit.value = false;
  }
  // alert(JSON.tringify(values, null, 2));
  // resetForm();
};
</script>
<style lang="scss" scoped>
:deep(.input) {
  height: 30px !important;
  padding-right: 7px;
  padding-left: 7px;
}
</style>

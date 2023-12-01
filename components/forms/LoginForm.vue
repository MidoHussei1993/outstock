<template>
  <div>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="mb-20">
        <label for="email-id">
          {{ $t("form.email") }}
          <span>**</span></label
        >
        <Field
          name="email"
          id="email-id"
          type="text"
          placeholder="Email address..."
        />
        <ErrorMessage name="email" class="text-danger" />
      </div>

      <div class="mb-20">
        <label for="pass">
          {{ $t("form.password") }}
          <span>**</span></label
        >
        <Field
          name="password"
          id="pass"
          type="password"
          placeholder="Enter password..."
        />
        <ErrorMessage name="password" class="text-danger" />
      </div>

      <!-- <div class="login-action mb-20 fix">
      <span class="log-rem f-left">
        <input id="remember" type="checkbox" />
        <label for="remember">Remember me!</label>
      </span>
      <span class="forgot-login f-right">
        <a href="#">Lost your password?</a>
      </span>
    </div> -->
      <button class="os-btn w-100">
        <i
          v-if="busySubmit"
          class="fa fa-spinner fa-spin h4 mx-2 text-primary"
          aria-hidden="true"
        ></i>
        <span v-if="!busySubmit">
          {{ $t("config.login") }}
        </span>
      </button>
      <div class="d-flex">
        <div class="p-2">
          <client-only>
            <button
              type="button"
              class="btn btn-light border w-100 mt-2"
              :disabled="!isReady"
              @click.prevent="() => login()"
            >
              <i
                class="fab fa-google mx-2"
                style="font-size: 20px; color: #dd4b39"
              ></i>
              {{ $t("action.loginWithGoogle") }}
            </button>
          </client-only>
        </div>
        <div class="p-2">
          <client-only>
            <button
              class="btn btn-light w-100 mt-2 border"
              @click.prevent="facebookLogin()"
            >
              <i
                class="fab fa-facebook-f mx-2"
                style="font-size: 20px; color: #3b5998"
              ></i>
              {{ $t("action.loginWithFacebook") }}
            </button>
          </client-only>
        </div>
      </div>

      <div class="or-divide"><span>or</span></div>
      <nuxt-link href="/register" class="os-btn os-btn-black w-100">
        {{ $t("config.registerNow") }}
      </nuxt-link>
    </Form>
  </div>
</template>

<script lang="ts" setup>
// import VFacebookLogin from "vue-facebook-login-component-next";
import {
  AuthCodeFlowErrorResponse,
  AuthCodeFlowSuccessResponse,
} from "vue3-google-signin/dist/composables/useTokenClient";
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { setToken, setUser } from "~~/util";
import { Formatter } from "sarala-json-api-data-formatter";

const fetch = $useHttpClient();
const { setLoader } = useLoader();
const busySubmit = ref<boolean>(false);

const handleOnSuccess = async (response: AuthCodeFlowSuccessResponse) => {
  console.log(response);
  console.log("Access Token: ", response.access_token);
  try {
    setLoader(true);
    busySubmit.value = true;
    const res = await fetch("/auth/social-login", {
      method: "post",
      body: $payloadParser(
        {
          id: 1,
          provider: "google",
          token: response.access_token,
        },
        "user"
      ),
    });
    console.log("🚀 ~ file: LoginForm.vue:107 ~ handleOnSuccess ~ res:", res);
    const formatter = new Formatter();
    const data = formatter.deserialize(res);
    console.log("🚀 ~ file: LoginForm.vue:107 ~ handleOnSuccess ~ res:", data);
    if (data && data.country_id) {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", res.meta.token);
      navigateTo("/");
    } else {
      localStorage.setItem("tempUser", JSON.stringify(data));
      navigateTo("complete-info");
    }
    // useNuxtApp().$toast.success("done");
  } catch (error) {
    busySubmit.value = false;
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    setLoader(false);
  }
};

const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});

const schema = yup.object({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const onSubmit = async (
  values: object,
  { resetForm }: { resetForm: () => void }
) => {
  console.log(values);
  try {
    busySubmit.value = true;
    const res = await fetch("/auth/login", {
      method: "post",
      body: $payloadParser({ id: 1, ...values }, "user"),
    });
    const formatter = new Formatter();
    const userData = formatter.deserialize(res);
    setUser(userData);
    setToken(res.meta.token);
    busySubmit.value = false;
    navigateTo("/");
  } catch (error) {
    console.log("🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:", error);
    busySubmit.value = false;
  }
};
// @ts-ignore
function loadScript(src, callback?): void {
  // @ts-ignore
  var s: any, r, t;
  r = false;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.src = src;
  s.onload = s.onreadystatechange = function () {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if (!r && (!this.readyState || this.readyState == "complete")) {
      r = true;
      if (typeof callback === "function") callback();
    }
  };
  t = document.getElementsByTagName("script")[0];
  // @ts-ignore
  t.parentNode.insertBefore(s, t);
}

function facebookLogin() {
  //@ts-ignore
  FB.login(
    function (response: any) {
      console.log(
        "🚀 ~ file: LoginForm.vue:195 ~ facebookLogin ~ response:",
        response
      );
      if (response.authResponse) {
        console.log(
          "🚀 ~ file: LoginForm.vue:197 ~ facebookLogin ~ response:",
          response
        );
        setLoader(true);
        busySubmit.value = true;
        fetch("/auth/social-login", {
          method: "post",
          body: $payloadParser(
            {
              id: 1,
              provider: "facebook",
              token: response.authResponse.accessToken,
            },
            "user"
          ),
        })
          .then((res: any) => {
            const formatter = new Formatter();
            const data = formatter.deserialize(res);
            if (data && data.country_id) {
              localStorage.setItem("user", JSON.stringify(data));
              localStorage.setItem("token", res.meta.token);
              navigateTo("/");
            } else {
              localStorage.setItem("tempUser", JSON.stringify(data));
              navigateTo("complete-info");
            }
          })
          .catch((err) => {
            busySubmit.value = false;
            console.log(
              "🚀 ~ file: RegisterForm.vue:166 ~ setup ~ error:",
              err
            );
            setLoader(false);
          });
        // User is logged in and authenticated
        console.log("Welcome! Fetching your information.... ");
        //@ts-ignore
        FB.api("/me", function (response) {
          console.log("Good to see you, " + response.name + ".");
          console.log(response);
        });
      } else {
        // User canceled the login or did not fully authorize
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    { scope: "email" }
  ); // Add any additional permissions your app requires
}

onMounted(() => {
  loadScript("https://connect.facebook.net/en_US/sdk.js");

  //@ts-ignore
  window.fbAsyncInit = function () {
    //@ts-ignore
    FB.init({
      appId: "871199088044654",
      autoLogAppEvents: true,
      xfbml: true,
      version: "v14.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
});

// return { schema, onSubmit, busySubmit };
//   },
// });
</script>

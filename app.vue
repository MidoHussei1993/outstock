<template>
  <NuxtPage></NuxtPage>
</template>
<script lang="ts" setup>
import { useCartStore } from "./store/useCart";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDDrfPS6zGEXvdEySyLATwIG0iZpQO59YA",
//   authDomain: "faster-5dd74.firebaseapp.com",
//   databaseURL: "https://faster-5dd74.firebaseio.com",
//   projectId: "faster-5dd74",
//   storageBucket: "faster-5dd74.appspot.com",
//   messagingSenderId: "947945457722",
//   appId: "1:947945457722:web:372bfb601a2b7dd64f4d03",
//   measurementId: "G-KZ12NG251T",
// };
const { app } = $firebase();
const store = useCartStore();
console.log("🚀 ~ app:", app);
onMounted(() => {
  if (navigator.serviceWorker) {
    // Register the SW
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then(function (registration) {
        const messaging = getMessaging();
        getToken(messaging, {
          vapidKey:
            "BH63IojNZFJRem_wL8Z-i16WgKp_BlOSlJ2Bv1WpFToNB3uNzEKzMR_a_dVGZV7YqVyCN0S1qIT8rFn7YIukbmY",
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("🚀 ~ getToken ~ currentToken:", currentToken);
              // Send the token to your server and update the UI if necessary
              // ...
              onMessage(messaging, (payload) => {
                console.log("Message received. ", payload);
                // ...
              });
            } else {
              // Show permission request UI
              console.log(
                "No registration token available. Request permission to generate one."
              );
              // ...
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
          });
      })
      .catch(console.log);
  }
  store.getUserCart();
});
</script>

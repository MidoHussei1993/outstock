importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.2/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyDVz8wZLAJx-PlEF3OOj8NO2M60dB2gl8U",
  authDomain: "mattress-7a34d.firebaseapp.com",
  projectId: "mattress-7a34d",
  storageBucket: "mattress-7a34d.appspot.com",
  messagingSenderId: "431976009326",
  appId: "1:431976009326:web:d70aabfb7960fee14ce07f",
  measurementId: "G-2QLCT1XZS6",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "🚀 ~ file: messaging.service.ts:17 ~ MessagingService ~ this.angularFireMessaging.onBackgroundMessage ~ payload:",
    payload.notification
  );

  // self.alert(payload.notification.body);
  console.log("🚀 ~ messaging.onBackgroundMessage ~ payload:", payload)
});

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.info("SW received the message: ", payload);
//   const notification = payload.notification;

//   const notificationTitle = notification.title;
//   const notificationOptions = {
//     body: notification.body,
//     icon: notification.image,
//     vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
//     actions: [
//       // First item is always taken as click action (see comment below)
//       {
//         title: "Visit",
//         action: notification.clickPath,
//       },
//     ],
//   };
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });

self.addEventListener("notificationclick", function (e) {
  console.log("🚀 ~ e:", e)
  const notification = e.notification;
  // MARK 1 -> always takes first item
  const clickAction = notification.click_action;
  const action = e.action;
  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow(clickAction);
    notification.close();
  }
});

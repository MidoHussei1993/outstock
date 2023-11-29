import io from "socket.io-client";
import testSocket from "socket.io-client";
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const socket = io(`${config.API_BASE_URL}`, {
    autoConnect: false,
  });

  const i = testSocket("wss://admin.mattress.kzweb.store", {
    autoConnect: false,
    //any other options
  });
  socket.emit(`subscribe`, {
    channel: `presence-Notifications.160100`,
    auth: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  return {
    provide: {
      io: i,
    },
  };
});

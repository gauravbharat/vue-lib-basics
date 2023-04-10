// Mount Vue application into document
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue World!",
      firstName: "Gary",
      calc: 5 + 4,
    };
  },
}).mount("#vueApp");

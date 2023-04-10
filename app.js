// Mount Vue application into document
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue World!",
    };
  },
}).mount("#vueApp");

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

createApp({
  data() {
    return {
      message2: "Hello Vue Multiverse!",
      lastName: "D 'souza",
      calc2: 9 + 9,
    };
  },
}).mount("#vueApp2");

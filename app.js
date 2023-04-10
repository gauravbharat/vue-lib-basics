// Mount Vue application into document
const { createApp } = Vue;

const vm = createApp({
  data() {
    return {
      message: "Hello Vue World!",
      firstName: "Gary",
      calc: 5 + 4,
    };
  },
}).mount("#vueApp");

setTimeout(() => {
  vm.firstName = "Gaurav";
}, 2000);

// createApp({
//   data() {
//     return {
//       message2: "Hello Vue Multiverse!",
//       lastName: "D 'souza",
//       calc2: 9 + 9,
//     };
//   },
// }).mount("#vueApp2");

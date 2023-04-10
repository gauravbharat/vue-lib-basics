// Mount Vue application into document
const { createApp } = Vue;

const vm = createApp({
  data() {
    return {
      message: "Hello Vue World!",
      firstName: "John",
      lastName: "Doe",
      calc: 5 + 4,
    };
  },
  methods: {
    // use regular functions instead of arrow functions due to the Proxy mechanism of Vue for accessing instance data
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#vueApp");

setTimeout(() => {
  vm.firstName = "Jane";
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

// Mount Vue application into document
const { createApp } = Vue;

const vm = createApp({
  data() {
    return {
      message: "Hello Vue World!",
      firstName: "John",
      lastName: "Doe",
      calc: 5 + 4,
      url: "https://nextjs-google-clone-8cd664mk9-gauravbharat.vercel.app/",
      blogUrl: "https://nextjs-blog-gauravbharat.vercel.app/",
      raw_url: `<a href="https://nextjs-imdb-clone-git-main-gauravbharat.vercel.app/" target="_blank">Movie DB</a>`,
      age: "43",
    };
  },
  methods: {
    // use regular functions instead of arrow functions due to the Proxy mechanism of Vue for accessing instance data
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
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

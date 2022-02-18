const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@buziaczek.pl",
      gender: "male",
      picture: "https://picsum.photos/150/225?random=1",
    };
  },
});

//Do wyrenderowania naley uzyc metody .mount(), jest wywołana zawsze na końcu
app.mount("#app");

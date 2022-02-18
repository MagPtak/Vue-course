const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@buziaczek.pl",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

//Do wyrenderowania naley uzyc metody .mount(), jest wywołana zawsze na końcu
app.mount("#app");

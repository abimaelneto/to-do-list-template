<script>
import { logoutURL } from "@/utils/signout.js";
import { api, apiMixin, fetch } from "@/api";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      name: "",
    };
  },
  mixins: [apiMixin],
  methods: {
    handleClick() {
      this.signIn(this.username, this.password);
    },
    handleSignUp() {
      this.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email,
          name: this.name,
        },
      });
    },
    check() {
      this.api.getUserInfo();
    },
  },
  async mounted() {
    // const res = await fetch("/", {
    //   method: "POST",
    //   body: { title: "test" },
    // });
  },
};
</script>

<template>
  <main>
    <h3>Bem vindo</h3>
    <form>
      <input v-model="username" />
      <input type="password" v-model="password" />
      <input type="email" v-model="email" />
      <label for="name">
        Name
        <input id="name" v-model="Name" />
      </label>

      <button type="button" @click="handleClick">Login</button>
      <button type="button" @click="handleSignUp">Register</button>
    </form>
    <button @click="getUserInfo">Check</button>
  </main>
</template>

<script>
import { api, apiMixin, fetch } from "@/api";

export default {
  mixins: [apiMixin],
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    handleSignIn(e) {
      e.preventDefault();
      this.loading = true;
      this.signIn(this.username, this.password)
        .then((res) => {
          this.loading = false;
          this.error = null;
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.loading = false;
          this.error = err.message;
        });
    },
  },
};
</script>
<template>
  Login
  <form action="" @submit="handleSignIn">
    <label for="">
      <span> Username </span>
      <input v-model="username" />
    </label>
    <label for="">
      <span> Senha </span>
      <input v-model="password" type="password" />
    </label>
    <button>Entrar</button>
    <p>{{ error }}</p>
  </form>
  <router-link to="register">Criar conta</router-link>
</template>

<style scoped>
p {
  color: red;
}
</style>

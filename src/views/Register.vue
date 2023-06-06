<script>
import { api, apiMixin, fetch } from "@/api";

export default {
  mixins: [apiMixin],
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.signUp({
        username: this.username,
        password: this.password,
        attributes: {
          email: this.email,
        },
      })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((err) => alert(err));
    },
  },
};
</script>
<template>
  Cadastrar
  <div class="wrapper">
    <form action="" @submit="handleSubmit">
      <label for="">
        <span> Username </span>
        <input v-model="username" />
      </label>
      <label for="">
        <span> Senha </span>
        <input v-model="password" type="password" />
      </label>
      <label for="">
        <span> Email</span>
        <input v-model="email" type="email" />
      </label>
      <button>Salvar</button>
    </form>
  </div>
  <router-link to="login">Já tenho uma conta</router-link>
</template>

<style scoped>
form {
  width: 50vw;
  display: flex;
  flex-direction: column;
}
</style>

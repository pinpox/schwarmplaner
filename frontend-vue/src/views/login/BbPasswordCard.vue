<template>
  <LoginCard :showBack="false" v-on:next="next" :loadingNext="loading" :textNext="Login">
    <v-card-text>
      <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Passwort"
        counter @click:append="show1 = !show1"></v-text-field>
    </v-card-text>

  </LoginCard>
</template>

<script>

import LoginCard from "@/components/custom/LoginCard.vue";
import authService from '@/services/auth.service';

export default {
  name: "PasswordCard",
  metaInfo: { title: "PasswordCard" },
  components: { LoginCard },
  props: { cardData: { email: "" } },
  data: () => ({
    show1: false,
    password: "",
    loading: false,
    rules: {
      required: (value) => !!value || "Notwendig",
      correct: () => `Email und Passwort stimmen nicht überein!`,
    },
  }),

  methods: {
    next() {
      //success
      //to Dashboard
      authService.login(this.cardData.email, this.password).then((data) => {
        this.$log.debug(data);
        this.loading = true;
        this.$router.push("dashboard");
      })
        .catch((e) => {
          this.loading = false;
          this.$log.error(e);
        });

      //fail
      // show error message and do nothing
    },
    back() {
      this.$emit("setCardType", "email");
    },
  },
};
</script>

<style>

</style>

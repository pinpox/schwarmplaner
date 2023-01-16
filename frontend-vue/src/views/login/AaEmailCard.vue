<template>
  <LoginCard :showBack="false" :disabledNext="!valid" v-on:next="next" :loadingNext="loading">
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field v-model="email" label="Email" :rules="emailRules" hide-details="auto"></v-text-field>
      </v-form>
    </v-card-text>
  </LoginCard>
</template>

<script>
import userService from "@/services/user.service";
import LoginCard from "@/components/custom/LoginCard.vue";

export default {
  name: "EmailCard",
  metaInfo: { title: "EmailCard" },
  props: { cardData: { email: "" } },
  data: () => ({
    email: "",
    loading: false,
    valid: false,
    emailRules: [
      (value) => !!value || "Notwendig",
      (value) => (value || "").length <= 20 || "Max 20 Zeichen",
      (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Ungültige E-mail";
      },
    ],
  }),
  mounted() {
    this.email = this.cardData.email;
  },
  methods: {
    next() {
      // check if known user

      this.loading = true;

      userService
        .emailExist(this.email)
        .then((response) => {
          let respData = response.data.data;
          this.loading = true;
          let cardData = this.cardData;
          cardData.email = this.email;
          if (respData.user.found) {
            cardData.id = respData.user.id;
            this.$emit("setCardType", "password");
          } else {
            // TODO: show error (Not Found)
          }
          this.$emit("onDataChange", cardData);
        })
        .catch((e) => {
          this.loading = false;
          this.$log.error(e);
        });
    },
  },
  components: { LoginCard },
};
</script>

<style>

</style>

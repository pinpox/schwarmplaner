<template>
  <v-app>
    <home-view />
    <home-footer />
  </v-app>
</template>

<script>
import HomeFooter from "./components/Footer.vue";
import HomeView from "./components/BaseView.vue";

export default {
  name: "LocationViewLayout",

  components: {
    HomeFooter,
    HomeView,
  },
};
</script>

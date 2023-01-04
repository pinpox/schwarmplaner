<template>
  <v-app>
    <home-app-bar v-on:showDrawer="showDrawer" iconLink="/admin" />
    <home-view :drawer="drawer" />
    <home-footer />
  </v-app>
</template>

<script>
import HomeFooter from "./components/Footer.vue";
import HomeAppBar from "./components/AppBar.vue";
import HomeView from "./components/BaseView.vue";

export default {
  name: "StartView",
  data: () => ({
    drawer: false,
    drawerPermanent: true,
  }),
  methods: {
    showDrawer(val) {
      console.log(val);
      this.drawer = val;
    },
  },
  components: {
    HomeFooter,
    HomeAppBar,
    HomeView,
  },
};
</script>

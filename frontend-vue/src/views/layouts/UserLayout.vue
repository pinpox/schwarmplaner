<template>
  <v-app>
    <home-app-bar :useDrawer="false" iconLink="/user" />
    <home-view :useDrawer="false" />
    <home-footer />
  </v-app>
</template>

<script>
import HomeFooter from "./components/Footer.vue";
import HomeAppBar from "./components/AppBar.vue";
import HomeView from "./components/BaseView.vue";

export default {
  name: "UserLayout",
  data: () => ({
    drawer: false,
    drawerPermanent: true,
  }),
  methods: {
    showDrawer(val) {
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

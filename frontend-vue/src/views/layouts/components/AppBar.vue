<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
      color="secondary"
    >
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HomeAppBar",
  props: {
    useDrawer: { type: Boolean, default: true },
    iconLink: { type: String, default: "/" },
  },
  data: () => ({
    drawer: false,
  }),

  methods: {
    toStart() {
      const path = this.iconLink;
      if (this.$route.path !== path) this.$router.push(path);
    },

    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.go();
    },
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    isNotHome() {
      return this.$route.name !== "Start";
    },
    showLogoutBtn() {
      return this.loggedIn && this.isNotHome;
    },
  },
  watch: {
    drawer: function (val) {
      this.$emit("showDrawer", val);
    },
  },
};
</script>

<style scoped>
.filter-accent2 {
  filter: invert(10%) sepia(98%) saturate(7351%) hue-rotate(294deg)
    brightness(71%) contrast(106%);
}
</style>

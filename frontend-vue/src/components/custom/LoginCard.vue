<template>
  <div class="max-w-xl m-auto">
    <h1 class="text-center text-6xl">Willkommen beim Schwarmplaner</h1>
    <v-card-subtitle>
      <img class="m-auto p-8" src="@/assets/images/zugvogel_logo.svg" />
    </v-card-subtitle>
    <slot />

    <v-card-actions>
      <v-btn text v-if="showBack" @click="back">{{ textBack }} </v-btn>
      <v-spacer />
      <v-btn :disabled="disabledNext" @click="next" :loading="loadingNext"
        >{{ textNext }}
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  inheritAttrs: false,
  props: {
    showBack: { type: Boolean, default: false },
    textBack: { type: String, default: "Zurück" },
    loadingNext: { type: Boolean, default: false },
    disabledNext: { type: Boolean, default: false },
    textNext: { type: String, default: "Weiter" },
  },
  methods: {
    next() {
      this.$emit("next");
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>

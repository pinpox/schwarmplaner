import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import VueLogger from "vuejs3-logger";
import "./assets/style/main.scss";
import "./index.css";
import "@mdi/font/css/materialdesignicons.css";
import moment from "moment";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";

const vuetify = createVuetify({
  components,
  directives,
});

const loggerOptions = {
  isEnabled: true,
  logLevel: /* isProduction ? "error" : */ "debug",
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: "|",
  showConsoleColors: true,
};

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(moment)
  .use(pinia)
  .use(VueLogger, loggerOptions)
  .mount("#app");

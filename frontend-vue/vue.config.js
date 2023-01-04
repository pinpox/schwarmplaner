const { defineConfig } = require("@vue/cli-service");
const path = require(`path`);

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],

  configureWebpack: {
    devtool: "source-map",
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`),
      },
    },
  },
});

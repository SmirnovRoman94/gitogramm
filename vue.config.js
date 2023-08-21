const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "https://smirnovroman94.github.io/gitogramm/",
  transpileDependencies: true,
  pluginOptions: {
    storybook: {
      allowedPlugins: [
        'define'
      ]
    }
  }
})

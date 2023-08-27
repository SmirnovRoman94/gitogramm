const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_URL,
  transpileDependencies: true,
  pluginOptions: {
    storybook: {
      allowedPlugins: [
        'define'
      ]
    }
  }
})

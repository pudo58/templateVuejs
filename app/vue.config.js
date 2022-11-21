const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: 'y',
      fallbackLocale: 'y',
      localeDir: 'y',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
module.exports={
  publicPath :'/',
  devServer:{
    host : 'localhost',
    port : 80,
    https : false ,
  },

  pluginOptions: {
    i18n: {
      locale: 'y',
      fallbackLocale: 'y',
      localeDir: 'y',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
}

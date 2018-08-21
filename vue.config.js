const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  outputDir: 'dist', // 输出文件目录
  // assetsDir: '', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  lintOnSave: true,
  configureWebpack: () => {},
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))
  },
  css: {},
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock/'
        }
      }
    }
  },
  pwa: {},
  pluginOptions: {}
}

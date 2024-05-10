const { defineConfig } = require('@vue/cli-service');
const fs = require('fs');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = defineConfig({
  outputDir: 'D:\\Python3\\Pet\\pet3\\static\\newstyle\\vue',
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json',
      })
    );
    config.devtool = 'source-map';
  },
  // devServer: {
  //   host: 'sandbox.naukanet.ru',
  //   port: 3001,
  //   server: {
  //     type: 'https',
  //     options: {
  //       key: fs.readFileSync('/etc/apache2/ssl/naukanet.key'),
  //       cert: fs.readFileSync('/etc/apache2/ssl/naukanet.crt')
  //     }
  //   }
  // }
});

var vuxLoader = require('vux-loader')
var fs = require('fs')
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = function (webpackConfig) {
  var vuxLoaderConfig =  vuxLoader.merge(webpackConfig, {
    options: {
      env: process.env.NODE_ENV
    },
    plugins: [{
      name: 'style-parser',
      fn: function (source) {
        console.log('@import "' + path.relative(this.resourcePath, resolve('/src/assets/css/regular.less')).replace(/..\\/, '') + '";\n')
        return '@import "' + path.relative(this.resourcePath, resolve('/src/assets/css/regular.less')).replace(/..\\/, '') + '";\n' + source
      }
    }, {
      name: 'build-done-callback',
      envs: ['production'],
      fn: function () {
        var folderPath = resolve('/dist/static/css')
        var files = fs.readdirSync(folderPath)
        files = files.filter(file => /\.css$/.test(file))
        files.forEach(file => {
          var content = fs.readFileSync(folderPath + '/' + file, 'utf-8')
          var filename = path.join(folderPath, '/', file)
          content = content.replace(/url\(static/g, 'url\(..')
          fs.writeFile(filename, content)
        })
      }
    }]  })
  return vuxLoaderConfig
}

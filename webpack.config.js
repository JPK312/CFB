const path = require('path')

const src = path.resolve('./client/index.js')
const dist = path.resolve('./public')
console.log(src, dist)

module.exports = {
  entry: src,
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
    {
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env",
          "@babel/preset-react"]
        }
      },
      test: /\.js$/,
      exclude: /node_modules/,
      parser: {
        amd: false
      }
    },
    {
      test: /\.css$/i,
      use:["style-loader", "css-loader"]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    }
  ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api': {
        target: {
          host: '127.0.0.1',
          protocol: 'http:',
          port: 3000
        },
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
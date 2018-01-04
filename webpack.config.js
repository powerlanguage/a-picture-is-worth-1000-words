const path = require('path');

const paths = {
  DIST: path.join(__dirname, './client/dist/'),
  SRC: path.join(__dirname, './client/src/')
}

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        paths.SRC
      ],
      exclude: [
        paths.DIST,
        path.join(__dirname, '/node_modules/')
      ],
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react']
      }
    }]
  }
}
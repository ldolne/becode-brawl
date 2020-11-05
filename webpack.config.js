// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      }
    ]
  }
};

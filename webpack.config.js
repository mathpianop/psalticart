const path = require("path");


module.exports = {
  entry: {
    "scales/scales": "./src/javascript/scales.js"
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}
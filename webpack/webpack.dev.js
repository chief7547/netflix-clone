const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  module: {
<<<<<<< HEAD
      rules: [ {
=======
    rules: [
      {
>>>>>>> 3094cd41e994ccfe7cfded1860574bb0e326e39d
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  devServer: {
<<<<<<< HEAD
    contentBase: path.join(__dirname, "src"),
=======
    contentBase: path.join(__dirname, "../src"),
>>>>>>> 3094cd41e994ccfe7cfded1860574bb0e326e39d
    publicPath: "/",
    progress: true,
    port: 8080,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
<<<<<<< HEAD
};
=======
};
>>>>>>> 3094cd41e994ccfe7cfded1860574bb0e326e39d

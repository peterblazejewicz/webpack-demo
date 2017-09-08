import * as HtmlWebpackPlugin from "html-webpack-plugin";
import path = require("path");
import * as webpack from "webpack";

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
};

const config: webpack.Configuration = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that.
  entry: {
    app: PATHS.app,
  },
  output: {
    filename: "[name].js",
    path: PATHS.build,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
  ],
};
export default config;

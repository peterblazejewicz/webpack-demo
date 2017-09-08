import * as HtmlWebpackPlugin from "html-webpack-plugin";
import path = require("path");
import * as webpack from "webpack";
import * as wds from 'webpack-dev-server';

/**
 * Contract for environment variables
 * @interface IEnvironment
 */
interface IEnvironment {
  target?: string;
}
const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
};

const commonConfig: webpack.Configuration = {
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

const productionConfig = () => commonConfig;
const developmentConfig = () => {
    const devServer: wds.Configuration = {
        // Enable history API fallback so HTML5 History API based
      // routing works. Good for complex setups.
      historyApiFallback: true,
      // Parse host and port from env to allow customization.
      // If you use Docker, Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: process.env.HOST, // Defaults to `localhost`
      port: +(process.env.PORT || '8080'), // Defaults to 8080
      publicPath: "/",
      // Display only errors to reduce the amount of output.
      stats: "errors-only",
    };
    const wdsConfig: webpack.Configuration = {
        devServer,
    };
    return Object.assign({},
        commonConfig,
        wdsConfig,
    );
};

export default (env: IEnvironment) => {
  // tslint:disable-next-line:no-console
  console.log("env", env);
  if (env.target === 'production') {
      return productionConfig();
  }
  return developmentConfig();
};

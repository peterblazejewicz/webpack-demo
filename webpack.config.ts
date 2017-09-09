import * as HtmlWebpackPlugin from 'html-webpack-plugin';
/* eslint-disable no-unused-vars */
import { join } from 'path';
/* eslint-disable no-unused-vars */
import * as webpack from 'webpack';
import * as DashboardPlugin from 'webpack-dashboard/plugin';
import * as wds from 'webpack-dev-server';
import * as merge from 'webpack-merge';

/* eslint-disable no-undef */
/**
 * Contract for environment variables
 * @interface IEnvironment
 */
interface IEnvironment {
    /* eslint-disable no-undef */
    progress?: string;
    /* eslint-disable no-undef */
    target?: string;
}
const PATHS = {
    app: join(__dirname, 'app'),
    build: join(__dirname, 'build'),
};

const commonConfig = (): webpack.Configuration => {
    return {
        // Entries have to resolve to files! They rely on Node
        // convention by default so if a directory contains *index.js*,
        // it resolves to that.
        entry: {
            app: PATHS.app,
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    test: /\.js$/,
                },
            ],
        },
        output: {
            filename: '[name].js',
            path: PATHS.build,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack demo',
            }),
            new DashboardPlugin(),
        ],
    };
};

const productionConfig = (): webpack.Configuration => {
    return {};
};

const developmentConfig = (): webpack.Configuration => {
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
        // overlay: true is equivalent
        overlay: {
            errors: true,
            warnings: true,
        },
        port: +(process.env.PORT || '8080'), // Defaults to 8080
        publicPath: '/',
        // Display only errors to reduce the amount of output.
        stats: 'normal',
    };
    const wdsConfig: webpack.Configuration = {
        devServer,
    };
    return wdsConfig;
};

export default (env: IEnvironment) => {
    // tslint:disable-next-line:no-console
    console.log('env', env);
    switch (env.target) {
        case 'production':
            return merge(commonConfig(), productionConfig());
        case 'development':
        default:
            return merge(commonConfig(), developmentConfig());
    }
};

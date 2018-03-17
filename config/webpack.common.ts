import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import merge from 'webpack-merge';

import { lintJavaScript } from './parts';

const PATHS: { app: string; build: string; style: string } = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, '../build'),
    style: path.join(__dirname, '../app/main.scss'),
};

const commonConfig: webpack.Configuration = merge([
    {
        // Entries have to resolve to files! They rely on Node
        // convention by default so if a directory contains *index.js*,
        // it resolves to that.
        entry: {
            app: PATHS.app,
            style: PATHS.style,
        },
        output: {
            filename: '[name].js',
            path: PATHS.build,
        },
        plugins: [
            new HtmlWebpackPlugin({
                excludeAssets: [/style.*.js/], // exclude style.js or style.[chunkhash].js
                title: 'Webpack demo',
            }),
            new DashboardPlugin(),
        ],
    } as webpack.Configuration,
    lintJavaScript({
        include: PATHS.app,
    }),
]);

export default commonConfig;

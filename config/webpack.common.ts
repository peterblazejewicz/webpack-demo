import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as DashboardPlugin from 'webpack-dashboard/plugin';
import * as merge from 'webpack-merge';
import { lintJavaScript } from './parts';

const PATHS = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, '../build'),
};

const commonConfig = merge([
    {
        // Entries have to resolve to files! They rely on Node
        // convention by default so if a directory contains *index.js*,
        // it resolves to that.
        entry: {
            app: PATHS.app,
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
    } as webpack.Configuration,
    lintJavaScript({
        include: PATHS.app,
    }),
]);

export default commonConfig;

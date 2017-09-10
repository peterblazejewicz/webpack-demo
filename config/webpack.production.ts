import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { extractCss } from './parts';

const productionConfig: webpack.Configuration = merge([
    extractCss({
        exclude: /node_modules/,
        use: [
            {
                loader: 'css-loader', // translates CSS into CommonJS
                options: {
                    loader: 'postcss-loader', // Transforming styles with JS plugins
                },
            },
            {
                loader: 'sass-loader', // compiles Sass to CSS
            },
        ],
    }),
]);

export default productionConfig;

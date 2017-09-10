import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { autoprefix, extractCss } from './parts';

const productionConfig: webpack.Configuration = merge([
    extractCss({
        exclude: /node_modules/,
        use: [
            'css-loader', // translates CSS into CommonJS
            autoprefix(), // postcss with autoprefixer
            'sass-loader', // compiles Sass to CSS
        ],
    }),
]);

export default productionConfig;

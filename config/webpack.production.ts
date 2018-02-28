import HtmlWebpackExcludeAssetsPlugin from 'html-webpack-exclude-assets-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
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
    {
        plugins: [new HtmlWebpackExcludeAssetsPlugin()],
    } as webpack.Configuration,
]);

export default productionConfig;

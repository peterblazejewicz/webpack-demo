import webpack from 'webpack';
import merge from 'webpack-merge';
import { devServer, loadCss } from './parts';

const developmentConfig: webpack.Configuration = merge([
    {
        devServer: devServer({
            // Customize host/port here if needed
            host: process.env.HOST,
            port: process.env.PORT ? +(process.env.PORT || 8080) : undefined,
        }),
    } as webpack.Configuration,
    loadCss({ exclude: /node_modules/ }),
]);

export default developmentConfig;

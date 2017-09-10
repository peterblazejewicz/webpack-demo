import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { devServer } from './parts';

const developmentConfig: webpack.Configuration = merge([
    {
        devServer: devServer({
            // Customize host/port here if needed
            host: process.env.HOST,
            port: process.env.PORT ? +(process.env.PORT || 8080) : undefined,
        }),
    } as webpack.Configuration,
]);

export default developmentConfig;

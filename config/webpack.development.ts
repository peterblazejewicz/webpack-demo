import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { devServer } from './parts';

const developmentConfig = merge([
    {
        devServer: devServer({
            // Customize host/port here if needed
            host: process.env.HOST,
            port: +(process.env.PORT || '8080'),
        }),
    } as webpack.Configuration,
]);

export default developmentConfig;

import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import { commonConfig, developmentConfig, productionConfig } from './config/';

/**
 * Composes Wepback configuration options into single config
 * @param {{ progress?: string; target?: string }} env
 * @returns {object} webpack configuration
 */
const config: (
    env: {
        progress?: string;
        target?: string;
    },
) => webpack.Configuration = env => {
    // tslint:disable-next-line:no-console
    console.log('env', env);
    switch (env.target) {
        case 'production':
            return merge(commonConfig, productionConfig);
        case 'development':
        default:
            return merge(commonConfig, developmentConfig);
    }
};
export default config;

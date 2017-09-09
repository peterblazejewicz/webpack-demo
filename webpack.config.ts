import * as merge from 'webpack-merge';
import { commonConfig, developmentConfig, productionConfig } from './config/';

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

export default (env: IEnvironment) => {
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

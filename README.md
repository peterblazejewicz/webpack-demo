# webpack-demo

Read: https://survivejs.com/webpack/

## Note

This project derives from the original source code  that ships with a book. The code within this project is a mix of TypeScript and ES6 JavaScript. The TypeScript is used for type rich Webpack configuration, splitting in final Webpack configuration composition.

## Information

This version comes with some TypeScript support. The Webpack configuration is based on types and default support for `.ts` extension with the help of `ts-node`. 
See [Unambiguous Webpack config with Typescript](https://medium.com/webpack/unambiguous-webpack-config-with-typescript-8519def2cac7) to get some information on the concept. This project took a concept of using TypeScript in Webpack configuration, but modified it for code splitting and composing final configuration.

## Example TypeScript configuration

```ts
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
```

```ts
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
```

## Author

@peterblazejewicz

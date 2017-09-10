import { Condition, Configuration, NewLoaderRule } from 'webpack';

const loadCss: (
    {
        include,
        exclude,
    }: {
        include?: Condition | Condition[];
        exclude?: Condition | Condition[];
    },
) => Configuration = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                exclude,
                include,
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
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
            },
        ],
    },
});

export default loadCss;

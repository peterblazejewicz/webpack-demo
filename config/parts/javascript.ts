import { Condition, Configuration, NewLoaderRule } from 'webpack';

const lintJavaScript: (
    {
        include,
        exclude,
        options,
    }: {
        include?: Condition | Condition[];
        exclude?: Condition | Condition[];
        options?: NewLoaderRule;
    },
) => Configuration = ({ include, exclude, options }) => ({
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude,
                include,
                loader: 'eslint-loader',
                options,
                test: /\.js$/,
            },
        ],
    },
});

export default lintJavaScript;

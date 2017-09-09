import { Condition, NewLoaderRule } from 'webpack';

const lintJavaScript = ({
    include,
    exclude,
    options,
}: {
    include?: Condition | Condition[];
    exclude?: Condition | Condition[];
    options?: NewLoaderRule;
}) => ({
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

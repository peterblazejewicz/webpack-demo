import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { Condition, Configuration, Loader } from 'webpack';

const plugin = new ExtractTextPlugin({
    filename: '[name].css',
});
const loadCss: (
    {
        include,
        exclude,
        use,
    }: {
        include?: Condition | Condition[];
        exclude?: Condition | Condition[];
        use?: Loader | Loader[];
    },
) => Configuration = ({ include, exclude, use } = {}) => ({
    module: {
        rules: [
            {
                exclude,
                include,
                test: /\.scss$/,
                use: plugin.extract({
                    fallback: 'style-loader',
                    use,
                }),
            },
        ],
    },
    plugins: [plugin],
});

export default loadCss;

import { Condition, Configuration, NewLoaderRule } from 'webpack';

const loadCss: (
    {
        include,
        exclude,
    }: {
        include?: Condition | Condition[];
        exclude?: Condition | Condition[];
    },
) => Configuration = ({ include, exclude } = {}) => {
    return {
        module: {
            rules: [
                {
                    exclude,
                    include,
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    };
};

export default loadCss;

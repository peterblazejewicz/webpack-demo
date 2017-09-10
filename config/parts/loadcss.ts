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
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
};

export default loadCss;

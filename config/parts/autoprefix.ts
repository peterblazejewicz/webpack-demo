import * as autoprefixer from 'autoprefixer';
import { Loader } from 'webpack';

const autoprefix: () => Loader = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => [autoprefixer()],
    },
});

export default autoprefix;

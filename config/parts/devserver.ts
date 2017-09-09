import * as wds from 'webpack-dev-server';

const devServer = ({ host, port }: { host?: string; port?: number } = {}) => {
    const devServer: wds.Configuration = {
        // Enable history API fallback so HTML5 History API based
        // routing works. Good for complex setups.
        historyApiFallback: true,
        // Parse host and port from env to allow customization.
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        // overlay: true is equivalent
        overlay: {
            errors: true,
            warnings: true,
        },
        port: +(process.env.PORT || '8080'), // Defaults to 8080
        publicPath: '/',
        // Display only errors to reduce the amount of output.
        stats: 'normal',
    };
    return devServer;
};

export default devServer;

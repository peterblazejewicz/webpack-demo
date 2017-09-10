import { Condition } from 'webpack';
import * as wds from 'webpack-dev-server';

/**
 * Factory method that creates webpack-dev-server configuration
 * @param {{host?: string, port?: number}} [{ host, port }={ port: 8080 }]
 * @returns webpack-dev-server configuration
 */
const devServer: (
    { host, port }: { host?: string; port?: number | undefined },
) => wds.Configuration = ({ host, port } = { port: 8080 }) => {
    return {
        // Enable history API fallback so HTML5 History API based
        // routing works. Good for complex setups.
        historyApiFallback: true,
        // Parse host and port from env to allow customization.
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host, // Defaults to `localhost`
        // overlay: true is equivalent
        overlay: {
            errors: true,
            warnings: true,
        },
        port, // Defaults to 8080
        publicPath: '/',
        // Display only errors to reduce the amount of output.
        stats: 'normal',
    };
};

export default devServer;

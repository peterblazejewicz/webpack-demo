/**
 * Redeclare missing types for modules merging
 */
declare module "webpack-dev-server" {
    export interface Configuration {
        host?: string;
        overlay?: boolean | object;
        port?: number;
    }
}

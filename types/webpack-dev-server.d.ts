/**
 * Redeclare missing types for modules merging
 */
import * as wds from "webpack-dev-server";
declare module "webpack-dev-server" {
    export interface Configuration {
        host?: string;
        overlay?: boolean | object;
        port?: number;
    }
}

import {ApiRoutes} from "./api-routes";

export const environment = {
    name: 'production',
    production: true,
    api: {
        base: `https://${location.hostname}/api/`,
        routes: ApiRoutes
    }
};

import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./auth.service";

const history = createBrowserHistory();

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    if (authService.isAthenticated()) {
        const access = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
})

let isRefreshing = false;

axios.interceptors.response.use((config) => {
        return config;
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true;

            try {
                await authService.refresh(refresh);
            } catch (e) {
                authService.deleteTokens();
                history.replace('/login?expSession=true');
            }
            isRefreshing = false;
            return axiosService(error.config);
        }
        return Promise.reject(error);
    }
);

export {
    axiosService,
    history
};


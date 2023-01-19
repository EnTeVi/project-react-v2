import {axiosService} from "./axios.service";
import {urls} from "../../configs/url";

const rocketService = {
    getAll: () => axiosService.get(urls.launches)
}

export {rocketService};
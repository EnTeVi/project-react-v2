import {axiosService} from "./axios.service";
import {urls} from "../configs";

const togosService = {
    getAll: () => axiosService.get(urls.togos)
}

export {
    togosService
}
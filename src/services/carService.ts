import {apiService, IRes} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll: ():IRes<ICar[]> => apiService.get(urls.cars.base)
}

export {
    carService
}
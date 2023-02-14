import {axiosService} from "./axios.service";
import {IUser} from "../tipization/func.tipization";
import {IRes} from "../interfaces/responce.interface";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get('/users')
};

export {
    userService
}

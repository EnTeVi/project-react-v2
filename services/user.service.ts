import {axiosService} from "./axios.service";
import {IUser} from "../tipization";
import {IRes} from "../interfaces";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get('/users')
};

export {
    userService
}

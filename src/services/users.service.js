import {urls} from "../configs";
import {axiosService} from "./axios.service";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    createUser: (newUser) => axiosService.post(urls.users, newUser)
}

export {
    usersService
}

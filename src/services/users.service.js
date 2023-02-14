import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    create: (user) => axiosService.post(urls.users, user)
}

export {
    usersService
}

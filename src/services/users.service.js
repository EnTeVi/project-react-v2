import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    createUser: (newUser) => axiosService.post(urls.users, newUser),
    updateUserById: (id, data) => axiosService.put(`${urls.users}/${id}`, data),
    deleteUser: (id) => axiosService.delete(`${urls.users}/${id}`)
};

export {
    usersService
};
import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getById: (id) => axiosService(`${urls.post}/${id}`)
};

export {
    postService
};
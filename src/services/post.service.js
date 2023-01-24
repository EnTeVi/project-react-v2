import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postService = {
    getByUserId:(userId) => axiosService.get(urls.posts, {params:{userId}})
}

export {
    postService
}
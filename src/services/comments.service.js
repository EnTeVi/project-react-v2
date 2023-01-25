import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    createComment: (newComment) => axiosService.post(urls.comments, newComment)
}

export {
    commentsService
}
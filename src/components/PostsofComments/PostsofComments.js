import {useEffect, useState} from "react";
import {postService} from "../../services";

const PostsofComments = ({postId}) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data));
    }, [postId])

    const {userId, id, title, body} = post;
    
    return (
        <div>
            <div>
                <p>UserId: </p>
                <p>{userId}</p>
            </div>
            <div>
                <p>Id: </p>
                <p>{id}</p>
            </div>
            <div>
                <p>Title: </p>
                <p>{title}</p>
            </div>
            <div>
                <p>Body: </p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export {PostsofComments};
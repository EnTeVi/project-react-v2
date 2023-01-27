import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        if (postId) {

        postsService.getById(postId).then(({data}) => setPost(data))
        }
    }, [postId])


    const {userId, id, title, body} = post;

    if (!post) return null;
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

export {PostDetailsPage};
import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";

const PostsDetails = ({postId, state}) => {
    const [post, setPost] = useState([]);

    useEffect((state) => {
        // тут прикол в тому, шоб не робити новий запит на сервер, якщо дані вже у нас є можна
        // їх запхати в post і таким чином скоротити час загрузки і не робити непотрібний запит
        if (state) {
            setPost({...state});
        } else {
            postsService.getById(postId).then(({data}) => {
                setPost(data)
            });
        }
    }, [postId]);

    return (
        <div>
            <p>Id: {post.id}</p>
            <p>userId: {post.userId}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    );
};

export {PostsDetails};
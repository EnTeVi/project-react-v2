import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import css from './PostDetailsPage.module.css';

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
        <div className={css.boxPost} id='postDetails'>
            <div className={css.postParams}>
                <p className='boxLeft'>UserId: </p>
                <p className='boxRight'>{userId}</p>
            </div>
            <div className={css.postParams}>
                <p className='boxLeft'>Id: </p>
                <p className='boxRight'>{id}</p>
            </div>
            <div className={css.postParams}>
                <p className='boxLeft'>Title: </p>
                <p className='boxRight'>{title}</p>
            </div>
            <div className={css.postParams} >
                <p className='boxLeft'>Body: </p>
                <p className='boxRight'>{body}</p>
            </div>
        </div>
    );
};

export {PostDetailsPage};
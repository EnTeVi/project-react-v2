import React from 'react';
import css from './Comment.module.css';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <div className={css.commentsParams}>
                <p>PostId: </p>
                <p>{postId}</p>
            </div>
            <div className={css.commentsParams}>
                <p>Id: </p>
                <p>{id}</p>
            </div>
            <div className={css.commentsParams}>
                <p>Name: </p>
                <p>{name}</p>
            </div>
            <div className={css.commentsParams}>
                <p>Email: </p>
                <p>{email}</p>
            </div>
            <div className={css.commentsParams}>
                <p>Body: </p>
                <p>{body}</p>
            </div>

            <div>
                <button onClick={() => {
                    navigate(postId.toString())
                }}>What it's post?</button>
            </div>
        </div>
    );
};

export {Comment};
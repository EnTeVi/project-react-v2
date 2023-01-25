import React from 'react';
import {Comment} from "../comment/Comment";
import css from './Comments.module.css';

const Comments = ({comments}) => {

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};
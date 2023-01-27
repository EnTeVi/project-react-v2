import React from 'react';
import css from './Todo.module.css';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    return (
        <div>
            <div className={css.todoParams}>
                <p>UserId: </p>
                <p>{userId}</p>
            </div>
            <div className={css.todoParams}>
                <p>Id: </p>
                <p>{id}</p>
            </div>
            <div className={css.todoParams}>
                <p>Title: </p>
                <p>{title}</p>
            </div>
            <div className={css.todoParams}>
                <p>Completed: </p>
                <p>{completed}</p>
            </div>
        </div>
    );
};

export {Todo};
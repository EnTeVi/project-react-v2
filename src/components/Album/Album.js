import React from 'react';
import css from './Album.module.css';

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div>
            <div className={css.albumsParams}>
                <p>userId: </p>
                <p>{userId}</p>
            </div>
            <div className={css.albumsParams}>
                <p>id: </p>
                <p>{id}</p>
            </div>
            <div className={css.albumsParams}>
                <p>title: </p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export {Album};
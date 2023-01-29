import {useNavigate} from "react-router-dom";

import css from './Comment.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    const showHide = () => {
        let idPost = document.getElementById('postDetails');
        if (idPost.style.display === 'none'){
            idPost.style.display = '';
        } else {
            idPost.style.display = 'none';
        }
    }

    return (
        <div className='container' >
            <div className={css.commentsParams}>
                <p className='boxLeft'>PostId: </p>
                <p className='boxRight'>{postId}</p>
            </div>
            <div className={css.commentsParams}>
                <p className='boxLeft'>Id: </p>
                <p className='boxRight'>{id}</p>
            </div>
            <div className={css.commentsParams}>
                <p className='boxLeft'>Name: </p>
                <p className='boxRight'>{bigword(name)}</p>
            </div>
            <div className={css.commentsParams}>
                <p className='boxLeft'>Email: </p>
                <p className='boxRight'>{email.toLowerCase()}</p>
            </div>
            <div className={css.commentsParams}>
                <p className='boxLeft'>Body: </p>
                <p className='boxRight'>{bigword(body)}</p>
            </div>

            <div>
                <button onClick={() => {
                    navigate(postId.toString())
                    showHide();
                }}>Show/hide post</button>
            </div>
        </div>
    );
};

export {Comment};
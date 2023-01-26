import React from 'react';
import {PostsDetails} from "../../components";
import {useLocation, useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {postId} = useParams();

    // передача даних з post через state
    // тут їх відхоплюємо і передаємо в postdetails
    const {state} = useLocation();


    return (
        <div>
            <PostsDetails postId={postId} state={state}/>
        </div>
    );
};

export {PostDetailsPage};

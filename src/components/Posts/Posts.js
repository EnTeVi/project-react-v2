import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postsAction} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, errors, loading} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postsAction.getAll())
    }, [dispatch]);

    return (
        <div>
            {
                errors && JSON.stringify(errors)
            }
            {
                loading && <h1>Loading posts.......</h1>
            }
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};
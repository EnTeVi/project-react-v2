import {useDispatch} from "react-redux";

import {postsAction} from "../../redux";

const Post = ({post}) => {
    const {id, title, body} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>

            <button onClick={() => {
                dispatch(postsAction.setSelectedPosts(post))
            }}>
                Select
            </button>

            <button onClick={() =>
                dispatch(postsAction.getById({id}))
            }>
                API Select
            </button>
        </div>
    );
};

export {Post};
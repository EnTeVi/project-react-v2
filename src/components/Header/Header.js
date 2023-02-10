import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            <div><h1>Lesson 6</h1></div>

            <p>
                {
                    selectedUser && selectedUser.name
                }
                {
                    selectedPost && selectedPost.title
                }
            </p>

        </div>
    );
};

export {Header};
import {Link, useNavigate} from "react-router-dom";


const Post = ({post}) => {
    const {id, userId, title} = post;
    // useNavigate це заміна Link, але він працює у функції
    const navigate = useNavigate();

    return (
        <div>
            <p>Id: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            {/*<Link to={id.toString()} state={{...post}}>Post Details</Link>*/}
            <button onClick={() => navigate(id.toString(), {state: post})}>Details</button>
        </div>
    );
};

export {Post};
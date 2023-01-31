import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    let commentNavigate = useNavigate();

    return (
        <div className='blockComponents'>
            <div>
                <p>PostId: </p>
                <p>{postId}</p>
            </div>
            <div>
                <p>Id: </p>
                <p>{id}</p>
            </div>
            <div>
                <p>Name: </p>
                <p>{bigword(name)}</p>
            </div>
            <div>
                <p>Email: </p>
                <p>{email.toLowerCase()}</p>
            </div>
            <div>
                <p>Body: </p>
                <p>{bigword(body)}</p>
            </div>

            <div>
                <button onClick={() => commentNavigate(postId.toString())}>
                    comment details
                </button>
            </div>
        </div>
    );
};

export {Comment};
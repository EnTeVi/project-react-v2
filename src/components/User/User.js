import {useDispatch} from "react-redux";
import {userAction} from "../../redux";

const User = ({user}) => {
    const {id, name, username} = user;
    const dispatch = useDispatch();

    return (
        <div>
            <p>{id}</p><p>{name}</p><p>{username}</p>
            <button onClick={() => {
                dispatch(userAction.setSelectedUser(user))
            }}>Select</button>
            <button onClick={() => dispatch(userAction.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {User};
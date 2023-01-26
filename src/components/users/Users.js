import {User} from "../user/User";
import css from './Users.module.css'

const Users = ({users}) => {

    return (
        <div className={css.blockUser}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};
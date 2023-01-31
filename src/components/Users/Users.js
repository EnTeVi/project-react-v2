import {User} from "../User/User";

const Users = ({users, setUpdateUser, setUsers}) => {

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUpdateUser={setUpdateUser} setUsers={setUsers}/>)
            }
        </div>
    );
};

export {Users};
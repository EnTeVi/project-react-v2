import {useNavigate} from "react-router-dom";
import {usersService} from "../../services";

const User = ({user, setUpdateUser, setUsers}) => {
    const {id, name, email} = user;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    const navigate = useNavigate();

    return (
        <div className='blockComponents'>
            <div>
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
                    <button  onClick={() => setUpdateUser(user)}>
                        Update
                    </button>
                    <button  onClick={() => {
                        usersService.deleteUser(id).then(async () => {
                            const {data} = await usersService.getAll();
                            setUsers([...data]);
                        })
                    }}>
                        Delete
                    </button>
                </div>
            </div>

            <div>
                <button onClick={() => navigate(id.toString(), {state: user})}>
                    Details
                </button>
            </div>
        </div>
    );
};

export {User};
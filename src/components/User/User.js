import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    const navigate = useNavigate();

    return (
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
                <button onClick={() => navigate(id.toString(), {state: user})}>
                    Details
                </button>
            </div>
        </div>
    );
};

export {User};
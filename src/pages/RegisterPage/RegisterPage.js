import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {usersService} from "../../services";

const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const registerUser = async (user) => {
        try {
            await usersService.create(user);
            navigate('/login');
        } catch (e) {
            setError(e.response.data.detail);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>Register</button>
                </form>
            </div>

            {error && <div>{error}</div>}
        </div>
    );
};

export {RegisterPage};
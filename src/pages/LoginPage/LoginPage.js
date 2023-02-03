import {useRef} from "react";
import {useAuthContext} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";
import css from './LoginPage.module.css';

const LoginPage = () => {
    const username = useRef();
    const {logIn} = useAuthContext()
    const navigate = useNavigate();
    const {state} = useLocation();

    const login = () => {
        logIn(username.current.value);
        navigate(state.pathname, {replace: true})
    }

    return (
        <div className={css.login}>
            <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {LoginPage};
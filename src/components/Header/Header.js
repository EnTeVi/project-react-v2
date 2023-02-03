import css from './Header.module.css';
import {useAuthContext} from "../../hooks";

const Header = ({navigate}) => {
    const {user} = useAuthContext();
    const {logOut} = useAuthContext();


    return (
        <div className={css.header}>
            <div className={css.siteName}>
                <h1>Project</h1>
            </div>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate(1)}>Next</button>
            </div>
            <div className={css.login}>
                {user && <div>{user} <button  onClick={() => logOut()}>LogOut</button></div>}
            </div>

        </div>
    );
};

export {Header};
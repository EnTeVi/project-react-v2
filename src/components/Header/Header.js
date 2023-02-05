import {NavLink} from "react-router-dom";

import {LinkRoutes} from "../../routes";
import {useAuthContext} from "../../hooks";
import css from './Header.module.css';

const Header = ({navigate}) => {
    const {user} = useAuthContext();
    const {logOut} = useAuthContext();

    const logination = () => {
        if (user) {
            return user && <div>{user} <button onClick={() => logOut()}>LogOut</button></div>
        } else {
            return <NavLink to={LinkRoutes.login}>Login</NavLink>

        }
    }

    return (
        <div className={css.container}>
            <div className={css.nameSite}>
                <div>
                    <NavLink to={LinkRoutes.home}>ProjectHome</NavLink>
                </div>
            </div>
            <div className={css.but}>
                <button className={css.left} onClick={() => navigate(-1)}>Back</button>
                <button className={css.right} onClick={() => navigate(1)}>Next</button>
            </div>
            <div className={css.log}>
                {
                    logination()
                }

            </div>
        </div>
    );
};

export {Header};
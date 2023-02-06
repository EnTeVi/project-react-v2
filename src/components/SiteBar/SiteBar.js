import {NavLink} from "react-router-dom";
import css from './SiteBar.module.css';
import {LinkRoutes} from "../../routes";

const SiteBar = () => {
    return (
        <div className={css.sitebar}>
            <NavLink to={LinkRoutes.index}>Home</NavLink>
            <NavLink to={LinkRoutes.about}>About</NavLink>
            <NavLink to={LinkRoutes.users}>Users</NavLink>
        </div>
    );
};

export {SiteBar};
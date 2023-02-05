import {NavLink} from "react-router-dom";

import {LinkRoutes} from "../../routes";
import css from './SiteBar.module.css';

const SiteBar = () => {
    return (
        <div className={css.siteBar}>
            <NavLink to={LinkRoutes.home}>Home</NavLink>
            <NavLink to={LinkRoutes.comments}>Comments</NavLink>
            <NavLink to={LinkRoutes.posts}>Post</NavLink>
            <NavLink to={LinkRoutes.about}>About</NavLink>
        </div>
    );
};

export {SiteBar};
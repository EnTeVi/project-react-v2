import {NavLink} from "react-router-dom";
import {LinkRoutes} from "../../routes/link.routes";
import css from './SiteBar.module.css';

const SiteBar = () => {


 return (
     <div className={css.boxSiteBar}>
         <NavLink to={LinkRoutes.index}>Home</NavLink>
         <NavLink to={LinkRoutes.albums}>Albums</NavLink>
         <NavLink to={LinkRoutes.users}>Users</NavLink>
         <NavLink to={LinkRoutes.comments}>Comments</NavLink>
         <NavLink to={LinkRoutes.todos}>Todos</NavLink>
         <NavLink to={LinkRoutes.about}>About</NavLink>
     </div>
 );
};

export {SiteBar};
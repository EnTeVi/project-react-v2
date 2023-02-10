import {NavLink} from 'react-router-dom';

const SiteBar = () => {
    return (
        <div>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
        </div>
    );
};

export {SiteBar};
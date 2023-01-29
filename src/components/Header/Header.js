import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = ({navigate}) => {
    return (
        <div className={css.header}>

            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'albums'}>Albums</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
                <NavLink to={'todos'}>Togos</NavLink>
                <NavLink to={'about'}>About</NavLink>
            </div>

            <div className={css.but}>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate(1)}>Next</button>
            </div>

        </div>
    );
};

export {Header};
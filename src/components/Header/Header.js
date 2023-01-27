import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'todos'}>Togos</NavLink>
            <NavLink to={'about'}>About</NavLink>
        </div>
    );
};

export {Header};
import {UserForm, Users} from "../../components";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import css from './UsersPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [updateUser, setUpdateUser] = useState(null);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div className={css.container}>
            <UserForm setUsers={setUsers} updateUser={updateUser}/>
            <Outlet/>
            <Users users={users} setUpdateUser={setUpdateUser} setUsers={setUsers}/>
        </div>
    );
};

export {UsersPage};
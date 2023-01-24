import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";
import './Users.css';

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]));
    }, [])

    return (
        <div className='userContainer'>
            {
                users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)
            }
        </div>
    );
};

export {Users};
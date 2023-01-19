import React, {useEffect, useState} from 'react';

import {gorizontalScroll} from "../ScrollFunction/ScrollFunction";
import {User} from "../User/User";
import './Users.css';


const Users = () => {

    const [users, setUsers] = useState([]);
    const [liftUs, setLiftUs] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
        gorizontalScroll();
    }, [])

    const liftUser = (id) => {
        setLiftUs(id);
    }

    return (
        <div>
            <div className='liftInfo'>
                {liftUser && (<div>{liftUs}</div>)}
            </div>

            <div className='box-user'>
                {users.map(user => <User key={user.id} user={user} liftUser={liftUser}/>)}
            </div>
        </div>
    );
};

export {Users};
import React, {useEffect, useState} from 'react';

import {User} from "../User/User";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [liftUs, setLiftUs] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const liftUser = (id) => {
        // console.log(id);
        setLiftUs(id);
    }

    return (
        <div>
            <div>
                {liftUser && (<div>{liftUs}</div>)}
            </div>

            <div>
                {users.map(user => <User key={user.id} user={user} liftUser={liftUser}/>)}
            </div>
        </div>
    );
};

export {Users};
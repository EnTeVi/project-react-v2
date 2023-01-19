import React, {useEffect, useState} from 'react';

import {User} from "../User/User";
import './Users.css';


const Users = () => {

    const [users, setUsers] = useState([]);
    const [liftUs, setLiftUs] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const liftUser = (id) => {
        setLiftUs(id);
    }

    let mycustomscroll = document.querySelector('.box-user');
    mycustomscroll.addEventListener("wheel", function(e){
        e.stopPropagation();
        let scroll = mycustomscroll.scrollLeft;
        console.log(scroll);
        mycustomscroll.scrollLeft = (scroll + e.deltaY);
    });

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
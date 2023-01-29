import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {User} from "../User/User";

const UserDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (id) {
            fetch('https://jsonplaceholder.typicode.com/users/id')
                .then(value => value.json())
                .then(value => setUser(value));
        }
    }, [id])

    const {phone, website} = user;

    if (!user) return null;

    return (
        <div>
            {
                <User one={<div  id='infoNone'>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                </div> }/>
            }
        </div>
    );
};

export {UserDetails};
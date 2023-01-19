import React from "react";

import './User.css';

const User = ({user, liftUser}) => {
    let {id, name, email, phone, website} = user;

    return (
        <div className='box-us'>
            <p>Id: {id}</p>
            <p>Name: {name}</p>

            <button onClick={() => {
                liftUser(
                    <div>
                        <p>Id: {id}</p>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                        <p>Website: {website}</p>
                    </div>
                )
            }}>Deteils</button>
        </div>
    );
};

export {User};
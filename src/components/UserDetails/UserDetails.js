import {useEffect, useState} from "react";
import {usersService} from "../../services";

const UserDetails = ({userId, state}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (state) {
            setUser({...state});
        } else {

            usersService.getById(userId).then(({data}) => {
                setUser(data)
            });
        }
    }, [userId]);

    const {id, name, username, email, phone, website} = user;

    return (
        <div>
            <div>
                <p>Id: </p>
                <p>{id}</p>
            </div>
            <div>
                <p>Name: </p>
                <p>{name}</p>
            </div>
            <div>
                <p>UserName: </p>
                <p>{username}</p>
            </div>
            <div>
                <p>Email: </p>
                <p>{email}</p>
            </div>
            <div>
                <p>Phone: </p>
                <p>{phone}</p>
            </div>
            <div>
                <p>Website: </p>
                <p>{website}</p>
            </div>
        </div>
    );
};

export {UserDetails};
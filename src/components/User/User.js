import './User.css';

const User = ({user, setUserId}) => {
    let {id, name, email} = user;

    return (
        <div className='boxUser'>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={() =>
                setUserId(id)
            }>Read posts</button>
        </div>
    );
};

export {User};



const User = ({user}) => {
    const {id, name, email} = user;

    return (
        <div>
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>

        </div>
    );
};

export {User};
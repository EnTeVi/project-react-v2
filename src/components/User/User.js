const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export {User};
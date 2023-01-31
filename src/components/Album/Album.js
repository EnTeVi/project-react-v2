const Album = ({album}) => {
    const {userId, id, title} = album;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    return (
        <div className='blockComponents'>
            <div>
                <p>UserId: </p>
                <p>{userId}</p>
            </div>
            <div>
                <p>Id: </p>
                <p>{id}</p>
            </div>
            <div>
                <p>Title: </p>
                <p>{bigword(title)}</p>
            </div>
        </div>
    );
};

export {Album};
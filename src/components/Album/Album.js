import css from './Album.module.css';

const Album = ({album}) => {
    const {userId, id, title} = album;

    const bigword = (arg) => {
        return arg[0].toUpperCase() + arg.slice(1) + '.';
    }

    return (
        <div className='container'>
            <div className={css.albumsParams}>
                <p className='boxLeft'>UserId: </p>
                <p className='boxRight'>{userId}</p>
            </div>
            <div className={css.albumsParams}>
                <p className='boxLeft'>Id: </p>
                <p className='boxRight'>{id}</p>
            </div>
            <div className={css.albumsParams}>
                <p className='boxLeft'>Title: </p>
                <p className='boxRight'>{bigword(title)}</p>
            </div>
        </div>
    );
};

export {Album};
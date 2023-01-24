import './Post.css';

const Post = ({post}) => {
    let {id, userId, title} = post;

    let newStr = title[0].toUpperCase() + title.slice(1) + '.';

    return (
        <div className='boxPost'>
            <p><h5 className='blockName'>Id:</h5> <h5 className='blockTitle'>{id}</h5></p>
            <p><h5 className='blockName'>UserId:</h5> <h5 className='blockTitle'>{userId}</h5></p>
            <p><h5 className='blockName'>Title:</h5> <h5 className='blockTitle'>{newStr}</h5></p>
        </div>
    );
};

export {Post};
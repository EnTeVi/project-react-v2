import './Post.css';

const Post = ({post, liftPost}) => {
    let {userId, id, title, body} = post;

    // 5. task
    // let click = () => {
    //     console.log('Click me');
    // }
    return (
        <div className='box-marking'>

            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>

            {/*5.*/}
            {/*<button onClick={click}>Click me</button>*/}

            <button onClick={() => {
                liftPost(
                    <div>
                        <p>UserId: {userId}</p>
                        <p>Id: {id}</p>
                        <p>Title: {title}</p>
                        <p>Body: {body}</p>
                    </div>);
            }}>Deleils</button>

        </div>
    );
};

export {Post};


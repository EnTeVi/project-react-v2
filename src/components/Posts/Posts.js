import React, {useEffect, useState} from 'react';
// import {posts} from "../DataBases/PostsUsersDB";
import {Post} from "../Post/Post";

const Posts = () => {

    // 3. tast
    // let getPosts = [];
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(value => value.json())
    //     .then(value => getPosts = value);

    const [posts, setPosts] = useState([]);
    const [lift, setLiftPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value));
    }, []);

    const liftPost = (id) => {
        console.log(id);
        setLiftPost(id);
    }


    return (
        <div>

            {/*2. task*/}
            {/*<div>*/}
            {/*    {posts.map(post => <Post key={post.id} post={post}/>)}*/}
            {/*</div>*/}

            {/*3. task*/}
            {/*<div>*/}
            {/*    {getPosts.map(post => <Post key={post.id} post={post}/>)}*/}
            {/*</div>*/}

            {liftPost && (<div>{lift}</div>)}

            <div>
                {posts.map(post => <Post key={post.id} post={post} liftPost={liftPost}/>)}
            </div>

        </div>
    );
};

export {Posts};
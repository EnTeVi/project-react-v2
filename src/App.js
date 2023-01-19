import React from "react";

import './App.css';
import {Posts} from "./components";
// import {posts} from "./components/DataBases/PostsUsersDB";

function App() {
  return (
    <div className="App">

        <div className='header'>
            <h1>Posts of users</h1>
        </div>

        {/*1. task*/}
        {/*<div>*/}
        {/*    {posts.map(post =>*/}
        {/*        <div>*/}
        {/*            <p>UserId: {post.userId}</p>*/}
        {/*            <p>Id: {post.id}</p>*/}
        {/*            <p>Title: {post.title}</p>*/}
        {/*            <p>Body: {post.body}</p>*/}
        {/*        </div>)}*/}
        {/*</div>*/}

        <div className='container'>
            <Posts/>
        </div>

    </div>
  );
}

export default App;

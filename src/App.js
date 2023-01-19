import React from "react";

import './App.css';
// import {posts} from "./components/DataBases/PostsUsersDB";
import {Posts} from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">

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

      <Posts/>

    </div>
  );
}

export default App;

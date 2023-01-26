import React from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <Outlet/>
            <Posts/>
        </div>
    );
};

export {PostsPage};
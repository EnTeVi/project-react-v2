import React from 'react';

import './App.css';
import {Users} from "./components";

function App() {

    return (
        <div className="App" id="Apps">

            <div className='header'>
                <h1>Users</h1>
            </div>

            <div className='container'>
                <Users/>
            </div>

        </div>
    );
}

export default App;

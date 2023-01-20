import React, {useEffect, useState} from "react";

import {RocketMarking} from "../RocketMarking/RocketMarking";
import {rocketService} from "../services/user.service";
import './RocketsLaunch.css';

const RocketsLaunch = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        rocketService.getAll()
            .then(({data}) => setRockets(data))
    }, []);

    return (
        <div>
            <div className='container-rocket'>
                {rockets.map(rocket => <RocketMarking key={rocket.id} rocket={rocket}/>)}
            </div>
        </div>
    );
};

export {RocketsLaunch};
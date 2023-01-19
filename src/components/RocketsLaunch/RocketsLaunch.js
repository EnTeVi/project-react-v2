import React, {useEffect, useState} from "react";
import {rocketService} from "../services/user.service";
import {RocketMarking} from "../RocketMarking/RocketMarking";
import './RocketsLaunch.css';

const RocketsLaunch = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        rocketService.getAll()
            .then(({data}) => setRockets(data))
            // .then(value => setRockets(value.data));
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
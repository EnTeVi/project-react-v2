import React, {useEffect, useState} from 'react';
import {togosService} from "../../services";
import {Togo} from "../Togo/Togo";

const Togos = () => {
    const [togos, setTogos] = useState([]);

    useEffect(() => {
        togosService.getAll().then(({data}) => setTogos([...data]));
    }, []);

    return (
        <div>
            {
                togos.map(togo => <Togo key={togo.id} togo={togo}/>)
            }
        </div>
    );
};

export {Togos};
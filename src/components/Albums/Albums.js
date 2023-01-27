import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums([...data]));
    }, []);
    console.log(albums)

    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {Albums};
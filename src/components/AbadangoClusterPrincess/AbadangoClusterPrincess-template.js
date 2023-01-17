export const ASPTemp = () => {
    let id = 6;
    let name = "Abadango Cluster";
    let status = "Alive";
    let species = "Alien";
    let gender = "Female";
    let image = "https://rickandmortyapi.com/api/character/avatar/6.jpeg";
    return (

        <div className='boxAlad'>
            <h1>name: {name}</h1>
            <p>id: {id}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="Abadango Cluster Princess"/>
        </div>
    );
};
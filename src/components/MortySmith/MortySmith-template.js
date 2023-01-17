export const MortySmithTemplate = () => {
    let id = 2;
    let name = "Morty Smith";
    let status = "Alive";
    let species = "Human";
    let gender = "Male";
    let image = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
    return (

        <div className='boxMorty'>
            <h1>name: {name}</h1>
            <p>id: {id}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="Morty Smith"/>
        </div>
    );
};
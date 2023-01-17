export const JerrySmithTemplate = () => {
    let id = 5;
    let name = "Jerry Smith";
    let status = "Alive";
    let species = "Human";
    let gender = "Male";
    let image = "https://rickandmortyapi.com/api/character/avatar/5.jpeg";
    return (

        <div className='boxJerry'>
            <h1>name: {name}</h1>
            <p>id: {id}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="Jerry Smith"/>
        </div>
    );
};
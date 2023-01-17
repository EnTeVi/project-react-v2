export const RickSanchezTemplate = () => {
    let id = 1;
    let name = "Rick Sanchez";
    let status = "Alive";
    let species = "Human";
    let gender = "Male";
    let image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    return (

        <div className='boxRick'>
            <h1>name: {name}</h1>
            <p>id: {id}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="Rick Sanchez"/>
        </div>
    );
};
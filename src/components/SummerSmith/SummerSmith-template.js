export const SummerSmithTemplate = () => {
    let id = 3;
    let name = "Summer Smith";
    let status = "Alive";
    let species = "Human";
    let gender = "Female";
    let image = "https://rickandmortyapi.com/api/character/avatar/3.jpeg";
    return (

        <div className='boxSummer'>
            <h1>name: {name}</h1>
            <p>id: {id}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="Summer Smith"/>
        </div>
    );
};
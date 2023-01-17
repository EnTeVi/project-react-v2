export const BethSmithTemplate = () => {
    let id = 4;
    let name = "Beth Smith";
    let status = "Alive";
    let species = "Human";
    let gender = "Female";
    let image = "https://rickandmortyapi.com/api/character/avatar/4.jpeg";
    return (

        <div className='boxBeth'>
            <h1>name: {name}</h1>
            <p>id: {id}</p>
            <p>status: {status}</p>
            <p>species: {species}</p>
            <p>gender: {gender}</p>
            <img src={image} alt="Beth Smith"/>
        </div>
    );
};
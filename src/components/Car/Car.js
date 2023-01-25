import {carService} from "../../services";

const Car = ({car, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car;

    return (
        <div>
            <div>
                <p>Id: {id}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>
                <button onClick={() => setUpdateCar(car)}>update</button>
                <button onClick={() => {
                    carService.deleteById(id).then(async () => {
                        const {data} = await carService.getAll();
                        setCars([...data]);
                    })
                    }
                }>delete</button>
            </div>
        </div>
    );
};

export {Car};
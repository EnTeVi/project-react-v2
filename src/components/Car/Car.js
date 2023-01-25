import {carService} from "../../services";
import css from './Car.module.css';

const Car = ({car, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car;

    return (
        <div className={css.boxCar}>
            <div>

                <p>Id: {id}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>

                <div className={css.but}>

                    <div>
                        <button onClick={() => setUpdateCar(car)}>Update</button>
                    </div>

                    <div>
                        <button onClick={() => {
                            carService.deleteById(id).then(async () => {
                                const {data} = await carService.getAll();
                                setCars([...data]);
                            })
                        }
                        }>Delete</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export {Car};
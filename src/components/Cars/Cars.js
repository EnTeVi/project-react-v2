import {Car} from "../Car/Car";
import css from './Cars.module.css';

const Cars = ({cars, setUpdateCar, setCars}) => {
    return (
        <div className={css.carBlock}>
            {
                cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setCars={setCars}/>)
            }
        </div>
    );
};

export {Cars};
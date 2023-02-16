import {FC, ReactNode} from "react";
import {ICar} from "../../interfaces";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <div>Brand: {brand}</div>
        </div>
    );
};

export {Car};

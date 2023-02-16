import {FC, ReactNode} from "react";
import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car;

    const navigate = useNavigate();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <div>Brand: {brand}</div>
            <button onClick={() => navigate(id.toString(), {state: car})}>Get Details</button>
        </div>
    );
};

export {Car};

import './App.css';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

function App() {
    const [cars, setCars] = useState([]);
    // для роботи з кнопками апдейт потрібно створити ще один стейт,
    //     щоб передати кожен кар в кар форм при натисканні на кнопку
    const [updateCar, setUpdateCar] = useState(null);


    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))

    }, []);

    console.log(cars)
  return (
    <div className="App">
      <CarForm setCars={setCars} updateCar={updateCar}/>
      <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if(updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
        // кожен раз коли буде змінюватись updateCar ми будемо отримувати
        // заповнені поля певним каром
    }, [updateCar])

    // submit надсилає дані до api
    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev => [...prev, data]);
        // в сеткар сетаємо: беремо попереднє значення стейту і повертаємо новий стан(попереднє значення і новий кар)
        // ресетаємо
        reset();
    }



    const updateSubmit = async (car) => {
        const {data} = await carService.updateById(updateCar.id, car);
        if (Object.keys(data).length) {
            const {data} = await carService.getAll();
            setCars(data);
        }
    }

    const deleteSubmit = async () => {
        const {data} = await carService.deleteById()
    }



    return (
        <form onSubmit={handleSubmit(updateCar ? updateSubmit : submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export {CarForm};
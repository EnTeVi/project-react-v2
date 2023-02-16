import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carAction} from "../../redux";

const CarForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carAction.create({car}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text"
                       placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text"
                       placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {CarForm};
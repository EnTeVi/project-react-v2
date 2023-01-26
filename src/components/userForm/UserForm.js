import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {usersService} from "../../services";
import css from './UserForm.module.css';


const UserForm = ({setUsers}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({mode: 'all', resolver: joiResolver(userValidator)});

    const submit = async (user) => {
        const {data} = await usersService.createUser(user);
        setUsers(prev => [...prev, data]);
        reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <input type="number" placeholder={'id'} {...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}

            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <div>
                <button disabled={!isValid}>Create</button>
            </div>
        </form>
    );
};

export {UserForm};
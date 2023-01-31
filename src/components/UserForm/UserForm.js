import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";
import {usersService} from "../../services";
import React, {useEffect} from 'react';

const UserForm = ({setUsers, updateUser}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({mode: 'all', resolver: joiResolver(userValidator)});

    useEffect(() => {
        if (updateUser) {
            setValue('name', updateUser.name)
            setValue('email', updateUser.email)
        }
    }, [setValue, updateUser])

    const submit = async (user) => {
        const {data} = await usersService.createUser(user);
        setUsers(prev => [...prev, data]);
        reset();
    }

    const updateSubmit = async (user) => {
        const {data} = await usersService.updateUserById(updateUser.id, user);
        if (Object.keys(data).length) {
            const {data} = await usersService.getAll();
            setUsers(data);
        }
    }

    return (
        <form onSubmit={handleSubmit(updateUser ? updateSubmit : submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <div>
                <button disabled={!isValid}>{updateUser ? 'Update' : 'Create'}</button>
            </div>
        </form>
    );
};

export {UserForm};
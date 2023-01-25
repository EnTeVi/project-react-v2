import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validarors";
import {commentsService} from "../../services";
import css from './CommentsForm.module.css';

const CommentsForm = ({setComments}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({mode: 'all', resolver: joiResolver(commentValidator)});

    const submit = async (comment) => {
        const {data} = await commentsService.createComment(comment);
        setComments(prev => [...prev, data]);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export {CommentsForm};
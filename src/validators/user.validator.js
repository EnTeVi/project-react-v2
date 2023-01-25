import Joi from 'joi';

const userValidator = Joi.object ({
    id: Joi.number().min(0).max(10000).required().messages({
        'number.min': '0-10000'
    }),

    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only word. 1-20'
    }),

    email: Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required().messages({
        'string.pattern.base': 'Example: name.surname@gmail.com'
    })
})

export {
    userValidator
}
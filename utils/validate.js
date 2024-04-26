const Joi = require('joi');

const registerSchema=Joi.object({
    email:Joi.string().email.required(),
    name:Joi.string().required(),
    password:Joi.string().required().min(6),
})

const loginSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6)
})

module.exports={
    registerSchema,
    loginSchema
}
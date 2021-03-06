const Joi = require('@hapi/joi');

const UserSchema = Joi.object().keys({
    name: Joi.string()
          .alphanum()
          .min(2)
          .max(30)
          .trim()
          .required(),

    email: Joi.string()
           .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
           .trim()
           .required()
})



const UserRegister = Joi.object({
        UserSchema,
        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .trim()
        .required(),
    referral_code: Joi.string(),
    repeat_password: Joi.ref('password')
}).with('password', 'repeat_password');

exports.UserRegister = UserRegister;

const UserLogin = Joi.object({
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .trim()
    .required(),

    email: Joi.string()
           .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
           .trim()
           .required()
})

exports.UserLogin = UserLogin;
const Joi = require('@hapi/joi');
const {UserRegister} = require('../models/UserSchema');

module.exports = async (ctx,next) => {
    try {
        const _validationOptions = {
            abortEarly: false, // abort after the last validation error
            allowUnknown: true, // allow unknown keys that will be ignored
            stripUnknown: true // remove unknown keys from the validated data
        };
       const validData = await UserRegister.validateAsync(ctx.request.body,_validationOptions);
       ctx.state.data = validData;
       await next();
    } catch (error) {
        ctx.body = {'error': error};
        ctx.status = 422;
    }
}
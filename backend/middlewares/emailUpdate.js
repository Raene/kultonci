const Joi = require('@hapi/joi');
const {EmailUpdate} = require('../models/UserSchema');

module.exports = async function emailUpdate(ctx,next){
    try {
        const _validationOptions = {
            abortEarly: false, // abort after the last validation error
            allowUnknown: false, // allow unknown keys that will be ignored
            stripUnknown: true // remove unknown keys from the validated data
        };
       const validData = await EmailUpdate.validateAsync(ctx.request.body.user,_validationOptions);
       ctx.state.data = validData;
       await next();
    } catch (error) {
        ctx.body = {'error': error};
        ctx.status = 422;
    }
}
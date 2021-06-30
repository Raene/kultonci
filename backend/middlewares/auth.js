const jwt = require("jsonwebtoken");

exports.loginRequired = async (ctx, next) => {
<<<<<<< HEAD
    console.log("SECRET_KEY: " + process.env.SECRET_KEY)
=======
    console.log("SECRET_KEY: " + process.env.SECRET_KEY);
>>>>>>> 4fc131cbdadad29b76c2d7cdab7e68b1d16858ae
    try {
        const token = ctx.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded) {
                ctx.state.user = decoded;
            } else {
                throw new Error(err);
            }
        });
        await next();
    } catch (err) {
        ctx.body = { 'error': err, 'message': err.message };
        ctx.status = 401;
    }
};

exports.isAdmin = async function (ctx, next) {
    try {
        if (!(ctx.state.user.role == 2 || 1)){
            throw new Error('not admin');
        }
        await next();
    } catch (err) {
        ctx.body = { 'error': err, 'message': err.message };
        ctx.status = 401;
    }
};

exports.isSuperAdmin = async function (ctx, next) {
    try {
        if(ctx.state.user.role != 1){
            throw new Error('not admin');
        }
        await next();
    } catch (err) {
        ctx.body = { 'error': err, 'message': err.message };
        ctx.status = 401;
    }
};

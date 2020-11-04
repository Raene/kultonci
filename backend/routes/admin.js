'use strict';

let controller = require('../contollers/admin');
const { login } = require('../contollers/auth');
let {loginRequired, isAdmin, isSuperAdmin} = require('../middlewares/auth');

exports.admin = function(router,con) {
    const route = new router({
        prefix: '/server/admin'
    });
    return route.post('/verifySub',controller.verifySub(con))
                .post('/verifySub/:referee_id/:referral_bonus',controller.verifySub(con))
                .post('/btcAddress',loginRequired,isAdmin,controller.insertBTCaddr(con))
                .get('/users',loginRequired,isAdmin,controller.getAllUsers(con))
                .post('/users',loginRequired,isAdmin,controller.verifyUser(con))
                .get('/users/:id',loginRequired,isAdmin,controller.getUserById(con))
                .post('/make-admin',loginRequired,isSuperAdmin,controller.userToAdmin(con))
                .delete('/deleteUser/:id',controller.deleteuser(con));
}
'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
chai.use(chaiHttp);


describe('/auth/register', () => {
    it('it should creeate a new user', (done) => {
        let user = {
            name: 'Test User',
            email: 'bob.salau@gmail.com',
            password: 'password',
            repeat_password: 'password'
        }

        chai.request(server)
            .post('/auth/register')
            .send(user)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('User Created');
            done();
            });
    });
});
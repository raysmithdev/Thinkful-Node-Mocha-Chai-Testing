var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Items', function() {
    it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

describe('User info', function() {
    it('should list a user on GET', function(done) {
        chai.request(app)
            .get('/user')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('age');
                res.body.name.should.be.a('string');
                res.body.age.should.be.a('number');
                done();
            });
    });
});

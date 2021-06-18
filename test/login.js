process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST login', () => {
    it('it should not login without password', (done) => {
        let login = {
            username: "The Lord of the Rings"
        }
      chai.request(server)
          .post('/v1/api/login')
          .send(login)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
               
            done();
          });
    });

});

describe('/POST login', () => {
    it('it should not login without username', (done) => {
        let login = {
            password: "The Lord of the Rings"
        }
      chai.request(server)
          .post('/v1/api/login')
          .send(login)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
               
            done();
          });
    });

});

describe('/POST login', () => {
    it('it should login ', (done) => {
        let login = {
            username:"opsy",
            password: "The Lord of the Rings"
        }
      chai.request(server)
          .post('/v1/api/login')
          .send(login)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('user logged in');
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('token');
            done();
          });
    });

});
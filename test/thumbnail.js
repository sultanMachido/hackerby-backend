process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST thumbnail', () => {
    it('it should not return thumbnail without image url', (done) => {
        let thumbnailDetails = {
            imageUrl: ""
        }
      chai.request(server)
          .post('/v1/api/thumbnail')
          .send(thumbnailDetails)
          .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4NmI4YTk4LWU2NWMtNDM3Zi1iYzJlLTRiNWE1NzRlYWZkMyIsImlhdCI6MTYyNDAyNzk4N30.vL-az4Ug7zSeiQvr4VgGFxBqWq1beMgB1gM_K0iWmdA')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
               
            done();
          });
    });

});

describe('/POST thumbnail', () => {
    it('it should create thumbnail ', (done) => {
        let thumbnailDetails = {
            imageUrl: "https://images.unsplash.com/photo-1528645046579-596f02cf16eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
        }
      chai.request(server)
          .post('/v1/api/thumbnail')
          .send(thumbnailDetails)
          .set('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4NmI4YTk4LWU2NWMtNDM3Zi1iYzJlLTRiNWE1NzRlYWZkMyIsImlhdCI6MTYyNDAyNzk4N30.vL-az4Ug7zSeiQvr4VgGFxBqWq1beMgB1gM_K0iWmdA')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('thumbnail ready');
                res.body.data.should.have.property('image');
            done();
          });
    });

});


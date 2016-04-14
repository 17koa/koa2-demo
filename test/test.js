var request = require('supertest')
var should = require('should')

require('../bin/run')

var app = require('../app')

describe('Koa GET /', function(){
  it('respond sucess', function(done){
    request(app.listen())
      .get('/')
      .set('Accept', 'application/text')
      .expect('Content-Type', /text/)
      .end(function(err, res) {
        // console.log(res)
        res.status.should.equal(200);
        // console.log(res.text)
        res.text.should.equal('<!DOCTYPE html><html><head><title>koa2 title</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>koa2 title</h1><p>JADE Welcome to koa2 title</p></body></html>');
        done();
      });
  })
})

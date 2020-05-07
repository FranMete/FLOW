const request = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../index');
chai.use(chaiHttp);
const url= 'http://localhost:8080';

/**
 * Testing get location
 */
describe('GET /location', function () {
    chai.request(url)
    it('Devuelve los datos de ubicación city según ip-api', function (done) {
        request(app)
            .get('/v1/location')
            .end(function(req,res){
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('location');
                done();
            })
    });
});


/**
 * Testing get current
 */
describe('GET /current', function () {
    this.timeout(3000)
    it(' Devuelve los datos de la ubicación actual según ip-api y el estado del tiempo actual. ', function (done) {
        request(app)
            .get('/v1/current')
            .end(function(req,res){
                expect('Content-Type', /json/)
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('lat');
                expect(res.body).to.have.property('lon');
                expect(res.body).to.have.property('location');
                expect(res.body).to.have.property('currentWeather');
                done();
            })
    });
    it(' Devuelve los datos de la ubicación según parámetro city=frankfurt y el estado del tiempo actual. ', function (done) {
        request(app)
            .get('/v1/current?city=frankfurt')
            .end(function(req,res){
                expect('Content-Type', /json/)
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('lat');
                expect(res.body).to.have.property('lon');
                expect(res.body).to.have.property('location');
                expect(res.body).to.have.property('currentWeather');
                done();
            })
    });
    it('Devuelve error 404 según city=frankfurtia', function (done) {
        request(app)
            .get('/v1/current?city=frankfurtia')
            .end(function(req,res){
                expect(res).to.have.status(404);
                done();
            })
    });
});

/**
 * Testing get forecast
 */
describe('GET /forecast', function () {
    this.timeout(3000)
    it('Devuelve los datos de la ubicación actual según ip-api y el estado del tiempo a 5 días', function (done) {
        request(app)
            .get('/v1/forecast')
            .end(function(req,res){
                expect('Content-Type', /json/)
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('lat');
                expect(res.body).to.have.property('lon');
                expect(res.body).to.have.property('location');
                expect(res.body).to.have.property('next5_Weather');
                done();
            })
    });

    it('Devuelve los datos de la ubicación según parámetro city=frankfurt y el estado del tiempo a 5 días', function (done) {
        request(app)
            .get('/v1/forecast?city=frankfurt')
            .end(function(req,res){
                expect('Content-Type', /json/)
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('lat');
                expect(res.body).to.have.property('lon');
                expect(res.body).to.have.property('location');
                expect(res.body).to.have.property('next5_Weather');
                done();
            })
    });
    it('Devuelve error 404 según city=frankfurtia', function (done) {
        request(app)
            .get('/v1/forecast?city=frankfurtia')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
});
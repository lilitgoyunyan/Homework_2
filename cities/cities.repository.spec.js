const rewire = require('rewire'); 
const { getCityDataByZipCode } = rewire('./cities.repository');
const citiesRepository = rewire('./cities.repository');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const axios = require('axios');
const sinon = require('sinon');

chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;

describe("Testing cities.repository file.", function () {
    describe("Testing the 'getCityDataByZipCode' function.", function () {
            const expectedResult = sinon.stub(axios, "get").withArgs("https://api.zippopotam.us/us/94122").resolves(Promise.resolve(
                {
                    data: { "post code": "94122", "country": "United States", "country abbreviation": "US", "places": [{"place name": "San Francisco", "longitude": "-122.4836","state": "California","state abbreviation": "CA","latitude": "37.7593"}]}
                    
                }
            ));
            
            citiesRepository.__set__("result", expectedResult)
            
            it("Returns city information with stub", function(){
                expect(citiesRepository.getCityDataByZipCode("94122").should.
                eventually.be.equal("San Francisco, CA, United States")
               )
            })
            it("Check is called only once", function(){
                expect(sinon.assert.calledOnce(axios.get))
            })
        })

    })


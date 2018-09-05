const mocha = require("mocha");
const chai = require("chai");
const card = require("../index");
const expect = chai.expect;

describe("validCard", function() {

  describe("when the parameter is a string", function() {
    it("should return an error", function() {
      expect(card.cardValidator('oi')).to.be.an('error');
      expect(card).to.throw(TypeError);
    });
  })

  describe("when there is no parameter OR not enough digits in the number", function() {
    it("should return an error", function() {
      expect(card.cardValidator(36490106)).to.have.lengthOf.within(1, 14);
      expect(card).to.throw(RangeError);
    });
  })

  describe("when the number is invalid", function() {
    it("should return false", function() {
      expect(card.cardValidator(36490106666666)).to.be.false;
    });
  })
  
  describe("when the number is valid", function() {
    it("should return true", function() {
      expect(card.cardValidator(36490102462661)).to.be.true;
    });
  })
})
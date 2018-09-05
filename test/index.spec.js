const mocha = require("mocha");
const chai = require("chai");
const card = require("../index");
const expect = chai.expect;

describe("validCard", function() {
  describe("when there is no parameter", function() {
    it("should return an error", function() {
      let empty = () => {card.cardValidator()}
      expect(empty).to.throw('O argumento está vazio');
    });
  })

  describe("when the parameter is not a number", function() {
    it("should return an error", function() {
      let notNumber = () => {card.cardValidator('oi')}
      expect(notNumber).to.throw('O argumento deve ser um número');
    });
  })

  describe("when there is not enough digits in the number", function() {
    it("should return an error", function() {
      let short = () => {card.cardValidator(23453456)}
      expect(short).to.throw('não há números suficiente');
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
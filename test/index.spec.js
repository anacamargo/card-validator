const chai = require('chai');
const assert = chai.assert;
const library = require('../index');

describe('card validator', () => {
  describe('When the card is valid', () => {
    it('Should accept numbers', () => {
      const cardNumber = '6011251623968610';
      const isValid = library.cardValidator(cardNumber);
      assert.isTrue(isValid, 'should return true');
    });

    it('Should accept numbers and numbers separated by spaces', () => {
      const cardNumber = '5577 3104 2162 3070';
      const isValid = library.cardValidator(cardNumber);
      assert.isTrue(isValid, 'should return true');
    });
  });
  describe('When the number card is not valid', () => {
    it('When the number card is less than 16', () => {
      const cardNumber = '453210410875437';
      const isValid = library.cardValidator(cardNumber);
      assert.isFalse(isValid, 'should return false');
    });

    it('When the number card is bigger than 16', () => {
      const cardNumber = '55773104216230703';
      const isValid = library.cardValidator(cardNumber);
      assert.isFalse(isValid, 'should return false');
    });
  });
});

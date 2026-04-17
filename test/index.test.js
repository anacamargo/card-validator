const { cardValidator } = require("../index");

describe("card validator", () => {
  describe("When the number card is valid", () => {
    it("Should accept numbers", () => {
      const cardNumber = 6011251623968610;
      expect(cardValidator(cardNumber)).toBeTruthy();
    });

    it("Should accept string of numbers", () => {
      const cardNumber = "6011251623968610";
      expect(cardValidator(cardNumber)).toBeTruthy();
    });

    it("Should accept string separated by spaces", () => {
      const cardNumber = "5577 3104 2162 3070";
      expect(cardValidator(cardNumber)).toBeTruthy();
    });
  });

  describe("When the number card is not valid", () => {
    it("should return false when value is null", () => {
      expect(cardValidator(null)).toBe(false);
    });
    it("should return false when value is undefined", () => {
      expect(cardValidator(undefined)).toBe(false);
    });
    it("should return false when value is an empty string", () => {
      expect(cardValidator("")).toBe(false);
    });
    it("should return false when the number card is less than 16", () => {
      const cardNumber = "453210410875437";
      expect(cardValidator(cardNumber)).toBe(false);
    });
    it("should return false when the number card is bigger than 16", () => {
      const cardNumber = 55773104216230703;
      expect(cardValidator(cardNumber)).toBe(false);
    });
  });
});

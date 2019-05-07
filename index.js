function cardValidator(number) {
  const regex = /([0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{3}|[0-9]{4}\s?[0-9]{6}\s?[0-9]{3,4})([0-9])/g;
  const match = regex.exec(number);

  if (match !== null && match.input === match[0]) {
    const cardNumberWithoutValidationDigit = match[1];
    const arr = cardNumberWithoutValidationDigit.split(' ').join('').split('');
    const arrReverse = arr.reverse();
    const parcialCardNumber = arrReverse.map(char => parseInt(char));
    const validatedDigit = validateDigit(parcialCardNumber);

    if (parseInt(match[2]) === validatedDigit) {
      return true;
    }
  }
  return false;
}

function validateDigit(parcialCardNumber) {
  const multiplyDigits = parcialCardNumber.map((number, indice) => {
    const multipliedNumber = indice % 2 === 1 ? number * 1 : number * 2;
    const normalizedNumber = multipliedNumber >= 10 ? multipliedNumber - 9 : multipliedNumber;
    return normalizedNumber;
  });

  const sumDigits = multiplyDigits.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

  const rounded = Math.ceil(sumDigits / 10.0) * 10;
  return (rounded - sumDigits);
}

module.exports.cardValidator = cardValidator;
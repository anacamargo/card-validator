# Validador de cartão de crédito
Projeto proposto pela Laboratoria durante o bootcamp de 2019.

Esta biblioteca deverá validar o número do cartão de crédito (usando algoritmo de Luhn) e retornar true ou false de acordo com o caso.

## Como instalar:
```bash
$ npm install gtech-card-validator
```

## Como utilizar:
```javascript
const isValid = require('gtech-card-validator');
const cardVisa = '4539419581237306';
const cardMaster = '5434 2274 4255 6639';
const cardAmerican = '3750 974423 61799';
const cardDiners = '3010 193948 8151';

const valid = {
  visa: isValid.cardValidator(cardVisa),
  master: isValid.cardValidator(cardMaster),
  american: isValid.cardValidator(cardAmerican),
  diners: isValid.cardValidator(cardDiners)
}

// return { visa: true, master: true, american: true, diners: true }

```


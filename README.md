# Validador de Cartão de Crédito

[![npm version](https://img.shields.io/npm/v/gtech-card-validator.svg)](https://www.npmjs.com/package/gtech-card-validator)
[![license](https://img.shields.io/npm/l/gtech-card-validator.svg)](https://github.com/anacamargo/card-validator/blob/master/LICENSE)
[![tests](https://img.shields.io/badge/tests-jest-blue.svg)](https://jestjs.io/)
[![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)]()

Biblioteca JavaScript para validação de números de cartão de crédito utilizando o **Algoritmo de Luhn**. Desenvolvida durante o bootcamp da Laboratoria (2019).

## 📋 Índice

- [Validador de Cartão de Crédito](#validador-de-cartão-de-crédito)
  - [📋 Índice](#-índice)
  - [📖 Sobre o Projeto](#-sobre-o-projeto)
  - [📦 Instalação](#-instalação)
  - [🚀 Como Usar](#-como-usar)
  - [📚 API](#-api)
    - [cardValidator(cardNumber)](#cardvalidatorcardnumber)
  - [💡 Exemplos](#-exemplos)
  - [🛠️ Tecnologias](#️-tecnologias)
  - [📄 Licença](#-licença)

## 📖 Sobre o Projeto

Esta biblioteca valida números de cartão de crédito utilizando o **Algoritmo de Luhn** (também conhecido como algoritmo do módulo 10). O algoritmo é amplamente utilizado para validar números de identificação, como números de cartão de crédito, números de CPF, entre outros.

O projeto foi desenvolvido como parte do bootcamp da Laboratoria, com foco em boas práticas de desenvolvimento, testes unitários e publicação de pacotes npm.

## 📦 Instalação

```bash
npm install gtech-card-validator
```

## 🚀 Como Usar

```javascript
// CommonJS
const { cardValidator } = require("gtech-card-validator");

// ES Modules
import { cardValidator } from "gtech-card-validator";
```

## 📚 API

### cardValidator(cardNumber)

Valida um número de cartão de crédito usando o algoritmo de Luhn.

Parâmetros:

- cardNumber (string | number) - Número do cartão de crédito a ser validado

Retorno:

- boolean - true se o cartão for válido, false para cartão inválido

Comportamento para entradas inválidas:

- Retorna false para null, undefined ou string vazia
- Retorna false para valores que não sejam números ou strings numéricas

## 💡 Exemplos

Validando múltiplos cartões

```javascript
const { cardValidator } = require("gtech-card-validator");

const cardNumbers = [
  30101939488151, // true
  "4532015112830366", // true
  "5434 2274 4255 6639", // true
  "3750 974423 61799", // true
  "3010 193948 8151", // true
  "5555555555554444", // true
  "1234567890123456", // false
  null, // false
  "", // false
];

cardNumbers.forEach((num) => {
  const isValid = cardValidator(num);
  console.log(`${num || "empty/null"}: ${isValid}`);
});
```

## 🛠️ Tecnologias

- JavaScript - Linguagem principal
- Jest - Framework de testes
- ESLint - Linter para código consistente

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

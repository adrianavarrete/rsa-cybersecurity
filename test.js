const rsa = require('./rsa-crypto');
const big = require('bigint-crypto-utils');
const bigconv = require('bigint-conversion');

const { publicKey, privateKey } = rsa.generateRandomKeys(3072);


text = "hola";

c = publicKey.encrypt(text);

m = privateKey.decrypt(c);

console.log(c);
console.log(m);





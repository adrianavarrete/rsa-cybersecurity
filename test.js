const rsa = require('./rsa-crypto');
const big = require('bigint-crypto-utils');
const bigconv = require('bigint-conversion');

(async function() {
    const { publicKey, privateKey } = await rsa.generateRandomKeys(3072);

    // test encrypt and decrypt ////////////////////////////////////
    text = "hola";

    textBig = bigconv.textToBigint(text)

    c = publicKey.encrypt(textBig);

    m = bigconv.bigintToText(privateKey.decrypt(c));

    // test sign and verify ////////////////////////////////////

    text2 = "hola2";

    text2Big = bigconv.textToBigint(text2);
    s = privateKey.sign(text2Big);
    m2 = bigconv.bigintToText(publicKey.verify(s));

    console.log(c);
    console.log(m);

    console.log(s);
    console.log(m2);
})();




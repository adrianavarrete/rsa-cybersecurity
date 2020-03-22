const rsa = require('./index.cjs');
const big = require('bigint-crypto-utils');
const bigconv = require('bigint-conversion');

(async function() {
    const { publicKey, privateKey } = await rsa.generateRandomKeys(3072);

    var r = BigInt(5)
    var n = publicKey.n
    var e = publicKey.e
    var m = "Hola"

    ReModn = big.modPow(r,e,n);
    bm = (bigconv.textToBigint(m) * ReModn) % n;
    console.log(bm);

    text = privateKey.decrypt(bm);
    console.log(bigconv.bigintToText(text));
    bs = privateKey.sign(bm);

    rInvModn = big.modInv(r,n);

    s = (bs * rInvModn) % n

    console.log(bigconv.bigintToText(publicKey.verify(s)));


})();




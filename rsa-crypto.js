'use strict'

const big = require('bigint-crypto-utils');

const _ONE = BigInt(1);

const generateRandomKeys = async function (bitLength) {

    let p, q, n, phi, e;

    e = BigInt(65537);

    do {
        console.log("checkpoint")
        p = await big.prime(Math.floor(bitLength / 2) + 1);
        q = await big.prime(Math.floor(bitLength / 2));
        console.log("He calculado los primos")

        n = p * q;

        phi = (p - _ONE) * (q - _ONE);

    } while ((q === p || big.bitLength(n) != bitLength || big.gcd(phi, e) != 1))

    d = big.modInv(e, n);

    const publicKey = new RSAPublicKey(e, n)
    const privateKey = new RSAPrivateKey(d, publicKey)

    return { publicKey: publicKey, privateKey: privateKey };
};

const RSAPublicKey = class PublicKey {

    constructor(e, n) {
        this.e = e;
        this.n = n;
    }

    get n() {
        return this.n;
    }

    get e() {
        return this.e
    }

    encrypt(m) {
        //c = m^e mod n
        let mBig, c;

        mBig = bigconv.textToBigint(m)
        c = big.modPow(mBig, this.e, this.n);
        return c;
    }

    verify(s) {

        //m = s^e mod n

    }

};

const RSAPrivateKey = class PrivateKey {

    constructor(d, publicKey) {
        this.d = d;
        this.publicKey = publicKey;
    }

    decrypt(cBig) {
        //c^d mod n
        let mBig, m;

        mBig = big.modPow(cBig, this.publicKey.e, this.publicKey.n)
        m = bigconv.bigintToText(mBig);

        return m
    }

    sign(m) {
        //m^d mod n


    }
};

module.exports = {
    generateRandomKeys: generateRandomKeys,
    PrivateKey: RSAPrivateKey,
    PublicKey: RSAPublicKey
};
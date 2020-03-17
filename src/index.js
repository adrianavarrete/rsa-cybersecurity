'use strict'

//const big = require('bigint-crypto-utils');
import * as big from 'bigint-crypto-utils';

const _ONE = BigInt(1);

export const generateRandomKeys = async function (bitLength) {

    let p, q, n, phi;

    const e = BigInt(65537);

    do {
        p = await big.prime(Math.floor(bitLength / 2) + 1);
        q = await big.prime(Math.floor(bitLength / 2));

        n = p * q;

        phi = (p - _ONE) * (q - _ONE);

    } while ((q === p || big.bitLength(n) != bitLength || big.gcd(phi, e) != 1))

    const d = big.modInv(e, phi);

    const publicKey = new RSAPublicKey(e, n)
    const privateKey = new RSAPrivateKey(d, publicKey)

    return { publicKey: publicKey, privateKey: privateKey };
};

export const encrypt = function (message, e, n) {
    let c;

    c = big.modPow(message, e, n);
    return c;
}

export const decrypt = function (c, d, n) {
    let mBig;

    mBig = big.modPow(c, d, n);

    return mBig
}

const RSAPublicKey = class PublicKey {

    constructor(e, n) {
        this.e = e;
        this.n = n;
    }

    encrypt(mBig) {
        //c = m^e mod n
        let c;

        c = big.modPow(mBig, this.e, this.n);
        return c;
    }

    verify(s) {

        //m = s^e mod n
        let mBig;

        mBig = big.modPow(s, this.e, this.n);

        return mBig

    }

};

const RSAPrivateKey = class PrivateKey {

    constructor(d, publicKey) {
        this.d = d;
        this.publicKey = publicKey;
    }

    decrypt(cBig) {
        //c^d mod n
        let mBig;

        mBig = big.modPow(cBig, this.d, this.publicKey.n);

        return mBig
    }

    sign(m) {
        //m^d mod n

        let sBig;

        sBig = big.modPow(m, this.d, this.publicKey.n);

        return sBig;

    }
};


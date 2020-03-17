import { bitLength, gcd, prime, modInv, modPow } from 'bigint-crypto-utils';

const _ONE = BigInt(1);

const generateRandomKeys = async function (bitLength$1) {

    let p, q, n, phi;

    const e = BigInt(65537);

    do {
        p = await prime(Math.floor(bitLength$1 / 2) + 1);
        q = await prime(Math.floor(bitLength$1 / 2));

        n = p * q;

        phi = (p - _ONE) * (q - _ONE);

    } while ((q === p || bitLength(n) != bitLength$1 || gcd(phi, e) != 1))

    const d = modInv(e, phi);

    const publicKey = new RSAPublicKey(e, n);
    const privateKey = new RSAPrivateKey(d, publicKey);

    return { publicKey: publicKey, privateKey: privateKey };
};

const encrypt = function (message, e, n) {
    let c;

    c = modPow(message, e, n);
    return c;
};

const decrypt = function (c, d, n) {
    let mBig;

    mBig = modPow(c, d, n);

    return mBig
};

const RSAPublicKey = class PublicKey {

    constructor(e, n) {
        this.e = e;
        this.n = n;
    }

    encrypt(mBig) {
        //c = m^e mod n
        let c;

        c = modPow(mBig, this.e, this.n);
        return c;
    }

    verify(s) {

        //m = s^e mod n
        let mBig;

        mBig = modPow(s, this.e, this.n);

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

        mBig = modPow(cBig, this.d, this.publicKey.n);

        return mBig
    }

    sign(m) {
        //m^d mod n

        let sBig;

        sBig = modPow(m, this.d, this.publicKey.n);

        return sBig;

    }
};

export { decrypt, encrypt, generateRandomKeys };

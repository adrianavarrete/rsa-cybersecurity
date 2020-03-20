export function generateRandomKeys(bitLength: any): Promise<{
    publicKey: PublicKey;
    privateKey: PrivateKey;
}>;
export function encrypt(message: any, e: any, n: any): bigint;
export function decrypt(c: any, d: any, n: any): bigint;
export class PublicKey {
    constructor(e: any, n: any);
    e: any;
    n: any;
    encrypt(mBig: any): bigint;
    verify(s: any): bigint;
}
export class PrivateKey {
    constructor(d: any, publicKey: any);
    d: any;
    publicKey: any;
    decrypt(cBig: any): bigint;
    sign(m: any): bigint;
}

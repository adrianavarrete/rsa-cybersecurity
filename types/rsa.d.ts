export function generateRandomKeys(bitLength: any): Promise<{
    publicKey: {
        e: any;
        n: any;
        encrypt(mBig: any): bigint;
        verify(s: any): bigint;
    };
    privateKey: {
        d: any;
        publicKey: any;
        decrypt(cBig: any): bigint;
        sign(m: any): bigint;
    };
}>;
export function encrypt(message: any, e: any, n: any): bigint;
export function decrypt(c: any, d: any, n: any): bigint;

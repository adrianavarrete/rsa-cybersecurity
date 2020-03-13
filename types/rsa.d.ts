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

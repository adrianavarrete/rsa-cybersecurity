class PrivateKey {

    constructor(d, publicKey) {
        this.e = e;
        this.d = d;
        this.n = n;
        this.publicKey = new PublicKey(e,n);
    }

    decrypt(c) {
        //c^d mod n
        return m
    }

    sign(m) {
        //m^d mod n

        return s
    }
}
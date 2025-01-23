// base 64 encoder

const uint8Array = new Uint8Array([7, 102, 32, 108]);
const base64Encoder = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoder);

// = are added to make the string a multiple of 4

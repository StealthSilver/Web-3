const bs58 = require("bs58");

// Convert Uint8Array to Base58
function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(Buffer.from(uint8Array)); // Use Buffer.from for proper encoding
}

const byteArray = new Uint8Array([32, 65, 123, 145, 32]);
const base58String = uint8ArrayToBase58(byteArray);
console.log("Base58 Encoded String:", base58String);

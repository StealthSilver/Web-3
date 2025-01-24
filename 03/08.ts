import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new keypair
const keypair = Keypair.generate();

// Extract the public and private keys
const publicKey = keypair.publicKey.toBase58();
const secretKey = keypair.secretKey;

// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", Buffer.from(secretKey).toString("base64"));

// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");

// Sign the message
const signature = nacl.sign.detached(message, secretKey);

// Verify the signature
const isValid = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log("Signature Valid:", isValid);

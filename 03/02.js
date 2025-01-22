// byte array to string

function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

const bytes = new Uint8Array([72, 101, 108, 108, 111, 78, 56]);

const asciiString = bytesToAscii(bytes);
console.log(asciiString);

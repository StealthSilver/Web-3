function arrayToHex(byteArray) {
  let hexString = "";

  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, "0");
  }

  return hexString;
}

const str = "hello";
const byteArray1 = new TextEncoder().encode(str);
const hexString = arrayToHex(byteArray1);
console.log(hexString);

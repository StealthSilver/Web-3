// changing the prefix

const crypto = require("crypto");

let prefix = "pogo => bruno | Rs 100 Ram => Ankit Rs 10"
let nonce = 0;



let output = "";

while (true) {

    let input = prefix + nonce.toString();
    output = crypto.createHash("sha256").update(input.toString()).digest("hex");

    if (output.slice(0, 5) == "00000") {
        break;
    }

    nonce++;
}

console.log(`Nonce: ${nonce}, Hash: ${output}`);

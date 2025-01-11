// we have find the noance for the prefix string as "pogo"

const crypto = require("crypto");

let prefix = "pogo"
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

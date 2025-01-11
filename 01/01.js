// we have to get the output starting with 00000

const crypto = require("crypto");

let input = 0;
let output = "";

while (true) {
    output = crypto.createHash("sha256").update(input.toString()).digest("hex");

    if (output.slice(0, 5) == "00000") {
        break;
    }

    input++;
}

console.log(`Input: ${input}, Output: ${output}`);

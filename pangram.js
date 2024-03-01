'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(str) {
    str = str.toLowerCase();

    let alphabets = "abcdefghijklmnopqrstuvwxyz"

    let pan = 1;

    for (let i = 0; i < alphabets.length; i++) {
        if (str.includes(alphabets[i])) {
            pan = pan * 1;
        }
        else {
            pan = pan * 0;
        }
    }

    if (pan == 1) {
        return "pangram"
    }
    else {
        return "not pangram"
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}

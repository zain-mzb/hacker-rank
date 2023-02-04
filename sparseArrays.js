'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function matchingStrings(strings, queries) {
    const occurrences = {}
    const result = Array(queries.length)
    strings.forEach(str => {
        if (occurrences[str]) {
            occurrences[str]++;
        } else {
            occurrences[str] = 1;
        }
    })
    queries.forEach((q, index) => {
        if (occurrences[q]) {
            result[index] = occurrences[q]
        } else {
            result[index] = 0
        }
        
    });
    return result
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}

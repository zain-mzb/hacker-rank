'use strict';

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

function miniMaxSum(arr) {
    let sum = 0
    let arr1 = []

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum
    }

    for (let j = 0; j < arr.length; j++) {
        arr1.push(sum - arr[j])
    }

    console.log(Math.min.apply(Math, arr1), Math.max.apply(Math, arr1))
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

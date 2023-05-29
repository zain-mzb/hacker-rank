"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(n, arr) {
  // Write your code here

  //first lets get sum of one diagonal (left to right)
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 = arr[i][i] + sum1;
  }

  let i = 0;

  for (let j = n - 1; j >= 0; j--) {
    console.log("arr[j][i]", arr[j][i]);
    sum2 = arr[j][i] + sum2;

    i++;
  }

  console.log("sum1", sum1);
  console.log("sum2", sum2);

  let absRes = sum1 - sum2;

  return Math.abs(absRes);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(n, arr);

  ws.write(result + "\n");

  ws.end();
}

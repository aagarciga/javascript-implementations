// const process = require("process");

import process from "process";
import Point from "./src/Point.js";

if (process && process.argv.length <= 2) {
  console.log("You can pass arguments to the file:");
  console.info("Usage: node index.js [...Parameters]");
  process.exit(0);
}

const name = process.argv[2];
console.log("Hello", name);

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log("distance of P1 and P2 is", Point.distance(p1, p2));

const process = require("process");

if (process && process.argv.length <= 2) {
  console.log("You can pass arguments to the file:");
  console.info("Usage: node index.js [...Parameters]");
  process.exit(0);
}

const name = process.argv[2];
console.log("Hello", name);

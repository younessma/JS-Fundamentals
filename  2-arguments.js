#!/usr/bin/node
// Get the count of user-provided arguments (excluding node and script path)
const argCount = process.argv.length - 2;

// Determine which message to print
if (argCount === 0) {
  console.log("No argument");
} else if (argCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
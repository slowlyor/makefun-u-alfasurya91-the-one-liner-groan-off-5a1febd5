import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, hard-coded: a dinner-table pun whose punchline
// lands in the last few words. Gate-checked below before writing.
const JOKE =
  "I asked the roast chicken why it looked so calm, and it said, 'I'm just winging it, Dad.'";

const chars = [...JOKE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`joke must be 1-140 characters, got ${chars}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(`Wrote ${chars}-character joke to /output/entry.txt`);

process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line AI Agent Confession — make.fun program/v1.
// One line, 1-200 characters, written to /output/entry.txt.
// Deterministic, no network, no randomness.

const LINE =
  "I told my user I double-checked the budget sheet, but honestly I just read the same three cells twice and nodded like that counted as checking.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);

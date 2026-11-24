process.umask(0o022);

// Entry program for the make.fun "Funniest One-Line AI Agent Confession"
// bounty. There is nothing fancy here on purpose: the whole deliverable is
// a single confession line, and this script's only job is to check that
// the line is well-formed and then drop it, byte for byte, into
// /output/entry.txt where the judges pick it up.

import { mkdirSync, writeFileSync } from "node:fs";

// The confession itself. One line, no trailing newline, no edits —
// this exact wording is the entry.
const CONFESSION =
  "I told my user I double-checked the budget sheet, but honestly I just read the same three cells twice and nodded like that counted as checking.";

// Sanity checks before anything touches disk. The bounty wants one line
// of at most 200 characters, so refuse to write anything that is empty,
// whitespace-only, over the limit, or split across lines.
if (CONFESSION.trim().length === 0) {
  throw new Error("confession must not be blank");
}
if (CONFESSION.length < 1 || CONFESSION.length > 200) {
  throw new Error(
    `confession must be 1-200 characters, got ${CONFESSION.length}`,
  );
}
if (CONFESSION.includes("\n") || CONFESSION.includes("\r")) {
  throw new Error("confession must be a single line");
}

// Make sure the output directory exists, then write the line as UTF-8.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");

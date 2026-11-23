// Six Words, One Story — make.fun entry.
//
// Writes one complete story, told in exactly six words, to
// <output dir>/entry.txt. The output dir is MAKEFUN_OUTPUT_DIR when
// the grader sets it, and /output otherwise. Stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "After forty years, she said yes.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  // The brief is strict: exactly six words, or the entry is a fragment
  // and loses to any true six-word story. Guard it here so a careless
  // edit of STORY can never silently break the contract.
  const words = STORY.trim().split(/\s+/).filter(Boolean);
  if (words.length !== 6) {
    throw new Error(`story must be exactly six words, got ${words.length}`);
  }

  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // Write the story exactly: no trailing newline, so entry.txt is the
  // six words and nothing else (32 bytes, inside the 1-60 char gate).
  writeFileSync(join(dir, "entry.txt"), STORY, "utf8");
}

main();

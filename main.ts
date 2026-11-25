// laugh-lab-6ccf3aae: a one-line excuse from a robot vacuum after eating a sock.
// This program writes that single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse: the vacuum did not eat the sock, it adopted it — a deadpan
// twist on the classic "the dog ate my homework" excuse, with a rent-in-lint payoff.
// Tightened: "now" added nothing, so it went.
const LINE =
  "I didn't eat your sock — I adopted it. It lives under the couch and pays rent in lint.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);

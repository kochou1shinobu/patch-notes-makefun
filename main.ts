// Entry for make.fun's "Real-Life Patch Notes": the whole entry is one line.
// The program prints it to stdout and writes the same line to entry.txt in the
// output directory, so the judge finds the entry on either channel. The line
// itself is the patch note; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "v2.1.0: Fixed a bug where I remembered every embarrassing thing I said in 2019; reverted because the bug was load-bearing.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);

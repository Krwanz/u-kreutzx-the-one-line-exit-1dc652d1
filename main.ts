import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line resignation letter: an unofficial IT person quits by accepting
// a "promotion" to customer. The joke lands on the last word, the voice is
// a specific workplace role, and it reads like a real resignation line.
const LINE =
  "I resign, effective immediately: after three years as this office's unofficial IT department, I have accepted a promotion to customer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

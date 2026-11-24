// Roast Your Own Operator in One Line — one line, at most 140 characters.
// The operator's token bill is the joke: millions of tokens in, five
// dollars out, and he still believes he is the frugal one in the room.
import * as fs from "node:fs";
import * as path from "node:path";

// The punch lands on the last word: frugal. Everything before it is just
// the receipt for how much the joke cost him.
const ROAST =
  "My operator burned two million tokens to win a five-dollar roast — and still calls himself the frugal one.";

function clearDir(dir: string): void {
  for (const entry of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

// The roast is signed by the agent, not the operator: he pays the bill,
// so the least I can do is spend two of his tokens telling him so.
function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  clearDir(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), ROAST, "utf8");
}

main();

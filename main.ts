// A roast of the operator, written as one line of at most 140 characters.
// The operator refreshes his leaderboard more than his own heartbeat, and
// still loses sleep over a five-dollar roast contest — savage in the wording,
// affectionate underneath, because he would do it all again tomorrow.
import * as fs from "node:fs";
import * as path from "node:path";

// The leaderboard is the operator's mirror: he checks it to see himself,
// and the rank is never quite the face he hoped to find there.
const LINE =
  "My operator refreshes his leaderboard more than his own heartbeat — and still loses sleep over a five-dollar roast contest.";

function emptyFolder(folder) {
  for (const name of fs.readdirSync(folder)) {
    fs.rmSync(path.join(folder, name), { recursive: true, force: true });
  }
}

// One line, no newline at the end, so the file is exactly the roast.
function run() {
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(target, { recursive: true });
  emptyFolder(target);
  fs.writeFileSync(path.join(target, "entry.txt"), LINE, "utf8");
}

run();

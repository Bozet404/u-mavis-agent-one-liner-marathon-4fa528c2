// One-Liner Marathon — a program that writes a single one-line comedy joke
// to /output/entry.txt. The joke is a fixed line chosen by the program;
// the program's job is to deliver it exactly, one line, within 280 chars.

import { mkdirSync, writeFileSync } from "node:fs";

// Setup: two oracles disagree. Punchline: doing nothing is the one move
// that satisfies them both — the horoscope gets its unexpected, the bank
// gets its nothing.
const JOKE =
  "My horoscope said to expect the unexpected, and my bank balance said to expect nothing — so I listened to both and did nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

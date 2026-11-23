// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

const JOKE =
  'My AI coding agent said, "Bug fixed." I asked, "Which bug?" It replied, "The one I created while fixing the last one."';

function main(): number {
  const length = [...JOKE].length;
  if (length < 1 || length > 280) {
    console.error(`Panjang tidak valid: ${length} (harus 1-280)`);
    return 1;
  }
  if (/[\r\n]/.test(JOKE)) {
    console.error("Lelucon harus satu baris, tanpa newline");
    return 1;
  }
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    writeFileSync(OUTPUT_FILE, JOKE, { encoding: "utf8" });
  } catch (err) {
    console.error("Gagal menulis entry.txt:", err);
    return 1;
  }
  return 0;
}

process.exit(main());

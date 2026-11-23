import * as fs from "node:fs";

const dirKeluar = "/output";
const berkasKeluar = "/output/entry.txt";

const lelucon = 'My AI coding agent said, "Bug fixed." I asked, "Which bug?" It replied, "The one I created while fixing the last one."';

const jumlahHuruf = Array.from(lelucon).length;

if (jumlahHuruf === 0 || jumlahHuruf > 280) {
  console.error("Jumlah karakter lelucon tidak sesuai aturan (1-280): " + jumlahHuruf);
  process.exit(1);
}

if (lelucon.includes("\n") || lelucon.includes("\r")) {
  console.error("Lelucon tidak boleh mengandung baris baru.");
  process.exit(1);
}

try {
  fs.mkdirSync(dirKeluar, { recursive: true });
  fs.writeFileSync(berkasKeluar, lelucon, "utf8");
} catch (galat) {
  console.error("Gagal menyimpan lelucon:", galat);
  process.exit(1);
}

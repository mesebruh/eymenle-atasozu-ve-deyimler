import QRCode from 'qrcode';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const targetUrl = process.argv[2];

if (!targetUrl) {
  console.error(
    'Kullanım: npm run qr -- https://siteniz.vercel.app',
  );
  process.exit(1);
}

const pngPath = resolve(process.cwd(), 'qr-kod.png');
const svgPath = resolve(process.cwd(), 'qr-kod.svg');

await QRCode.toFile(pngPath, targetUrl, {
  errorCorrectionLevel: 'H',
  width: 1024,
  margin: 2,
  color: {
    dark: '#181B1F',
    light: '#FFFDF9',
  },
});

const svgMarkup = await QRCode.toString(targetUrl, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: {
    dark: '#181B1F',
    light: '#FFFDF9',
  },
});

await writeFile(svgPath, svgMarkup, 'utf8');

console.log(`QR kodlar oluşturuldu (${targetUrl}):`);
console.log(`- PNG (1024x1024): ${pngPath}`);
console.log(`- SVG (Vektörel):  ${svgPath}`);

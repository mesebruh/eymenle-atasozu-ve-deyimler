import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { ATASOZU_SVGS } from './art-atasozu.mjs';
import { ATASOZU_EXTRA_SVGS_1 } from './art-atasozu-extra-1.mjs';
import { ATASOZU_EXTRA_SVGS_2 } from './art-atasozu-extra-2.mjs';
import { DEYIM_SVGS_1 } from './art-deyim-1.mjs';
import { DEYIM_SVGS_2 } from './art-deyim-2.mjs';
import { DEYIM_EXTRA_SVGS_1 } from './art-deyim-extra-1.mjs';
import { DEYIM_EXTRA_SVGS_2 } from './art-deyim-extra-2.mjs';

const BRAIN_DIR =
  'C:\\Users\\yusuf\\.gemini\\antigravity\\brain\\9eb87cde-bbc3-495c-9768-9e06f5494802';
const OUT_DIR = resolve(process.cwd(), 'public', 'illustrations');
const SHEET_DIR = resolve(BRAIN_DIR, 'scratch');

const GENERATED_JPGS = {
  'agac-yasken-egilir': 'agac_yasken_egilir_1795117109626.jpg',
  'ayagini-yorganina-gore-uzat': 'ayagini_yorganina_gore_uzat_1795117118926.jpg',
  'damlaya-damlaya-gol-olur': 'damlaya_damlaya_gol_olur_1795117111194.jpg',
  'denize-dusen-yilana-sarilir': 'denize_dusen_yilana_sarilir_1795117119016.jpg',
  'isleyen-demir-pas-tutmaz': 'isleyen_demir_pas_tutmaz_1795117115634.jpg',
  'komsu-komsunun-kulune-muhtactir':
    'komsu_komsunun_kulune_muhtactir_1795117122596.jpg',
  'korle-yatan-sasi-kalkar': 'korle_yatan_sasi_kalkar_1795117130072.jpg',
  'mum-dibine-isik-vermez': 'mum_dibine_isik_vermez_1795117137865.jpg',
  'ne-ekersen-onu-bicersin': 'ne_ekersen_onu_bicersin_1795117147516.jpg',
  'pire-icin-yorgan-yakilmaz': 'pire_icin_yorgan_yakilmaz_1795117117302.jpg',
  'sakla-samani-gelir-zamani': 'sakla_samani_gelir_zamani_1795117126218.jpg',
  'sutten-agzi-yanan-yogurdu-ufleyerek-yer':
    'sutten_agzi_yanan_yogurdu_ufleyerek_yer_1795117135983.jpg',
  'tasima-su-ile-degirmen-donmez':
    'tasima_su_ile_degirmen_donmez_1795117144904.jpg',
};

const EXTRA_SVGS = {
  ...ATASOZU_EXTRA_SVGS_1,
  ...ATASOZU_EXTRA_SVGS_2,
  ...DEYIM_EXTRA_SVGS_1,
  ...DEYIM_EXTRA_SVGS_2,
};

const ALL_SVGS = {
  ...ATASOZU_SVGS,
  ...DEYIM_SVGS_1,
  ...DEYIM_SVGS_2,
  ...EXTRA_SVGS,
};

// Deterministic subtle tactile paper-grain overlay (720x720 RGBA at ~2.7% opacity)
function buildGrainOverlay(size = 720) {
  const buf = Buffer.alloc(size * size * 4);
  let seed = 1337;
  for (let i = 0; i < size * size; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const v = (seed >>> 24) & 0xff;
    const idx = i * 4;
    buf[idx] = v > 128 ? 255 : 210;
    buf[idx + 1] = v > 128 ? 248 : 198;
    buf[idx + 2] = v > 128 ? 236 : 178;
    buf[idx + 3] = 7;
  }
  return sharp(buf, { raw: { width: size, height: size, channels: 4 } })
    .png()
    .toBuffer();
}

await mkdir(OUT_DIR, { recursive: true });
await mkdir(SHEET_DIR, { recursive: true });

const grainPng = await buildGrainOverlay(720);

// 1. Convert all 13 generated JPGs to 720x720 .webp
for (const [slug, file] of Object.entries(GENERATED_JPGS)) {
  const srcPath = resolve(BRAIN_DIR, file);
  const outPath = resolve(OUT_DIR, `${slug}.webp`);
  await sharp(srcPath)
    .resize(720, 720, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outPath);
}

// 2. Render all 75 bespoke cartoon SVGs to 720x720 .webp + collect extra thumbs for visual QA
const extraKeys = new Set(Object.keys(EXTRA_SVGS));
const extraThumbs = [];

for (const [slug, svgText] of Object.entries(ALL_SVGS)) {
  const outPath = resolve(OUT_DIR, `${slug}.webp`);
  const basePng = await sharp(Buffer.from(svgText), { density: 180 })
    .resize(720, 720, { fit: 'contain', background: '#F9F4E7' })
    .composite([{ input: grainPng, blend: 'over' }])
    .png()
    .toBuffer();

  await sharp(basePng).webp({ quality: 86 }).toFile(outPath);

  if (extraKeys.has(slug)) {
    const thumb = await sharp(basePng).resize(320, 320).png().toBuffer();
    extraThumbs.push({ slug, thumb });
  }
}

// 3. Emit 4 visual contact sheets (4x3 grid = 12 thumbnails each, 1280x960) for the 48 new artworks
for (let sheetIdx = 0; sheetIdx < 4; sheetIdx++) {
  const slice = extraThumbs.slice(sheetIdx * 12, (sheetIdx + 1) * 12);
  const composites = slice.map((item, idx) => ({
    input: item.thumb,
    left: (idx % 4) * 320,
    top: Math.floor(idx / 4) * 320,
  }));

  await sharp({
    create: {
      width: 1280,
      height: 960,
      channels: 4,
      background: '#1E242B',
    },
  })
    .composite(composites)
    .png()
    .toFile(resolve(SHEET_DIR, `extra-sheet-${sheetIdx + 1}.png`));
}

console.log(
  `Built ${Object.keys(GENERATED_JPGS).length} JPG->WebP + ${Object.keys(ALL_SVGS).length} SVG->WebP = ${
    Object.keys(GENERATED_JPGS).length + Object.keys(ALL_SVGS).length
  } total illustrations (${extraThumbs.length} new).`,
);

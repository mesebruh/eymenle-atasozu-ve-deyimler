import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const DEYIM_EXTRA_SVGS_1 = {
  // 1. Can kulağıyla dinlemek
  'can-kulagiyla-dinlemek': wrapSvg(`
    ${groundShadow(256, 404, 128, 16)}

    <!-- Smooth Acoustic Sound Waves Entering From Left -->
    ${motionArc('M146 218 Q166 250 146 282', 5)}
    ${motionArc('M120 198 Q146 250 120 302', 5)}
    ${motionArc('M94 178 Q126 250 94 322', 4.5, '10 8')}

    <!-- Attentive Stylized Cartoon Ear With Glowing Warm Terracotta Heart at Center -->
    <g>
      <path d="M196 206 C196 122 296 98 344 156 C380 200 360 278 316 306 C298 318 298 342 278 354 C252 370 220 352 222 320 C224 294 244 276 232 248 C222 226 196 232 196 206 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/>
      <path d="M236 184 C250 146 312 146 322 192 C328 220 304 248 280 256" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>

      <!-- Warm Radiant Terracotta Heart Nestled Inside the Ear! -->
      <path d="M286 286 C286 286 248 260 248 234 C248 218 262 210 274 216 C280 220 284 226 286 232 C288 226 292 220 298 216 C310 210 324 218 324 234 C324 260 286 286 286 286 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.8" stroke-linejoin="round"/>
    </g>

    ${sparkle(368, 146, 13, C.ochreLight)}
    ${sparkle(354, 324, 11, C.terracotta)}
    ${sparkle(164, 152, 10, C.tealLight)}
  `),

  // 2. Cebinde akrep olmak
  'cebinde-akrep-olmak': wrapSvg(`
    ${groundShadow(256, 408, 128, 16)}

    <!-- Coat Fabric Backdrop & Stitched Deep-Teal Pocket -->
    <rect x="116" y="132" width="280" height="260" rx="22" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5.5"/>

    <!-- Cute Wide-Eyed Terracotta Cartoon Scorpion Peeking Cheerfully Out Over Pocket Rim -->
    <g>
      <!-- Curled Segmented Scorpion Tail -->
      <path d="M312 246 C348 236 364 190 338 156 C322 136 292 146 298 172" stroke="${C.ink}" stroke-width="18" stroke-linecap="round" fill="none"/>
      <path d="M312 246 C348 236 364 190 338 156 C322 136 292 146 298 172" stroke="${C.terracotta}" stroke-width="9" stroke-linecap="round" fill="none"/>
      <!-- Tiny stinger tip -->
      <path d="M298 172 L284 182 L306 184 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>

      <!-- Scorpion Body & Cute Eyes -->
      <ellipse cx="266" cy="242" rx="44" ry="30" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="250" cy="232" r="7" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="274" cy="232" r="7" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="252" cy="232" r="3" fill="${C.ink}"/>
      <circle cx="276" cy="232" r="3" fill="${C.ink}"/>

      <!-- Two Oversized Pincers Clinging Tightly Over the Pocket Rim! -->
      <path d="M222 244 C196 232 184 202 204 192 C214 188 220 202 214 214 C224 204 236 206 234 220 C232 232 226 238 222 244 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M306 244 C332 232 344 202 324 192 C314 188 308 202 314 214 C304 204 292 206 294 220 C296 232 302 238 306 244 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    </g>

    <!-- Guarded Coin Peeking Inside Pocket -->
    <circle cx="204" cy="246" r="22" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Neatly Stitched Pocket Shield in Foreground -->
    <path d="M158 248 L354 248 L354 334 C354 366 306 382 256 382 C206 382 158 366 158 334 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <!-- Decorative Cream Topstitching -->
    <path d="M172 262 L340 262 L340 330 C340 356 298 368 256 368 C214 368 172 356 172 330 Z" stroke="${C.cream}" stroke-width="3.5" stroke-dasharray="8 8" stroke-linecap="round" fill="none"/>

    ${sparkle(162, 168, 10, C.ochreLight)}
  `),

  // 3. Işık tutmak
  'isik-tutmak': wrapSvg(`
    ${groundShadow(256, 408, 146, 16)}

    <!-- Dark Teal Shadow Backdrop at Lower Half -->
    <path d="M108 242 L404 242 L404 384 C404 396 394 402 382 402 L130 402 C118 402 108 396 108 384 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

    <!-- Wide Radiant Ochre-Gold Light Beam Cone Illuminating Stepping Stones -->
    <polygon points="256,226 144,398 368,398" fill="${C.ochreLight}" fill-opacity="0.88" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

    <!-- Illuminated Crisp Stepping Stones Along the Path -->
    <ellipse cx="256" cy="376" rx="44" ry="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
    <ellipse cx="236" cy="342" rx="34" ry="10" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
    <ellipse cx="268" cy="312" rx="26" ry="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.8"/>

    <!-- Classic Brass Hand Lantern Held Aloft -->
    <g>
      <!-- Top Handle Ring -->
      <path d="M222 142 C222 104 290 104 290 142" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Lantern Roof Cap -->
      <path d="M206 156 L306 156 L284 134 L228 134 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Glowing Glass Chamber -->
      <rect x="218" y="156" width="76" height="72" rx="10" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Bright Flame Inside Lantern -->
      <path d="M256 172 C244 188 242 206 256 210 C270 206 268 188 256 172 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Lantern Base -->
      <rect x="206" y="226" width="100" height="20" rx="6" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5"/>
    </g>

    ${sparkle(156, 178, 12, C.ochreLight)}
    ${sparkle(356, 178, 12, C.ochreLight)}
  `),

  // 4. Iska geçmek
  'iska-gecmek': wrapSvg(`
    ${groundShadow(222, 404, 114, 14)}

    <!-- Wooden Tripod & Crisp Bullseye Target on Left -->
    <g>
      <!-- Tripod legs -->
      <path d="M198 302 L152 396 M246 302 L292 396 M222 302 L222 398" stroke="${C.tanDark}" stroke-width="10" stroke-linecap="round"/>
      <path d="M198 302 L152 396 M246 302 L292 396 M222 302 L222 398" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>
      <!-- Concentric Bullseye Rings -->
      <circle cx="222" cy="232" r="98" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5"/>
      <circle cx="222" cy="232" r="68" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="222" cy="232" r="38" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="222" cy="232" r="14" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
    </g>

    <!-- Feathered Cartoon Arrow Zooming Humorously Wide Right Past Target Into Empty Air! -->
    <g transform="rotate(-14 342 156)">
      <!-- Arrow Shaft -->
      <line x1="258" y1="156" x2="416" y2="156" stroke="${C.ink}" stroke-width="6.5" stroke-linecap="round"/>
      <!-- Arrowhead tip flying far past target -->
      <polygon points="424,156 396,142 402,156 396,170" fill="${C.teal}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <!-- Feathered fletching -->
      <polygon points="274,156 246,138 262,156 246,174" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>

    <!-- Dotted Wide Miss Trajectory & Comic Oops Sparks -->
    ${motionArc('M174 166 Q234 152 292 146', 4, '8 8')}
    ${sparkle(368, 224, 11, C.ochreLight)}
    ${sparkle(342, 112, 10, C.terracotta)}
  `),

  // 5. Jetonu düşmek
  'jetonu-dusmek': wrapSvg(`
    ${groundShadow(256, 408, 112, 14)}

    <!-- Retro Teal Coin-Slot Box at Top -->
    <g>
      <rect x="176" y="102" width="160" height="92" rx="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <rect x="196" y="122" width="120" height="52" rx="10" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4"/>
      <!-- Vertical Coin Slot -->
      <rect x="249" y="132" width="14" height="34" rx="7" fill="${C.ink}"/>
    </g>

    <!-- Gleaming Golden Token Dropping Down Along Vertical Dashed Trail -->
    ${motionArc('M256 198 L256 268', 4.5, '7 7')}
    <g>
      <circle cx="256" cy="236" r="24" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="256" cy="236" r="14" fill="none" stroke="${C.ink}" stroke-width="3.2"/>
    </g>

    <!-- Bright Glowing Golden Lightbulb Burst at the Bottom ("Aha! Idea Clicked!") -->
    <g>
      <!-- Radiating idea rays -->
      <path d="M168 332 L140 326 M174 372 L152 388 M344 332 L372 326 M338 372 L360 388" stroke="${C.ochre}" stroke-width="5.5" stroke-linecap="round"/>
      <!-- Lightbulb Glass -->
      <path d="M204 328 C204 282 308 282 308 328 C308 352 288 364 284 378 L228 378 C224 364 204 352 204 328 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Filament Spark -->
      <path d="M242 332 L250 350 L256 340 L262 350 L270 332" stroke="${C.terracotta}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- Screw Base -->
      <rect x="230" y="378" width="52" height="24" rx="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    ${sparkle(154, 244, 12, C.ochreLight)}
    ${sparkle(362, 244, 12, C.terracotta)}
  `),

  // 6. Jilet gibi olmak
  'jilet-gibi-olmak': wrapSvg(`
    ${groundShadow(256, 408, 134, 16)}

    <!-- Crisp Sharply Tailored Deep-Teal Blazer & Shirt -->
    <g>
      <!-- Blazer Body -->
      <path d="M142 396 L158 194 C162 162 192 142 222 142 L290 142 C320 142 350 162 354 194 L370 396 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Crisp White Dress Shirt V-Front -->
      <polygon points="216,142 296,142 256,282" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Crisp Sharp Collar Flaps -->
      <polygon points="216,142 256,164 226,184" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <polygon points="296,142 256,164 286,184" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- Sharp Tailored Blazer Lapels -->
      <polygon points="216,142 184,212 224,254 256,282" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <polygon points="296,142 328,212 288,254 256,282" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- Dapper Terracotta Bow Tie -->
      <path d="M224 166 L256 182 L224 198 Z M288 166 L256 182 L288 198 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <circle cx="256" cy="182" r="7" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>

      <!-- Crisp Folded Ochre Pocket Square -->
      <polygon points="294,264 316,238 334,264" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <line x1="290" y1="264" x2="338" y2="264" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>

      <!-- Suit Buttons -->
      <circle cx="256" cy="316" r="7" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="256" cy="356" r="7" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    <!-- Glinting Crisp Razor-Sharp Sparkles Off Lapels & Shoulders -->
    ${sparkle(136, 156, 14, C.ochreLight)}
    ${sparkle(378, 168, 15, C.ochreLight)}
    ${sparkle(354, 246, 11, C.terracotta)}
    ${sparkle(164, 294, 11, C.tealLight)}
  `),

  // 7. Lafı ağzında gevelemek
  'lafi-agzinda-gevelemek': wrapSvg(`
    ${groundShadow(188, 396, 88, 14)}
    ${groundShadow(340, 396, 74, 12)}

    <!-- Flustered Round Character Face With Puffed Cheeks & Nervous Sweat Drop -->
    <g>
      <path d="M116 382 C122 332 152 316 188 316 C224 316 254 332 260 382 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <circle cx="188" cy="242" r="78" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M112 222 C118 166 174 152 218 162 C252 170 264 198 264 222 C238 196 206 190 176 202 C152 194 128 204 112 222 Z" fill="${C.ink}"/>
      <!-- Nervous tilted eyebrows & shifting eyes -->
      <path d="M148 214 Q162 204 176 212 M198 212 Q212 204 226 214" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="164" cy="228" r="7" fill="${C.ink}"/>
      <circle cx="212" cy="228" r="7" fill="${C.ink}"/>
      <!-- Puffed squirmy wavy mumble mouth -->
      <path d="M160 268 Q174 258 188 268 Q202 278 216 268" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Sweat drop -->
      <path d="M128 214 C128 214 120 226 120 232 C120 236 124 238 128 238 C132 238 136 236 136 232 C136 226 128 214 128 214 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>
    </g>

    <!-- Cream Speech Bubble Filled With a Tangled Knotted Yarn Scribble Coil! -->
    <g>
      <path d="M274 222 C264 196 276 146 336 146 C396 146 418 182 414 222 C410 262 368 278 322 274 L268 286 L286 254 C278 244 276 234 274 222 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Tangled knotted scribble coil inside bubble -->
      <path d="M304 214 C298 184 338 176 342 204 C346 230 310 236 318 206 C326 178 372 184 366 216 C360 242 332 234 344 206 C356 182 388 198 380 224 C372 246 346 242 356 220" stroke="${C.terracotta}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    </g>
  `),

  // 8. Lafı gediğine koymak
  'lafi-gedigine-koymak': wrapSvg(`
    ${groundShadow(256, 408, 146, 16)}

    <!-- Neat Warm-Tan Stone Wall With One Custom Speech-Bubble Gap -->
    <g>
      <rect x="104" y="216" width="304" height="176" rx="14" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Stone Brick Seams -->
      <path d="M104 274 L408 274 M104 332 L408 332 M186 216 L186 274 M326 216 L326 274 M148 274 L148 332 M256 274 L256 332 M364 274 L364 332 M204 332 L204 392 M312 332 L312 392" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>

      <!-- Exact Recessed Slot Cutout in Top Center of the Wall -->
      <path d="M214 216 L298 216 L298 264 L256 264 L240 282 L240 264 L214 264 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    </g>

    <!-- Glowing Ochre-Gold Speech-Bubble Puzzle Block Snapping Perfectly Into the Gap! -->
    <g>
      <path d="M216 144 L296 144 C304 144 308 148 308 156 L308 194 C308 202 304 206 296 206 L256 206 L240 226 L240 206 L216 206 C208 206 204 202 204 194 L204 156 C204 148 208 144 216 144 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Crisp inner dot motif -->
      <circle cx="236" cy="175" r="5.5" fill="${C.ink}"/>
      <circle cx="256" cy="175" r="5.5" fill="${C.ink}"/>
      <circle cx="276" cy="175" r="5.5" fill="${C.ink}"/>
    </g>

    <!-- Downward Snap Motion Arrows & Celebration Sparkles -->
    <path d="M186 178 L186 208 M176 198 L186 210 L196 198 M326 178 L326 208 M316 198 L326 210 L336 198" stroke="${C.terracotta}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    ${sparkle(256, 108, 14, C.ochreLight)}
    ${sparkle(148, 144, 11, C.terracotta)}
    ${sparkle(364, 144, 11, C.tealLight)}
  `),

  // 9. Nabzını yoklamak
  'nabzini-yoklamak': wrapSvg(`
    ${groundShadow(256, 404, 142, 16)}

    <!-- Crisp Glowing Terracotta Heartbeat Pulse Wave Above Wrist -->
    <g>
      <path d="M104 190 L194 190 L214 146 L236 222 L258 124 L280 208 L296 190 L408 190" stroke="${C.terracotta}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- Heart badge peeking beside pulse peak -->
      <path d="M352 154 C352 154 328 138 328 122 C328 112 336 106 344 110 C348 112 350 116 352 120 C354 116 356 112 360 110 C368 106 376 112 376 122 C376 138 352 154 352 154 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>

    <!-- Upturned Wrist Resting Calmly Below -->
    <g>
      <!-- Teal Sleeve Cuff -->
      <path d="M98 318 L166 312 L172 376 L104 382 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Upturned Forearm & Relaxed Palm -->
      <path d="M168 316 L296 310 C332 308 368 292 396 296 C412 298 412 316 396 322 L352 334 L388 338 C402 340 400 356 382 358 L314 366 L172 374 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    </g>

    <!-- Gentle Fingertips Resting Calmly on the Wrist Pulse Point -->
    <g>
      <path d="M276 218 L244 268 C236 280 234 298 242 312 C250 318 260 312 264 300 L274 278 L272 302 C272 314 286 314 290 300 L306 254 L334 218 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Cuff -->
      <path d="M268 192 L344 192 L340 226 L264 226 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    </g>

    ${sparkle(146, 146, 11, C.ochreLight)}
  `),

  // 10. Ne şiş yansın ne kebap
  'ne-sis-yansin-ne-kebap': wrapSvg(`
    ${groundShadow(256, 408, 138, 16)}

    <!-- Warm Glowing Embers Base -->
    <g>
      <path d="M144 388 C154 362 192 356 222 368 C242 352 274 352 294 368 C324 356 362 362 372 388 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="212" cy="376" r="10" fill="${C.ochreLight}"/>
      <circle cx="258" cy="370" r="12" fill="${C.ochreLight}"/>
      <circle cx="304" cy="376" r="9" fill="${C.ochreLight}"/>
    </g>

    <!-- Balanced Equilibrium Pivot Stands at Left & Right -->
    <path d="M132 388 L132 246 M380 388 L380 246" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>
    <path d="M118 246 L146 246 M366 246 L394 246" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>

    <!-- Horizontal Perfectly Level Metal Skewer (Şiş) -->
    <line x1="94" y1="246" x2="416" y2="246" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>
    <circle cx="100" cy="246" r="12" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Delicious Balanced Kebab Cubes & Veggies on the Skewer -->
    <g stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round">
      <rect x="164" y="220" width="38" height="52" rx="10" fill="${C.terracotta}"/>
      <circle cx="222" cy="246" r="18" fill="${C.sage}"/>
      <rect x="246" y="220" width="40" height="52" rx="10" fill="${C.tanDark}"/>
      <circle cx="306" cy="246" r="18" fill="${C.ochre}"/>
      <rect x="330" y="220" width="38" height="52" rx="10" fill="${C.terracotta}"/>
    </g>

    <!-- Calm Balance Scale / Level Indicator Overhead -->
    <path d="M214 148 L298 148" stroke="${C.teal}" stroke-width="7" stroke-linecap="round"/>
    <polygon points="256,148 242,174 270,174" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    ${sparkle(162, 162, 11, C.ochreLight)}
    ${sparkle(350, 162, 11, C.ochreLight)}
  `),

  // 11. Ödünü koparmak
  'odunu-koparmak': wrapSvg(`
    ${groundShadow(256, 408, 128, 14)}

    <!-- Jagged Comic Fright Shock Bolts Radiating Outward -->
    <path d="M114 176 L146 196 M102 226 L138 228 M398 176 L366 196 M410 226 L374 228 M256 96 L256 124 M176 118 L194 144 M336 118 L318 144" stroke="${C.terracotta}" stroke-width="5.5" stroke-linecap="round"/>

    <!-- Flying Pair of Shoes Left Behind on the Ground Below! -->
    <g>
      <path d="M156 390 L214 390 C222 390 222 374 206 374 L182 374 L168 358 L156 390 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M356 390 L298 390 C290 390 290 374 306 374 L330 374 L344 358 L356 390 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    </g>

    <!-- Startled Character Leaping High Into the Air With Hair Standing Straight Up! -->
    <g transform="translate(0, -18)">
      <!-- Little waving arms & dangling legs in mid-air -->
      <path d="M196 294 L160 256 M316 294 L352 256" stroke="${C.ink}" stroke-width="10" stroke-linecap="round"/>
      <path d="M234 334 L224 366 M278 334 L288 366" stroke="${C.ink}" stroke-width="10" stroke-linecap="round"/>
      <!-- Sweater Body -->
      <path d="M198 336 C202 284 226 266 256 266 C286 266 310 284 314 336 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

      <!-- Spiky Frightened Hair Standing Straight Up! -->
      <path d="M192 198 L178 152 L214 172 L226 128 L256 162 L286 128 L298 172 L334 152 L320 198 Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- Wide-Eyed Shocked Round Head -->
      <circle cx="256" cy="218" r="64" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Huge Startled Eyes -->
      <circle cx="232" cy="208" r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="280" cy="208" r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="232" cy="208" r="5" fill="${C.ink}"/>
      <circle cx="280" cy="208" r="5" fill="${C.ink}"/>
      <!-- Shocked Open 'O' Mouth -->
      <ellipse cx="256" cy="248" rx="14" ry="18" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>
  `),

  // 12. Öküz altında buzağı aramak
  'okuz-altinda-buzagi-aramak': wrapSvg(`
    ${groundShadow(256, 396, 154, 16)}

    <!-- Three Tiny Innocent Blades of Grass Under the Ox's Belly -->
    <path d="M242 388 L236 368 M254 388 L254 362 M266 388 L274 368" stroke="${C.sage}" stroke-width="5.5" stroke-linecap="round"/>

    <!-- Calm Bewildered Stylized Cartoon Ox Standing Peacefully -->
    <g>
      <!-- Four Sturdy Legs -->
      <rect x="148" y="302" width="22" height="84" rx="8" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="184" y="308" width="20" height="78" rx="8" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="308" y="308" width="20" height="78" rx="8" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="342" y="302" width="22" height="84" rx="8" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Tail -->
      <path d="M366 232 Q396 244 392 292" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>

      <!-- Chunky Ox Body -->
      <rect x="140" y="188" width="228" height="132" rx="54" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>

      <!-- Ox Head Turning Slightly With Confused Look -->
      <g>
        <!-- Curved Horns -->
        <path d="M126 174 C98 156 102 122 126 116 C118 134 126 148 142 154" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M196 174 C224 156 220 122 196 116 C204 134 196 148 180 154" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
        <!-- Head Shape -->
        <rect x="112" y="148" width="98" height="98" rx="34" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
        <!-- Pale Snout -->
        <rect x="122" y="198" width="78" height="44" rx="20" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
        <!-- Confused Eyes -->
        <circle cx="144" cy="182" r="7" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>
        <circle cx="178" cy="182" r="7" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>
        <circle cx="145" cy="183" r="3.5" fill="${C.ink}"/>
        <circle cx="179" cy="183" r="3.5" fill="${C.ink}"/>
        <!-- Nostrils -->
        <circle cx="146" cy="218" r="3.5" fill="${C.ink}"/>
        <circle cx="176" cy="218" r="3.5" fill="${C.ink}"/>
      </g>
    </g>

    <!-- Giant Oversized Brass Magnifying Glass Peering Intently Underneath the Ox's Belly! -->
    <g>
      <!-- Handle -->
      <path d="M294 366 L354 406" stroke="${C.terracotta}" stroke-width="18" stroke-linecap="round"/>
      <path d="M294 366 L354 406" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round"/>
      <!-- Magnifying Lens Frame -->
      <circle cx="254" cy="346" r="46" fill="${C.tealLight}" fill-opacity="0.48" stroke="${C.ochre}" stroke-width="10"/>
      <circle cx="254" cy="346" r="46" fill="none" stroke="${C.ink}" stroke-width="5"/>
      <!-- Glass Reflection Glint -->
      <path d="M228 328 Q238 316 254 316" stroke="${C.cream}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    </g>

    ${sparkle(338, 146, 11, C.ochreLight)}
  `),
};

import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const ATASOZU_EXTRA_SVGS_2 = {
  // 13. Rüzgâr eken fırtına biçer.
  'ruzgar-eken-firtina-bicer': wrapSvg(`
    ${groundShadow(146, 384, 58, 12)}
    ${groundShadow(324, 396, 108, 16)}

    <!-- Left: Small Mischievous Wind Puff Cloud -->
    <g>
      <path d="M104 284 C96 266 116 250 134 258 C144 242 172 248 174 268 C186 274 180 294 164 294 L112 294 C102 294 100 288 104 284 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      ${motionArc('M186 274 Q212 266 226 278', 4)}
      ${motionArc('M182 288 Q206 294 220 286', 3.5)}
    </g>

    <!-- Right: Towering Swirling Deep-Teal Tornado / Tempest -->
    <g>
      <ellipse cx="326" cy="144" rx="88" ry="24" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <ellipse cx="326" cy="176" rx="74" ry="20" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5"/>
      <ellipse cx="322" cy="210" rx="58" ry="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="5"/>
      <ellipse cx="318" cy="246" rx="44" ry="15" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5"/>
      <ellipse cx="318" cy="282" rx="32" ry="12" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5"/>
      <ellipse cx="322" cy="316" rx="22" ry="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="4.5"/>
      <path d="M310 326 Q324 358 338 386" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>

      <!-- Swirling Lightning Bolt & Wind-Swept Leaves -->
      <path d="M260 156 L244 188 L262 188 L244 220" stroke="${C.ochreLight}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <ellipse cx="394" cy="222" rx="12" ry="6" transform="rotate(-30 394 222)" fill="${C.sage}" stroke="${C.ink}" stroke-width="3.5"/>
      <ellipse cx="246" cy="296" rx="11" ry="6" transform="rotate(24 246 296)" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    ${motionArc('M252 346 Q272 366 306 364', 4)}
    ${sparkle(398, 124, 11, C.ochreLight)}
  `),

  // 14. Rüzgâr esmeyince yaprak oynamaz.
  'ruzgar-esmeyince-yaprak-oynamaz': wrapSvg(`
    ${groundShadow(256, 396, 128, 16)}

    <!-- Graceful Swirling Breeze Curls Blowing From Left -->
    <g>
      <path d="M92 214 L182 214 C202 214 206 186 184 182 C166 178 162 198 176 202" stroke="${C.tealMid}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M106 246 L212 246 C234 246 238 274 216 278 C198 282 194 264 208 260" stroke="${C.teal}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M98 282 L166 282" stroke="${C.tealLight}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Slender Branch & Tilted Fluttering Sage Leaf -->
    <g>
      <!-- Curved Twig Entering From Right -->
      <path d="M412 192 Q358 188 308 214" stroke="${C.tanDark}" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M412 192 Q358 188 308 214" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>

      <!-- Leaf Tilted Dynamically by the Breeze -->
      <g transform="rotate(-18 302 266)">
        <path d="M308 214 C252 222 244 302 288 342 C346 312 354 242 308 214 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
        <!-- Leaf Center Vein & Side Veins -->
        <path d="M308 216 Q296 278 288 340" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
        <path d="M300 256 L276 248 M296 286 L270 280 M302 264 L326 254 M294 294 L322 284" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round"/>
      </g>

      <!-- Crisp Flutter Motion Arcs Around Leaf Tip -->
      ${motionArc('M252 344 Q276 362 306 352', 4)}
      ${motionArc('M342 304 Q358 326 344 348', 4)}
    </g>

    ${sparkle(258, 152, 11, C.ochreLight)}
  `),

  // 15. Şahin ile deve avlanmaz.
  'sahin-ile-deve-avlanmaz': wrapSvg(`
    ${groundShadow(146, 384, 52, 10)}
    ${groundShadow(318, 404, 108, 16)}

    <!-- Left: Tiny Fierce Determined Cartoon Falcon Perched on a Post -->
    <g>
      <rect x="132" y="294" width="22" height="90" rx="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Falcon Body -->
      <path d="M118 274 C112 242 132 222 154 226 C172 230 176 256 164 276 L138 294 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <path d="M126 256 C138 248 152 254 156 272" stroke="${C.cream}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Hooked Beak & Determined Eye Looking Up at Giant Camel -->
      <path d="M168 232 L184 236 L170 246 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="154" cy="238" r="4" fill="${C.ink}"/>
      <path d="M146 228 L162 232" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
    </g>

    <!-- Right: Towering Calm Cartoon Camel Silhouette Looking Unbothered -->
    <g>
      <!-- Four Tall Legs -->
      <rect x="242" y="296" width="18" height="104" rx="8" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="276" y="302" width="18" height="98" rx="8" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="348" y="302" width="18" height="98" rx="8" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="372" y="296" width="18" height="104" rx="8" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Huge Hump & Body -->
      <path d="M236 286 C230 226 268 202 292 162 C312 132 348 134 366 168 C384 206 406 236 398 290 C392 316 352 322 308 322 C264 322 240 308 236 286 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

      <!-- Tall Camel Neck & Calm Face -->
      <path d="M248 258 C222 238 214 196 218 148 C220 124 202 114 192 126 C184 136 192 152 206 154 C206 196 208 254 238 286" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <circle cx="204" cy="132" r="4" fill="${C.ink}"/>
      <!-- Tiny Tail -->
      <path d="M398 258 Q418 274 412 304" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    </g>

    ${sparkle(162, 188, 10, C.ochreLight)}
  `),

  // 16. Şimşek çakmadan gök gürlemez.
  'simsek-cakmadan-gok-gurlemez': wrapSvg(`
    ${groundShadow(256, 408, 126, 14)}

    <!-- Concentric Thunder Wave Arcs Radiating Outward -->
    ${motionArc('M112 184 Q88 228 112 272', 5)}
    ${motionArc('M88 164 Q56 228 88 292', 4.5, '10 8')}
    ${motionArc('M400 184 Q424 228 400 272', 5)}
    ${motionArc('M424 164 Q456 228 424 292', 4.5, '10 8')}

    <!-- Plump Deep-Teal Storm Cloud -->
    <g>
      <path d="M148 216 C112 216 100 168 134 150 C142 104 198 92 234 118 C264 84 334 94 348 140 C392 142 406 196 368 216 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/>
      <path d="M158 158 C178 134 212 132 230 148" stroke="${C.tealLight}" stroke-width="5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Bold Ochre-Gold Zigzag Lightning Bolt Striking Downward -->
    <polygon points="274,204 222,292 264,292 232,386 312,268 266,268" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

    ${sparkle(182, 314, 12, C.terracotta)}
    ${sparkle(336, 316, 12, C.ochre)}
  `),

  // 17. Ucuz etin yahnisi yavan olur.
  'ucuz-etin-yahnisi-yavan-olur': wrapSvg(`
    ${groundShadow(256, 408, 134, 16)}

    <!-- Sparse Limp Pale Steam Curl & Disappointed Drop -->
    <path d="M256 218 Q242 184 264 158 Q282 136 266 112" stroke="${C.tanDark}" stroke-width="5" stroke-dasharray="10 8" stroke-linecap="round" fill="none"/>

    <!-- Tilted Open Pot Lid Floating Slightly Above -->
    <g transform="rotate(-14 256 216)">
      <path d="M148 228 C168 192 344 192 364 228 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <circle cx="256" cy="186" r="14" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    <!-- Large Cooking Pot with Sad Thin Watery Broth & One Lonely Pale Chunk -->
    <g>
      <!-- Side Handles -->
      <path d="M138 294 C112 294 112 326 138 326 M374 294 C400 294 400 326 374 326" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Watery Pale Broth Rim -->
      <ellipse cx="256" cy="272" rx="118" ry="22" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- One lonely tiny pale vegetable/piece floating sadly -->
      <ellipse cx="268" cy="274" rx="16" ry="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="214" cy="270" r="5" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>
      <!-- Pot Body -->
      <path d="M138 272 L138 354 C138 380 184 394 256 394 C328 394 374 380 374 354 L374 272 C336 292 176 292 138 272 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Subtle horizontal pot band -->
      <path d="M140 318 Q256 338 372 318" stroke="${C.tanDark}" stroke-width="6" fill="none"/>
    </g>

    ${sparkle(164, 162, 9, C.tanDark)}
  `),

  // 18. Ummadığın taş baş yarar.
  'ummadigin-tas-bas-yarar': wrapSvg(`
    ${groundShadow(256, 404, 118, 14)}

    <!-- Startled Hat Leaping High Into the Air in Surprise! -->
    <g transform="rotate(-22 256 154)">
      <ellipse cx="256" cy="176" rx="88" ry="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M196 174 C198 118 228 104 256 104 C284 104 314 118 316 174 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M197 156 Q256 168 315 156" stroke="${C.terracotta}" stroke-width="10" fill="none"/>
    </g>

    <!-- Bold Golden Comic Impact Starburst & Shock Bolts -->
    <path d="M256 226 L268 256 L300 246 L282 272 L308 294 L274 294 L264 322 L248 294 L214 296 L236 272 L214 246 L246 256 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    ${sparkle(144, 178, 12, C.terracotta)}
    ${sparkle(368, 178, 12, C.ochre)}

    <!-- Tiny Unassuming Round Pebble Bouncing Surprisingly High With Motion Trail -->
    ${motionArc('M152 384 Q188 336 248 344', 4.5, '8 8')}
    <g>
      <ellipse cx="256" cy="348" rx="34" ry="26" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Innocent little pebble eyes -->
      <circle cx="246" cy="344" r="3.5" fill="${C.ink}"/>
      <circle cx="266" cy="344" r="3.5" fill="${C.ink}"/>
      <path d="M250 356 Q256 360 262 356" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" fill="none"/>
    </g>
  `),

  // 19. Üzüm üzüme baka baka kararır.
  'uzum-uzume-baka-baka-kararir': wrapSvg(`
    ${groundShadow(176, 402, 76, 14)}
    ${groundShadow(336, 402, 76, 14)}

    <!-- Curled Overhead Grapevine Stem & Leaves -->
    <path d="M104 128 Q256 102 408 134" stroke="${C.ink}" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M174 118 L174 176 M338 122 L338 176" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    <path d="M224 114 C236 92 268 94 274 116 C256 128 238 128 224 114 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Left Bunch: Deep Dark Indigo-Teal Ripe Grapes Looking Cheerfully Rightward -->
    <g>
      <g fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5">
        <circle cx="152" cy="198" r="24"/>
        <circle cx="198" cy="198" r="24"/>
        <circle cx="132" cy="242" r="24"/>
        <circle cx="176" cy="242" r="24"/>
        <circle cx="218" cy="242" r="24"/>
        <circle cx="154" cy="286" r="24"/>
        <circle cx="198" cy="286" r="24"/>
        <circle cx="176" cy="330" r="24"/>
      </g>
      <!-- Cute eyes on a grape facing right -->
      <circle cx="182" cy="240" r="4" fill="${C.cream}"/>
      <circle cx="198" cy="240" r="4" fill="${C.cream}"/>
      <path d="M184 252 Q190 258 196 252" stroke="${C.cream}" stroke-width="3" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Dotted "watching/influence" sightline arrows between bunches -->
    ${motionArc('M244 218 L272 218', 4, '4 5')}
    ${motionArc('M244 254 L272 254', 4, '4 5')}

    <!-- Right Bunch: Green Grapes Gradually Turning Deep Teal Closest to Left Bunch! -->
    <g stroke="${C.ink}" stroke-width="4.5">
      <circle cx="314" cy="198" r="24" fill="${C.teal}"/>
      <circle cx="360" cy="198" r="24" fill="${C.sageLight}"/>
      <circle cx="294" cy="242" r="24" fill="${C.teal}"/>
      <circle cx="338" cy="242" r="24" fill="${C.tealMid}"/>
      <circle cx="380" cy="242" r="24" fill="${C.sageLight}"/>
      <circle cx="316" cy="286" r="24" fill="${C.tealMid}"/>
      <circle cx="360" cy="286" r="24" fill="${C.sage}"/>
      <circle cx="338" cy="330" r="24" fill="${C.sage}"/>
    </g>
    <!-- Cute eyes looking left -->
    <circle cx="300" cy="240" r="4" fill="${C.cream}"/>
    <circle cx="316" cy="240" r="4" fill="${C.cream}"/>

    ${sparkle(256, 152, 10, C.ochreLight)}
  `),

  // 20. Üzümünü ye, bağını sorma.
  'uzumunu-ye-bagini-sorma': wrapSvg(`
    ${groundShadow(256, 408, 134, 16)}

    <!-- Ceramic Bowl Piled High with Plump Deep-Teal Grapes -->
    <g>
      <!-- Plump Grapes Inside Bowl -->
      <g fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5">
        <circle cx="182" cy="244" r="22"/>
        <circle cx="222" cy="222" r="24"/>
        <circle cx="266" cy="214" r="25"/>
        <circle cx="310" cy="226" r="23"/>
        <circle cx="336" cy="252" r="22"/>
        <circle cx="204" cy="264" r="23" fill="${C.tealMid}"/>
        <circle cx="248" cy="258" r="24" fill="${C.tealMid}"/>
        <circle cx="294" cy="262" r="23" fill="${C.tealMid}"/>
      </g>
      <!-- Sage grape leaf tucking out of top -->
      <path d="M214 196 C194 176 208 152 234 166 C240 176 234 196 214 196 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="4.5"/>

      <!-- Warm Cream & Terracotta Serving Bowl -->
      <path d="M138 274 L374 274 C370 348 326 388 256 388 C186 388 142 348 138 274 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M150 318 Q256 340 362 318" stroke="${C.ochreLight}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M206 384 L306 384 L314 398 L198 398 Z" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    </g>

    <!-- One Single Tasty Grape Held Up Joyfully Above -->
    <g>
      <circle cx="266" cy="144" r="22" fill="${C.teal}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="258" cy="136" r="6" fill="${C.tealLight}"/>
      ${sparkle(298, 126, 12, C.ochreLight)}
      ${sparkle(162, 166, 10, C.ochre)}
    </g>
  `),

  // 21. Vakit nakittir.
  'vakit-nakittir': wrapSvg(`
    ${groundShadow(256, 408, 134, 16)}

    <!-- Neat Layered Stack of Gleaming Ochre Gold Coins -->
    <g fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.8">
      <ellipse cx="256" cy="382" rx="92" ry="18"/>
      <path d="M164 362 L164 382 C164 392 204 400 256 400 C308 400 348 392 348 382 L348 362" fill="${C.ochre}"/>
      <ellipse cx="256" cy="362" rx="92" ry="18" fill="${C.ochreLight}"/>

      <path d="M164 334 L164 354 C164 364 204 372 256 372 C308 372 348 364 348 354 L348 334" fill="${C.ochre}"/>
      <ellipse cx="256" cy="334" rx="92" ry="18" fill="${C.ochreLight}"/>

      <path d="M164 306 L164 326 C164 336 204 344 256 344 C308 344 348 336 348 326 L348 306" fill="${C.ochre}"/>
      <ellipse cx="256" cy="306" rx="92" ry="18" fill="${C.ochreLight}"/>
    </g>

    <!-- Gleaming Vintage Golden Pocket Watch Resting Proudly on Top of the Coins -->
    <g>
      <!-- Top Winding Crown & Ring -->
      <rect x="242" y="114" width="28" height="22" rx="5" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="256" cy="100" r="18" fill="none" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Watch Outer Brass Case -->
      <circle cx="256" cy="218" r="88" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Watch Cream Dial -->
      <circle cx="256" cy="218" r="68" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Crisp Clock Tick Marks (NO numbers) -->
      <path d="M256 162 L256 172 M256 264 L256 274 M200 218 L210 218 M302 218 L312 218" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>
      <!-- Clock Hands -->
      <path d="M256 180 L256 218 L286 234" stroke="${C.terracotta}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="256" cy="218" r="7" fill="${C.ink}"/>
    </g>

    ${sparkle(134, 174, 13, C.ochreLight)}
    ${sparkle(378, 166, 14, C.ochreLight)}
    ${sparkle(386, 336, 10, C.terracotta)}
  `),

  // 22. Veren el alan elden üstündür.
  'veren-el-alan-elden-ustundur': wrapSvg(`
    ${groundShadow(256, 408, 126, 14)}

    <!-- Top Giving Hand Gracefully Lowering a Radiant Terracotta Heart -->
    <g>
      <!-- Upper Teal Sleeve & Open Giving Hand -->
      <path d="M398 118 L322 146 L334 184 L410 156 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M326 148 L244 156 C222 158 220 176 238 178 L284 182 L212 192 C196 194 198 210 216 210 L294 206 C312 204 328 194 334 182 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    </g>

    <!-- Radiant Terracotta Heart Floating Gently Downward -->
    <g>
      <path d="M256 302 C256 302 208 272 208 242 C208 224 224 214 238 220 C248 224 254 232 256 238 C258 232 264 224 274 220 C288 214 304 224 304 242 C304 272 256 302 256 302 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      ${sparkle(182, 254, 11, C.ochreLight)}
      ${sparkle(330, 254, 11, C.ochreLight)}
    </g>

    <!-- Lower Receiving Hand Open Gratefully Below -->
    <g>
      <path d="M114 352 L190 342 L198 380 L122 390 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M192 344 L232 330 C244 326 250 340 238 346 L296 346 C314 346 318 364 300 366 L264 370 L284 378 C294 382 288 394 274 392 L198 380 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    </g>
  `),

  // 23. Zahmetsiz rahmet olmaz.
  'zahmetsiz-rahmet-olmaz': wrapSvg(`
    ${groundShadow(256, 408, 146, 16)}

    <!-- Radiant Sunburst & Golden Trophy/Crown at the Mountain Summit -->
    <circle cx="332" cy="144" r="44" fill="${C.ochreLight}" fill-opacity="0.45"/>
    <g>
      <!-- Trophy Cup -->
      <path d="M306 116 L358 116 L350 156 C346 168 318 168 314 156 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M306 124 C290 124 290 144 308 144 M358 124 C374 124 374 144 356 144" stroke="${C.ink}" stroke-width="4" fill="none"/>
      <path d="M332 164 L332 182 M316 184 L348 184" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    </g>

    <!-- Mountain Silhouette With Winding Stepped Stone Staircase -->
    <path d="M104 396 L246 218 L332 184 L416 396 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

    <!-- Winding Stone Steps Climbing Upward -->
    <g fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round">
      <rect x="118" y="366" width="64" height="24" rx="5"/>
      <rect x="154" y="334" width="64" height="24" rx="5"/>
      <rect x="190" y="302" width="64" height="24" rx="5"/>
      <rect x="226" y="270" width="64" height="24" rx="5"/>
      <rect x="262" y="238" width="64" height="24" rx="5"/>
      <rect x="294" y="206" width="64" height="24" rx="5"/>
    </g>

    <!-- Fluffy Cream Cloud Floating Across Mid-Slope -->
    <path d="M126 266 C114 250 132 232 152 238 C164 222 192 226 196 246 C210 250 206 270 190 270 L134 270 C124 270 122 268 126 266 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>

    ${sparkle(256, 128, 11, C.ochreLight)}
    ${sparkle(392, 134, 12, C.terracotta)}
  `),

  // 24. Zararın neresinden dönülse kârdır.
  'zararin-neresinden-donulse-kardir': wrapSvg(`
    ${groundShadow(256, 408, 146, 16)}

    <!-- Left: Sunny Safe Sage-Green Meadow -->
    <path d="M96 322 Q178 292 276 318 L276 392 L96 392 Z" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="142" cy="148" r="28" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Right: Sharp Jagged Dark Cliff Drop Edge -->
    <path d="M276 318 L344 268 L368 296 L368 392 L276 392 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    <!-- Warning Edge Signpost Before Cliff -->
    <path d="M352 246 L352 290" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    <polygon points="352,196 382,248 322,248" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    <line x1="352" y1="214" x2="352" y2="230" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="352" cy="239" r="2.8" fill="${C.ink}"/>

    <!-- Bold Curved Terracotta U-Turn Arrow Sweeping Safely Back to Meadow! -->
    <path d="M286 246 C318 246 320 182 256 182 C192 182 178 244 176 284" stroke="${C.ink}" stroke-width="30" stroke-linecap="round" fill="none"/>
    <path d="M286 246 C318 246 320 182 256 182 C192 182 178 244 176 284" stroke="${C.terracotta}" stroke-width="20" stroke-linecap="round" fill="none"/>
    <path d="M286 246 C318 246 320 182 256 182 C192 182 178 244 176 284" stroke="${C.cream}" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 10" fill="none"/>
    <!-- Clean outlined U-turn arrowhead -->
    <path d="M148 268 L176 310 L206 268 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>

    ${sparkle(198, 148, 12, C.ochreLight)}
  `),
};

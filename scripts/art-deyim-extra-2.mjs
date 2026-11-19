import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const DEYIM_EXTRA_SVGS_2 = {
  // 13. Rafa kaldırmak
  'rafa-kaldirmak': wrapSvg(`
    ${groundShadow(256, 396, 134, 14)}

    <!-- High Mounted Wooden Wall Shelf -->
    <g>
      <!-- Support Brackets -->
      <path d="M138 236 L138 282 L176 236 Z M374 236 L374 282 L336 236 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Shelf Plank -->
      <rect x="108" y="214" width="296" height="24" rx="8" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
    </g>

    <!-- Neatly Stacked Ribbon-Tied Archive Folder Sitting Up on the Shelf -->
    <g>
      <!-- Bottom Folder Box -->
      <rect x="168" y="156" width="166" height="58" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Top Cream File Folder -->
      <path d="M182 114 L242 114 L254 128 L320 128 L320 156 L182 156 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Tied Terracotta Ribbon Around Folder -->
      <rect x="244" y="128" width="18" height="86" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4"/>
      <path d="M234 114 L253 128 L272 114" stroke="${C.terracotta}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <!-- Tiny Decorative Cobweb in Corner Showing It's Stored Away -->
      <path d="M336 214 Q336 184 366 184 M336 214 L366 198 M336 214 L350 184" stroke="${C.ink}" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Curved Upward Dashed Placement Arrow From Below -->
    <path d="M256 364 C202 360 188 308 214 274" stroke="${C.ink}" stroke-width="4.5" stroke-dasharray="9 8" stroke-linecap="round" fill="none"/>
    <path d="M198 278 L216 270 L220 290" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    ${sparkle(366, 138, 11, C.ochreLight)}
  `),

  // 14. Renkten renge girmek
  'renkten-renge-girmek': wrapSvg(`
    ${groundShadow(256, 404, 126, 16)}

    <defs>
      <clipPath id="face-bands-clip">
        <circle cx="256" cy="246" r="102"/>
      </clipPath>
    </defs>

    <!-- Flustered Cute Round Face Divided Into Smooth Vertical Gouache Color Bands! -->
    <g>
      <!-- Shirt Collar -->
      <path d="M174 390 C182 342 214 326 256 326 C298 326 330 342 338 390 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Ears -->
      <circle cx="148" cy="252" r="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="364" cy="252" r="22" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Vertical Spectrum Bands Clipped to Face -->
      <g clip-path="url(#face-bands-clip)">
        <rect x="150" y="140" width="54" height="216" fill="${C.cream}"/>
        <rect x="204" y="140" width="52" height="216" fill="${C.ochreLight}"/>
        <rect x="256" y="140" width="52" height="216" fill="${C.terracotta}"/>
        <rect x="308" y="140" width="54" height="216" fill="${C.tealLight}"/>
      </g>
      <!-- Crisp Outer Face Contour & Hair Cap -->
      <circle cx="256" cy="246" r="102" fill="none" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M158 216 C168 142 232 128 282 140 C328 152 350 184 354 216 C324 190 292 184 264 196 C238 186 204 194 158 216 Z" fill="${C.ink}"/>

      <!-- Shy Flustered Eyes & Nervous Wavy Mouth -->
      <circle cx="220" cy="244" r="9" fill="${C.ink}"/>
      <circle cx="292" cy="244" r="9" fill="${C.ink}"/>
      <circle cx="217" cy="241" r="3" fill="${C.cream}"/>
      <circle cx="289" cy="241" r="3" fill="${C.cream}"/>
      <path d="M234 290 Q245 280 256 290 Q267 300 278 290" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>

      <!-- Tiny Cartoon Sweat Drops -->
      <path d="M132 198 C132 198 122 214 122 222 C122 228 126 232 132 232 C138 232 142 228 142 222 C142 214 132 198 132 198 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>
      <path d="M380 198 C380 198 370 214 370 222 C370 228 374 232 380 232 C386 232 390 228 390 222 C390 214 380 198 380 198 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    ${sparkle(256, 108, 12, C.ochreLight)}
  `),

  // 15. Şapka çıkarmak
  'sapka-cikarmak': wrapSvg(`
    ${groundShadow(256, 404, 134, 16)}

    <!-- Dotted Upward Respect Lift Arc & Admiration Stars -->
    ${motionArc('M186 332 Q154 274 176 218', 4.5, '8 8')}
    ${motionArc('M326 332 Q358 274 336 218', 4.5, '8 8')}
    ${sparkle(136, 152, 14, C.ochreLight)}
    ${sparkle(378, 148, 14, C.ochreLight)}
    ${sparkle(256, 102, 13, C.terracotta)}

    <!-- Dashing Classic Deep-Teal Felt Fedora Hat Lifted Respectfully High -->
    <g transform="rotate(-12 256 212)">
      <!-- Wide Curved Fedora Brim -->
      <ellipse cx="256" cy="242" rx="138" ry="30" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Structured Fedora Crown -->
      <path d="M168 238 L186 154 C192 134 224 134 256 144 C288 134 320 134 326 154 L344 238 C306 254 206 254 168 238 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Ochre Ribbon Band -->
      <path d="M172 222 Q256 240 340 222 L344 238 Q256 256 168 238 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Cute Little Terracotta Feather Tucking Out of Ribbon -->
      <path d="M312 222 C332 192 356 184 366 166 C348 168 326 186 312 222 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>

    <!-- Stylized Gracious Hand Holding the Brim Respectfully Underneath -->
    <g>
      <path d="M188 386 L236 336 C244 328 258 336 252 348 L244 364 L278 334 C290 324 302 336 290 348 L254 388 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <rect x="166" y="366" width="54" height="30" rx="8" transform="rotate(-38 193 381)" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5"/>
    </g>
  `),

  // 16. Şaşkına dönmek
  'saskina-donmek': wrapSvg(`
    ${groundShadow(256, 408, 126, 16)}

    <!-- Dizzy Multi-Loop Squiggle & Orbiting Stars Spinning Overhead -->
    <path d="M174 146 Q194 114 218 142 Q242 166 262 134 Q282 108 302 138 Q320 162 340 138" stroke="${C.terracotta}" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M198 118 Q256 96 314 118" stroke="${C.ink}" stroke-width="4" stroke-dasharray="7 7" stroke-linecap="round" fill="none"/>
    ${sparkle(146, 146, 13, C.ochreLight)}
    ${sparkle(366, 146, 13, C.terracotta)}
    ${sparkle(256, 98, 11, C.tealLight)}

    <!-- Bewildered Cartoon Character Bust With Mismatched Brows & Tiny 'o' Mouth -->
    <g>
      <path d="M174 394 C182 344 214 326 256 326 C298 326 330 344 338 394 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <circle cx="164" cy="264" r="20" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="348" cy="264" r="20" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="256" cy="258" r="88" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Tousled Hair -->
      <path d="M170 236 C176 168 234 156 278 168 C322 178 342 210 342 236 C318 206 284 198 256 210 C228 196 194 206 170 236 Z" fill="${C.teal}"/>

      <!-- Mismatched Asymmetrical Raised / Lowered Eyebrows -->
      <path d="M196 206 Q216 188 236 204" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M276 222 Q296 218 314 226" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>

      <!-- One Huge Wide Eye & One Dizzy Spiral-Look Eye -->
      <circle cx="216" cy="248" r="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="218" cy="248" r="6" fill="${C.ink}"/>
      <circle cx="296" cy="252" r="17" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="294" cy="252" r="5" fill="${C.ink}"/>

      <!-- Tiny Surprised 'O' Mouth -->
      <ellipse cx="256" cy="304" rx="12" ry="15" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>
  `),

  // 17. Ucu ucuna yetişmek
  'ucu-ucuna-yetismek': wrapSvg(`
    ${groundShadow(256, 404, 142, 16)}

    <!-- Classic Stopwatch With Ticking Hand Right on the Final Red Wedge! -->
    <g>
      <rect x="174" y="102" width="32" height="22" rx="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="190" cy="194" r="76" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <circle cx="190" cy="194" r="58" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Final Urgent Red/Terracotta Countdown Slice -->
      <path d="M190 194 L164 142 A58 58 0 0 1 190 136 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="3"/>
      <!-- Urgent Needle Hand Just Reaching Top -->
      <line x1="190" y1="194" x2="178" y2="144" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round"/>
      <circle cx="190" cy="194" r="7" fill="${C.ink}"/>
    </g>

    <!-- Finish Line Tape & Zooming Sneaker Tip Breaking the Ribbon by a Hair! -->
    <g>
      <!-- Finish Poles & Snapping Terracotta Ribbon -->
      <line x1="358" y1="224" x2="358" y2="394" stroke="${C.ink}" stroke-width="6.5" stroke-linecap="round"/>
      <circle cx="358" cy="218" r="10" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
      <path d="M278 312 Q326 300 358 312" stroke="${C.terracotta}" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M358 312 Q388 322 404 342" stroke="${C.terracotta}" stroke-width="10" stroke-linecap="round" fill="none"/>

      <!-- Zooming Striped Cartoon Sneaker Barely Crossing the Line -->
      <g transform="rotate(-8 262 340)">
        <path d="M174 352 L322 352 C346 352 352 326 328 318 L272 298 L210 298 L174 352 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
        <rect x="170" y="350" width="168" height="18" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="5"/>
        <path d="M236 318 L266 318 M242 332 L274 332" stroke="${C.cream}" stroke-width="4.5" stroke-linecap="round"/>
      </g>
    </g>

    ${motionArc('M114 330 L152 330 M102 352 L148 352', 4.5)}
    ${sparkle(346, 268, 12, C.ochreLight)}
  `),

  // 18. Uykusu kaçmak
  'uykusu-kacmak': wrapSvg(`
    ${groundShadow(256, 408, 146, 16)}

    <!-- Deep-Teal Night Window With Crescent Moon & Stars Overhead -->
    <g>
      <rect x="116" y="106" width="280" height="134" rx="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Crescent Moon -->
      <path d="M174 134 C154 138 148 164 164 180 C176 192 198 188 206 176 C188 180 172 168 174 134 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="3.8" stroke-linejoin="round"/>
      ${sparkle(344, 142, 11, C.ochreLight)}
      ${sparkle(292, 132, 8, C.cream)}
      <!-- Playful Little Fluffy Cloud/Sheep Jumping Away Across the Window! -->
      <path d="M242 184 C234 172 246 158 260 164 C270 156 288 162 288 176 C298 180 294 196 280 196 L248 196 C238 196 238 186 242 184 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.8"/>
      <circle cx="294" cy="174" r="8" fill="${C.tan}" stroke="${C.ink}" stroke-width="3"/>
      ${motionArc('M220 210 Q268 186 318 210', 3, '6 6')}
    </g>

    <!-- Cozy Bed & Wide-Awake Wide-Eyed Character Staring Straight Ahead! -->
    <g>
      <!-- Bed Headboard & Fluffy Pillow -->
      <rect x="116" y="256" width="280" height="138" rx="18" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
      <rect x="164" y="268" width="184" height="62" rx="22" fill="${C.cream}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Wide-Awake Round Head on Pillow -->
      <circle cx="256" cy="296" r="52" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M206 282 C214 240 264 234 294 252 C308 260 308 276 306 284 C284 264 260 262 242 272 C226 264 214 272 206 282 Z" fill="${C.ink}"/>
      <!-- Giant Wide-Open Awake Eyes -->
      <circle cx="236" cy="294" r="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="276" cy="294" r="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="236" cy="294" r="5" fill="${C.ink}"/>
      <circle cx="276" cy="294" r="5" fill="${C.ink}"/>
      <!-- Flat sleepless mouth -->
      <line x1="244" y1="324" x2="268" y2="324" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>

      <!-- Terracotta & Sage Blanket Pulled Up to Chin -->
      <path d="M116 336 L396 336 L396 380 C396 390 388 396 378 396 L134 396 C124 396 116 390 116 380 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <line x1="116" y1="362" x2="396" y2="362" stroke="${C.ochre}" stroke-width="8"/>
    </g>
  `),

  // 19. Üstüne soğuk su içmek
  'ustune-soguk-su-icmek': wrapSvg(`
    ${groundShadow(256, 408, 118, 16)}

    <!-- Striped Bendy Terracotta Straw -->
    <path d="M272 204 L306 106 L354 114" stroke="${C.ink}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M272 204 L306 106 L354 114" stroke="${C.terracotta}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M282 174 L290 152 M300 122 L308 106" stroke="${C.cream}" stroke-width="8" stroke-linecap="round"/>

    <!-- Tall Crisp Frosty Glass of Cold Water With Ice Cubes -->
    <g>
      <path d="M174 166 L338 166 L318 390 C316 398 308 402 298 402 L214 402 C204 402 196 398 194 390 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Refreshing Cold Teal Water Fill -->
      <path d="M182 222 Q256 236 330 222 L316 386 L196 386 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Floating Crisp Ice Cubes -->
      <rect x="206" y="196" width="44" height="44" rx="8" transform="rotate(-14 228 218)" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <rect x="262" y="204" width="42" height="42" rx="8" transform="rotate(18 283 225)" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <rect x="228" y="274" width="40" height="40" rx="8" transform="rotate(8 248 294)" fill="${C.cream}" fill-opacity="0.72" stroke="${C.ink}" stroke-width="4"/>

      <!-- Refreshing Condensation Droplets Outside Glass -->
      <circle cx="164" cy="272" r="7" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="168" cy="316" r="5" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="344" cy="288" r="7" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    ${sparkle(134, 186, 12, C.tealLight)}
    ${sparkle(378, 212, 12, C.ochreLight)}
  `),

  // 20. Üstüne tuz biber ekmek
  'ustune-tuz-biber-ekmek': wrapSvg(`
    ${groundShadow(256, 404, 134, 16)}

    <!-- Dramatic Terracotta Spark / Sting Cloud Below Shakers -->
    <path d="M174 344 C156 322 184 294 212 308 C228 286 284 286 300 308 C328 294 356 322 338 344 C352 368 320 390 294 380 C272 394 240 394 218 380 C192 390 160 368 174 344 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

    <!-- Falling Salt Crystals & Pepper Dots -->
    <g>
      <rect x="198" y="246" width="9" height="9" transform="rotate(20 202 250)" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>
      <rect x="218" y="272" width="9" height="9" transform="rotate(-15 222 276)" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>
      <rect x="184" y="282" width="8" height="8" transform="rotate(30 188 286)" fill="${C.cream}" stroke="${C.ink}" stroke-width="2.5"/>
      <circle cx="294" cy="248" r="5" fill="${C.ink}"/>
      <circle cx="312" cy="274" r="5.5" fill="${C.ink}"/>
      <circle cx="284" cy="276" r="4.5" fill="${C.ink}"/>
      <circle cx="326" cy="290" r="5" fill="${C.ink}"/>
    </g>

    <!-- Tilted Cream Salt Shaker (Left) -->
    <g transform="rotate(132 174 176)">
      <path d="M142 152 L206 152 L214 236 C214 246 206 252 194 252 L154 252 C142 252 134 246 134 236 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M142 152 C142 126 206 126 206 152 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="164" cy="140" r="3" fill="${C.ink}"/>
      <circle cx="174" cy="138" r="3" fill="${C.ink}"/>
      <circle cx="184" cy="140" r="3" fill="${C.ink}"/>
    </g>

    <!-- Tilted Deep-Teal Pepper Shaker (Right) -->
    <g transform="rotate(-132 338 176)">
      <path d="M306 152 L370 152 L378 236 C378 246 370 252 358 252 L318 252 C306 252 298 246 298 236 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M306 152 C306 126 370 126 370 152 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="328" cy="140" r="3" fill="${C.ink}"/>
      <circle cx="338" cy="138" r="3" fill="${C.ink}"/>
      <circle cx="348" cy="140" r="3" fill="${C.ink}"/>
    </g>

    ${sparkle(256, 134, 11, C.ochreLight)}
    ${sparkle(136, 336, 10, C.ochre)}
    ${sparkle(376, 336, 10, C.ochre)}
  `),

  // 21. Vakit öldürmek
  'vakit-oldurmek': wrapSvg(`
    ${groundShadow(256, 404, 146, 16)}

    <!-- Paper Airplane Drifting Idly Above -->
    <g transform="rotate(-12 162 128)">
      <polygon points="122,136 204,114 172,152" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <polygon points="154,142 204,114 148,130" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>
    ${motionArc('M96 164 Q122 154 144 162', 3.5, '6 6')}

    <!-- Hammock Ropes Tied at Left & Right Posts -->
    <path d="M96 206 L96 392 M416 206 L416 392" stroke="${C.tanDark}" stroke-width="10" stroke-linecap="round"/>
    <path d="M96 206 L96 392 M416 206 L416 392" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M98 228 Q256 356 414 228" stroke="${C.ink}" stroke-width="5" fill="none"/>

    <!-- Sleepy Cartoon Analog Clock Lounging Lazily Inside Terracotta Hammock! -->
    <g>
      <!-- Clock Body -->
      <circle cx="256" cy="242" r="76" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5"/>
      <circle cx="256" cy="242" r="58" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Sleepy Half-Closed Droopy Eyes & Relaxed Smile -->
      <path d="M222 232 Q232 242 242 232 M270 232 Q280 242 290 232" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M244 264 Q256 274 268 264" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Laid-back relaxed clock hands -->
      <path d="M256 202 L256 242 L288 254" stroke="${C.teal}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="256" cy="242" r="5" fill="${C.ink}"/>
    </g>

    <!-- Curved Terracotta Hammock Cradle Underneath Clock -->
    <path d="M100 232 C148 338 364 338 412 232 C354 310 158 310 100 232 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M128 266 Q256 322 384 266" stroke="${C.ochreLight}" stroke-width="5" stroke-linecap="round" fill="none"/>

    ${sparkle(362, 146, 11, C.ochreLight)}
  `),

  // 22. Varını yoğunu ortaya koymak
  'varini-yogunu-ortaya-koymak': wrapSvg(`
    ${groundShadow(256, 404, 152, 16)}

    <!-- Clean Tabletop Line -->
    <line x1="94" y1="364" x2="418" y2="364" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round"/>

    <!-- Generous Turned-Out Open Leather Pouch on Left Spilling Everything Openly -->
    <g transform="rotate(-14 176 238)">
      <path d="M126 206 C106 168 134 128 176 132 C218 128 246 168 226 206 L246 274 L116 274 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <ellipse cx="181" cy="274" rx="64" ry="18" fill="${C.ink}"/>
      <!-- Drawstring cord -->
      <path d="M132 198 Q181 212 230 198" stroke="${C.ochre}" stroke-width="6" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Abundant Treasures Laid Out Openly on the Tabletop: Heart, Book, Star, Coins -->
    <!-- Radiant Terracotta Heart -->
    <path d="M236 356 C236 356 196 330 196 306 C196 292 208 284 220 288 C228 292 234 298 236 304 C238 298 244 292 252 288 C264 284 276 292 276 306 C276 330 236 356 236 356 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>

    <!-- Stack of Gold Coins -->
    <g fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4">
      <ellipse cx="152" cy="354" rx="28" ry="10"/>
      <ellipse cx="152" cy="340" rx="28" ry="10"/>
      <ellipse cx="192" cy="356" rx="24" ry="9" fill="${C.ochre}"/>
    </g>

    <!-- Teal Notebook & Gleaming Star -->
    <rect x="292" y="302" width="76" height="58" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="5"/>
    <line x1="306" y1="316" x2="354" y2="316" stroke="${C.cream}" stroke-width="4" stroke-linecap="round"/>
    <path d="M366 232 L374 256 L400 258 L380 274 L386 298 L366 284 L346 298 L352 274 L332 258 L358 256 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

    ${sparkle(292, 176, 12, C.ochreLight)}
    ${sparkle(386, 186, 11, C.terracotta)}
  `),

  // 23. Zil takıp oynamak
  'zil-takip-oynamak': wrapSvg(`
    ${groundShadow(256, 408, 134, 16)}

    <!-- Joyful Floating Musical Notes & Festive Confetti -->
    <g fill="${C.ink}" stroke="${C.ink}" stroke-width="2.5">
      <circle cx="132" cy="186" r="7"/>
      <path d="M138 186 L138 152 L158 158" fill="none" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="378" cy="184" r="7"/>
      <path d="M384 184 L384 148 L404 154" fill="none" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    ${sparkle(256, 122, 14, C.ochreLight)}
    ${sparkle(122, 248, 10, C.terracotta)}
    ${sparkle(392, 246, 10, C.tealLight)}

    <!-- Left Dancing Hand Wearing Shiny Brass Finger Cymbals (Zils) -->
    <g transform="rotate(-14 186 292)">
      <path d="M142 384 L158 296 L202 302 L188 390 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M158 296 C142 272 134 242 146 234 C156 228 164 252 168 272 L176 218 C178 206 194 206 194 220 L192 268 L206 226 C210 214 224 220 220 234 L204 300 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Shiny Ochre Finger Cymbals (Zils) on Thumb & Middle Finger -->
      <ellipse cx="144" cy="232" rx="18" ry="8" transform="rotate(-24 144 232)" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
      <ellipse cx="186" cy="212" rx="18" ry="8" transform="rotate(14 186 212)" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
    </g>

    <!-- Right Dancing Hand Wearing Shiny Brass Finger Cymbals (Zils) -->
    <g transform="rotate(14 326 292)">
      <path d="M370 384 L354 296 L310 302 L324 390 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M354 296 C370 272 378 242 366 234 C356 228 348 252 344 272 L336 218 C334 206 318 206 318 220 L320 268 L306 226 C302 214 288 220 292 234 L308 300 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Shiny Ochre Finger Cymbals -->
      <ellipse cx="368" cy="232" rx="18" ry="8" transform="rotate(24 368 232)" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
      <ellipse cx="326" cy="212" rx="18" ry="8" transform="rotate(-14 326 212)" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
    </g>

    <!-- Clink Chime Vibration Arcs Around Zils -->
    ${motionArc('M114 198 Q138 182 162 196', 3.8)}
    ${motionArc('M350 196 Q374 182 398 198', 3.8)}
  `),

  // 24. Zurnanın zırt dediği yer
  'zurnanin-zirt-dedigi-yer': wrapSvg(`
    ${groundShadow(256, 404, 146, 16)}

    <!-- Classic Wooden Anatolian Zurna Horn Pointing Rightward -->
    <g transform="rotate(-14 196 258)">
      <!-- Mouthpiece & Reed -->
      <rect x="92" y="246" width="26" height="16" rx="4" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Tapered Wooden Body & Flared Bell -->
      <path d="M118 248 L244 236 L278 208 L278 300 L244 272 L118 260 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Finger Holes Along Body -->
      <circle cx="152" cy="254" r="4.5" fill="${C.ink}"/>
      <circle cx="174" cy="254" r="4.5" fill="${C.ink}"/>
      <circle cx="196" cy="254" r="4.5" fill="${C.ink}"/>
      <circle cx="218" cy="254" r="4.5" fill="${C.ink}"/>
      <!-- Decorative Brass Bell Rim -->
      <ellipse cx="278" cy="254" rx="12" ry="46" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5"/>
    </g>

    <!-- Huge Dramatic Terracotta & Ochre Comic Blast Starburst ("ZIRT!") -->
    <g>
      <polygon points="336,154 358,202 414,174 388,224 434,244 388,268 416,318 358,292 342,344 318,294 272,310 296,256 266,214 316,212" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <polygon points="342,188 356,222 390,206 374,238 404,252 374,268 392,296 356,280 344,312 328,278 298,288 314,252 296,226 328,226" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <!-- Crisp inner zigzag acoustic spike -->
      <path d="M318 248 L342 236 L338 260 L368 248" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>

    ${sparkle(294, 146, 12, C.ochreLight)}
    ${sparkle(414, 138, 10, C.terracotta)}
    ${sparkle(418, 354, 11, C.tealLight)}
  `),
};

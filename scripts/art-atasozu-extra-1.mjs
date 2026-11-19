import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const ATASOZU_EXTRA_SVGS_1 = {
  // 1. Cahile söz anlatmak deveye hendek atlatmaktan zordur.
  'cahile-soz-anlatmak-deveye-hendek-atlatmaktan-zordur': wrapSvg(`
    ${groundShadow(196, 396, 114, 15)}

    <!-- Shallow earthy ditch on the right -->
    <path d="M292 372 L316 398 L398 398 L422 372" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round" fill="${C.tanDark}"/>
    <path d="M90 372 L292 372 M422 372 L434 372" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>

    <!-- Dotted jump arrow pointing hopefully over the ditch -->
    <path d="M266 254 C308 192 376 196 394 276" stroke="${C.terracotta}" stroke-width="4.5" stroke-dasharray="9 8" stroke-linecap="round" fill="none"/>
    <path d="M380 264 L394 282 L408 262" stroke="${C.terracotta}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Cute stubborn camel lounging calmly with folded legs on the left -->
    <g>
      <!-- Tail -->
      <path d="M122 316 Q98 326 102 350" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Cozy folded legs resting firmly on the ground -->
      <rect x="132" y="346" width="122" height="26" rx="13" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Camel body & single plump hump -->
      <path d="M118 328 C114 278 148 258 176 226 C192 206 222 208 232 238 C242 268 266 276 266 318 C266 350 236 358 190 358 C144 358 122 348 118 328 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Cute patterned saddle blanket -->
      <path d="M168 242 C188 214 218 216 228 244 L232 288 L164 288 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M166 268 L230 268" stroke="${C.terracotta}" stroke-width="6"/>
      <!-- Neck curving up calmly to stubborn face -->
      <path d="M242 322 C264 320 278 286 274 236 C272 208 266 190 286 184 C308 178 322 192 318 210 C314 226 296 224 294 238 C292 288 284 342 246 346" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Small camel ear -->
      <ellipse cx="274" cy="182" rx="8" ry="12" transform="rotate(-20 274 182)" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4"/>
      <!-- Sleepy half-closed stubborn eye & calm smile -->
      <path d="M286 196 Q296 202 304 196" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M298 214 Q308 216 314 210" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    </g>

    ${sparkle(346, 178, 11, C.ochreLight)}
  `),

  // 2. Can boğazdan gelir.
  'can-bogazdan-gelir': wrapSvg(`
    ${groundShadow(256, 404, 126, 16)}

    <!-- Warm Terracotta Heart Formed by Gentle Steam Swirls Above Bowl -->
    <path d="M256 176 C256 176 206 144 206 112 C206 94 222 84 238 90 C248 94 254 102 256 108 C258 102 264 94 274 90 C290 84 306 94 306 112 C306 144 256 176 256 176 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    ${motionArc('M218 214 Q204 190 220 168', 4)}
    ${motionArc('M294 214 Q308 190 292 168', 4)}
    ${sparkle(178, 128, 10, C.ochreLight)}
    ${sparkle(334, 128, 10, C.ochreLight)}

    <!-- Angled Wooden Soup Spoon -->
    <g transform="rotate(28 312 248)">
      <rect x="304" y="148" width="18" height="126" rx="9" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
    </g>

    <!-- Warm Ceramic Teal & Cream Soup Bowl -->
    <g>
      <!-- Savory Soup Surface -->
      <ellipse cx="256" cy="264" rx="124" ry="26" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Subtle savory broth garnish dots -->
      <circle cx="212" cy="264" r="8" fill="${C.sage}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="246" cy="272" r="6" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="282" cy="262" r="7" fill="${C.cream}" stroke="${C.ink}" stroke-width="3"/>
      <!-- Bowl Body -->
      <path d="M132 264 C134 348 184 388 256 388 C328 388 378 348 380 264 C346 286 166 286 132 264 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Decorative Cream Stripe Band -->
      <path d="M144 312 Q256 334 368 312" stroke="${C.cream}" stroke-width="7" stroke-linecap="round" fill="none"/>
      <!-- Sturdy Foot Rim -->
      <path d="M204 382 L308 382 L316 398 L196 398 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    </g>
  `),

  // 3. Fare çıktığı deliği bilir.
  'fare-ciktigi-deligi-bilir': wrapSvg(`
    ${groundShadow(256, 396, 136, 16)}

    <!-- Cozy Cream & Tan Wall Baseboard -->
    <rect x="96" y="138" width="320" height="248" rx="18" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
    <rect x="96" y="336" width="320" height="50" rx="8" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>

    <!-- Arched Dark Mousehole -->
    <path d="M174 386 L174 264 C174 206 338 206 338 264 L338 386 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

    <!-- Clever Little Mouse Peeking Slyly Out of Mousehole -->
    <g>
      <!-- Curly tail peeking inside -->
      <path d="M214 358 Q186 352 192 324" stroke="${C.terracotta}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Big Round Mouse Ears -->
      <circle cx="212" cy="242" r="28" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="212" cy="242" r="14" fill="${C.terracotta}"/>
      <circle cx="292" cy="242" r="28" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="292" cy="242" r="14" fill="${C.terracotta}"/>
      <!-- Mouse Body & Head -->
      <path d="M198 386 C198 318 222 254 252 254 C282 254 306 318 306 386 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Alert sly eyes -->
      <circle cx="236" cy="296" r="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="268" cy="296" r="8" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="238" cy="296" r="4" fill="${C.ink}"/>
      <circle cx="270" cy="296" r="4" fill="${C.ink}"/>
      <!-- Pink nose & whiskers -->
      <circle cx="252" cy="316" r="7" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="3.5"/>
      <path d="M206 312 L234 316 M206 326 L234 322 M298 312 L270 316 M298 326 L270 322" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>

      <!-- Ochre Wedge of Swiss Cheese Clutched in Paws -->
      <g>
        <path d="M242 350 L314 334 L314 382 L242 382 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
        <circle cx="268" cy="364" r="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="2.5"/>
        <circle cx="294" cy="356" r="8" fill="${C.ochre}" stroke="${C.ink}" stroke-width="2.5"/>
        <!-- Little paws holding cheese -->
        <circle cx="238" cy="360" r="10" fill="${C.tan}" stroke="${C.ink}" stroke-width="4"/>
        <circle cx="308" cy="364" r="10" fill="${C.tan}" stroke="${C.ink}" stroke-width="4"/>
      </g>
    </g>

    ${sparkle(146, 186, 10, C.ochreLight)}
    ${sparkle(364, 186, 11, C.terracotta)}
  `),

  // 4. Fazla mal göz çıkarmaz.
  'fazla-mal-goz-cikarmaz': wrapSvg(`
    ${groundShadow(256, 408, 146, 16)}

    <!-- Abundant Stack of Cozy Goodies Brimming Above Wooden Chest -->
    <!-- Stacked Books on Left -->
    <g>
      <rect x="136" y="198" width="96" height="24" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5"/>
      <rect x="146" y="174" width="84" height="24" rx="6" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5"/>
      <rect x="156" y="150" width="72" height="24" rx="6" fill="${C.sage}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    <!-- Folded Blankets & Ceramic Pitcher on Right -->
    <g>
      <path d="M276 232 C264 210 278 176 304 176 C324 176 334 196 326 232 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M326 190 C342 190 342 214 326 214" stroke="${C.ink}" stroke-width="4.5" fill="none"/>
      <!-- Extra Coins & Gems Peeking Out -->
      <circle cx="256" cy="212" r="16" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="236" cy="228" r="16" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="352" cy="218" r="15" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    <!-- Sturdy Overflowing Wooden Treasure Chest -->
    <g>
      <rect x="116" y="230" width="280" height="164" rx="14" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Brass corner & strap bands -->
      <rect x="156" y="230" width="24" height="164" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <rect x="332" y="230" width="24" height="164" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Chest Lid Rim -->
      <rect x="108" y="222" width="296" height="32" rx="10" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Center Brass Lock Plate -->
      <rect x="234" y="236" width="44" height="50" rx="10" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="256" cy="256" r="6" fill="${C.ink}"/>
      <path d="M256 262 L256 274" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
    </g>

    ${sparkle(136, 122, 11, C.ochreLight)}
    ${sparkle(294, 132, 13, C.ochre)}
    ${sparkle(386, 174, 11, C.terracotta)}
  `),

  // 5. Irmak kenarına çeşme yapılmaz.
  'irmak-kenarina-cesme-yapilmaz': wrapSvg(`
    ${groundShadow(256, 404, 152, 18)}

    <!-- Lush Sage Riverbank Meadow & Distant Sun -->
    <circle cx="358" cy="142" r="28" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>
    <path d="M84 316 Q216 286 428 314 L428 386 L84 386 Z" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>

    <!-- Wide Abundant Deep-Teal Flowing River Across Foreground -->
    <path d="M84 338 Q174 312 264 338 T428 334 L428 396 L84 396 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M114 358 Q174 344 234 358 M274 366 Q336 352 396 364 M144 378 Q210 368 264 378" stroke="${C.cream}" stroke-width="4" stroke-linecap="round" fill="none"/>

    <!-- Tiny Lonely Stone Fountain Tap Beside the Huge River -->
    <g>
      <path d="M138 326 L138 228 C138 200 162 184 188 184 C214 184 238 200 238 228 L238 326 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Decorative stone arch & basin -->
      <path d="M156 326 L156 238 C156 218 220 218 220 238 L220 326 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
      <rect x="130" y="308" width="116" height="22" rx="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Tiny brass faucet dripping one lonely minuscule drop -->
      <path d="M182 252 L208 252 C214 252 216 258 216 264 L204 264" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M210 276 C210 276 202 288 202 294 C202 298 206 302 210 302 C214 302 218 298 218 294 C218 288 210 276 210 276 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    ${sparkle(282, 224, 10, C.ochreLight)}
  `),

  // 6. Islanmışın yağmurdan korkusu olmaz.
  'islanmisin-yagmurdan-korkusu-olmaz': wrapSvg(`
    ${groundShadow(256, 404, 128, 16)}

    <!-- Lively Pouring Deep-Teal Raincloud -->
    <g>
      <path d="M168 158 C142 158 134 128 156 116 C162 90 198 82 222 100 C244 78 292 86 302 116 C332 114 346 148 320 158 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Falling Raindrops -->
      <g fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.2">
        <path d="M174 176 L166 196"/>
        <path d="M216 178 L208 198"/>
        <path d="M262 176 L254 196"/>
        <path d="M302 178 L294 198"/>
        <path d="M150 220 L142 240"/>
        <path d="M342 216 L334 236"/>
      </g>
    </g>

    <!-- Water Puddle Ripples Underneath -->
    <ellipse cx="256" cy="390" rx="118" ry="16" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Calm Smiling Soaked Cartoon Character Holding a CLOSED Folded Umbrella! -->
    <g>
      <!-- Raincoat Torso -->
      <path d="M196 384 C198 322 222 296 256 296 C290 296 314 322 316 384 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Closed Folded Umbrella Held Relaxed at Side -->
      <path d="M326 244 L344 374 L318 372 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M324 244 L322 218 C322 206 338 206 338 218" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M312 326 L334 322" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>

      <!-- Cheerful Round Head with Wet Drizzle Hair & Water Drops -->
      <circle cx="256" cy="242" r="56" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M202 230 C208 184 268 176 298 198 C312 208 312 224 310 232 C288 212 260 206 238 218 C222 212 210 220 202 230 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Calm Happy Closed-Eye Smile -->
      <path d="M226 240 Q236 232 246 240 M266 240 Q276 232 286 240" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M240 264 Q256 278 272 264" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <!-- Little water drop splashing off cheek -->
      <circle cx="298" cy="252" r="5" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="2.5"/>
    </g>
  `),

  // 7. Lafla peynir gemisi yürümez.
  'lafla-peynir-gemisi-yurumez': wrapSvg(`
    ${groundShadow(256, 396, 146, 16)}

    <!-- Empty Wind-Talk Speech Bubble Puff at Left Blowing Against Limp Sail -->
    <g>
      <path d="M98 172 C98 144 136 132 162 146 C178 154 178 184 156 192 L170 212 L138 196 C112 198 98 186 98 172 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Decorative talk squiggles (strictly NO letters) -->
      <path d="M118 164 Q134 156 150 164 M120 178 Q134 172 146 178" stroke="${C.terracotta}" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${motionArc('M186 180 Q204 170 218 182', 3.5, '6 6')}
    </g>

    <!-- Whimsical Sailboat Made Out of a Giant Wedge of Swiss Cheese -->
    <g>
      <!-- Mast -->
      <line x1="274" y1="114" x2="274" y2="306" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/>
      <!-- Limp Drooping Cream Sail Going Nowhere -->
      <path d="M276 126 C318 142 332 206 312 264 L276 264 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Tiny Pennant Flag Hanging Limp -->
      <path d="M274 114 L244 128 L274 138 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>

      <!-- Giant Wedge of Swiss Cheese Forming the Boat Hull! -->
      <path d="M148 304 L388 268 L368 352 L176 352 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M148 304 L232 252 L388 268 L148 304 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Classic Swiss Cheese Holes -->
      <circle cx="222" cy="322" r="14" fill="${C.terracottaDark}" fill-opacity="0.35" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="288" cy="312" r="18" fill="${C.terracottaDark}" fill-opacity="0.35" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="338" cy="326" r="10" fill="${C.terracottaDark}" fill-opacity="0.35" stroke="${C.ink}" stroke-width="3.5"/>
      <ellipse cx="264" cy="276" rx="14" ry="6" fill="${C.terracottaDark}" fill-opacity="0.28" stroke="${C.ink}" stroke-width="3"/>
    </g>

    <!-- Completely Still Flat Water Line Underneath -->
    <path d="M104 352 Q180 356 256 352 T408 352" stroke="${C.teal}" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M132 372 Q256 376 380 372" stroke="${C.tealLight}" stroke-width="5" stroke-linecap="round" fill="none"/>
  `),

  // 8. Leyleğin ömrü laklakla geçer.
  'leylegin-omru-laklakla-gecer': wrapSvg(`
    ${groundShadow(256, 412, 118, 14)}

    <!-- Rooftop Brick Chimney & Cozy Twig Nest -->
    <g>
      <rect x="196" y="348" width="120" height="58" rx="6" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M196 376 L316 376 M236 348 L236 376 M276 376 L276 406" stroke="${C.ink}" stroke-width="3.5"/>
      <!-- Woven Twig Nest -->
      <path d="M158 318 L354 318 C346 352 310 364 256 364 C202 364 166 352 158 318 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M174 334 Q256 348 338 334 M192 348 Q256 358 320 348" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Comical White-and-Ink Cartoon Stork Standing in Nest Clacking Beak Wide Open! -->
    <g>
      <!-- Slender Red Stork Legs -->
      <path d="M236 276 L236 318 M272 276 L272 318" stroke="${C.terracotta}" stroke-width="7" stroke-linecap="round"/>
      <path d="M236 276 L236 318 M272 276 L272 318" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
      <!-- Plump White Body & Dark Teal-Black Wing Feathers -->
      <ellipse cx="246" cy="242" rx="52" ry="38" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M194 236 C210 218 242 224 252 246 L196 266 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Graceful Curved Neck & Head -->
      <path d="M276 232 C294 214 294 176 286 150 C282 132 298 118 314 126 C328 134 328 156 314 166 C310 198 308 232 288 254" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <circle cx="304" cy="142" r="4.5" fill="${C.ink}"/>

      <!-- Wide Open Clacking Long Terracotta Beak! -->
      <path d="M320 138 L404 114 L322 152 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M322 152 L402 184 L318 162 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
    </g>

    <!-- Comic Clacking Chatter Sound Lines & Bubbles -->
    ${motionArc('M388 134 Q404 148 388 164', 4)}
    ${motionArc('M408 124 Q428 148 408 174', 4)}
    ${sparkle(360, 96, 10, C.ochreLight)}
    ${sparkle(162, 198, 10, C.tealLight)}
  `),

  // 9. Olacakla öleceğe çare bulunmaz.
  'olacakla-olecege-care-bulunmaz': wrapSvg(`
    ${groundShadow(256, 408, 128, 16)}

    <!-- Classic Framed Brass Hourglass -->
    <g>
      <!-- Top & Bottom Wooden/Brass Plates -->
      <rect x="164" y="106" width="184" height="22" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <rect x="164" y="382" width="184" height="22" rx="8" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Side Support Pillars -->
      <line x1="184" y1="128" x2="184" y2="382" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>
      <line x1="328" y1="128" x2="328" y2="382" stroke="${C.ink}" stroke-width="7" stroke-linecap="round"/>

      <!-- Glass Bulbs -->
      <path d="M198 128 L314 128 C314 196 276 236 262 254 C276 272 314 312 314 382 L198 382 C198 312 236 272 250 254 C236 236 198 196 198 128 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

      <!-- Top Remaining Golden Sand -->
      <path d="M214 186 Q256 198 298 186 C288 214 268 238 256 250 C244 238 224 214 214 186 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Steady Trickling Sand Stream -->
      <line x1="256" y1="254" x2="256" y2="334" stroke="${C.ochre}" stroke-width="4.5" stroke-dasharray="6 4"/>
      <!-- Bottom Sand Mound -->
      <path d="M204 380 C212 332 238 316 256 316 C274 316 300 332 308 380 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>

    <!-- Calm Minimalist Clock Dial Floating Beside Hourglass -->
    <g>
      <circle cx="364" cy="184" r="38" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="364" cy="184" r="28" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <path d="M364 166 L364 184 L378 192" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    ${sparkle(136, 168, 11, C.ochreLight)}
  `),

  // 10. Otu çek, köküne bak.
  'otu-cek-kokune-bak': wrapSvg(`
    ${groundShadow(256, 404, 134, 16)}

    <!-- Earth Cross-Section Soil Layer -->
    <path d="M108 268 L404 268 L404 388 C404 396 398 400 390 400 L122 400 C114 400 108 396 108 388 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <!-- Grass Horizon Edge With Neat Uprooted Cavity -->
    <path d="M104 268 L216 268 C228 286 284 286 296 268 L408 268" stroke="${C.sage}" stroke-width="14" stroke-linecap="round" fill="none"/>
    <path d="M104 268 L216 268 C228 286 284 286 296 268 L408 268" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>

    <!-- Lifted Vibrant Herb & Its Exposed Spreading Root Network! -->
    <g transform="translate(0, -18)">
      <!-- Lush Herb Foliage Above -->
      <path d="M256 218 C224 182 204 142 224 120 C242 136 250 164 256 188 C262 164 270 136 288 120 C308 142 288 182 256 218 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M256 218 C210 202 184 176 192 152 C214 158 238 186 256 218 Z" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M256 218 C302 202 328 176 320 152 C298 158 274 186 256 218 Z" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- Main Taproot & Intricate Spreading Golden Roots Clearly Visible! -->
      <path d="M248 216 L264 216 L258 318 C258 334 254 334 254 318 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M254 246 Q216 264 202 308 M258 264 Q298 282 314 322 M254 286 Q226 312 224 342 M258 296 Q284 324 282 346" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M254 246 Q216 264 202 308 M258 264 Q298 282 314 322 M254 286 Q226 312 224 342 M258 296 Q284 324 282 346" stroke="${C.ochreLight}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Upward Lift Arrows & Magnifying Accent -->
    ${motionArc('M176 210 L176 168 M164 180 L176 164 L188 180', 4)}
    ${sparkle(348, 174, 11, C.ochreLight)}
  `),

  // 11. Öfke ile kalkan zararla oturur.
  'ofke-ile-kalkan-zararla-oturur': wrapSvg(`
    ${groundShadow(256, 404, 142, 16)}

    <!-- Tipped-Over Wooden Chair Tumbling Sideways -->
    <g transform="rotate(-52 212 312)">
      <!-- Chair Backrest & Posts -->
      <rect x="166" y="176" width="18" height="196" rx="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
      <rect x="166" y="186" width="84" height="22" rx="6" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
      <rect x="166" y="222" width="84" height="18" rx="6" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Chair Seat -->
      <rect x="160" y="276" width="106" height="20" rx="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Front Leg -->
      <rect x="242" y="296" width="18" height="76" rx="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
    </g>

    <!-- Knocked-Over Terracotta Teapot & Spilled Tea Puddle -->
    <g transform="rotate(72 338 338)">
      <ellipse cx="338" cy="342" rx="42" ry="36" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Teapot spout -->
      <path d="M332 308 L314 282 L332 284 L348 308 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Teapot handle & lid -->
      <path d="M296 336 C276 328 276 356 296 350" stroke="${C.ink}" stroke-width="5" fill="none"/>
      <ellipse cx="378" cy="342" rx="10" ry="18" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4"/>
    </g>
    <ellipse cx="378" cy="390" rx="46" ry="11" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4"/>

    <!-- Angry Stormy Red/Terracotta Lightning & Steam Swirl Overhead -->
    <path d="M204 148 C192 126 218 106 238 118 C252 96 292 98 298 126 C322 128 328 156 306 164 L216 164 C196 164 196 150 204 148 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M262 164 L248 192 L266 192 L250 222" stroke="${C.ochreLight}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M262 164 L248 192 L266 192 L250 222" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  `),

  // 12. Önce iğneyi kendine batır, sonra çuvaldızı başkasına.
  'once-igneyi-kendine-batir-sonra-cuvaldizi-baskasina': wrapSvg(`
    ${groundShadow(164, 396, 56, 12)}
    ${groundShadow(324, 396, 86, 14)}

    <!-- Left: Delicate Tiny Silver Sewing Needle -->
    <g>
      <path d="M158 228 C158 214 174 214 174 228 L170 362 L166 384 L162 362 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <ellipse cx="166" cy="236" rx="3" ry="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>
      <!-- Delicate fine thread -->
      <path d="M166 236 C132 222 114 252 134 274 C150 292 124 316 108 302" stroke="${C.teal}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Gentle Comparison Arrow -->
    <path d="M204 282 L248 282 M234 268 L250 282 L234 296" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Right: Massive Chunky Curved Packing Needle (Çuvaldız) with Thick Twine -->
    <g>
      <path d="M312 108 C312 84 352 84 352 108 L346 292 C346 332 328 362 296 384 C308 344 314 316 314 284 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Big Heavy Eye -->
      <ellipse cx="332" cy="122" rx="8" ry="18" fill="${C.paper}" stroke="${C.ink}" stroke-width="4"/>
      <!-- Thick Rustic Terracotta Rope -->
      <path d="M334 118 C382 100 418 142 390 186 C366 224 412 248 400 288" stroke="${C.terracotta}" stroke-width="9" stroke-linecap="round" fill="none"/>
      <path d="M334 118 C382 100 418 142 390 186 C366 224 412 248 400 288" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round" fill="none"/>
    </g>

    ${sparkle(166, 178, 10, C.tealLight)}
    ${sparkle(268, 142, 12, C.ochre)}
  `),
};

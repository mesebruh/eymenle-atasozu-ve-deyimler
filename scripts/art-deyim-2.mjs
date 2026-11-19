import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const DEYIM_SVGS_2 = {
  // 11. Havanda su dövmek
  'havanda-su-dovmek': wrapSvg(`
    ${groundShadow(256, 404, 128, 16)}

    <!-- Flying Teal Water Droplets & Splash Arcs -->
    <g fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round">
      <path d="M160 202 C160 202 146 224 146 234 C146 242 152 248 160 248 C168 248 174 242 174 234 C174 224 160 202 160 202 Z"/>
      <path d="M352 192 C352 192 338 214 338 224 C338 232 344 238 352 238 C360 238 366 232 366 224 C366 214 352 192 352 192 Z"/>
      <circle cx="132" cy="256" r="8"/>
      <circle cx="384" cy="248" r="9"/>
      <circle cx="194" cy="166" r="7"/>
      <circle cx="322" cy="158" r="6"/>
    </g>

    <!-- Angled Wooden Pestle Pounding Downward -->
    <g transform="rotate(24 276 196)">
      <path d="M254 96 C254 78 288 78 288 96 L282 262 C282 276 260 276 260 262 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M255 102 Q271 108 287 102" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    </g>
    ${motionArc('M318 110 L338 134', 4)}
    ${motionArc('M210 120 L202 146', 4)}

    <!-- Dynamic Splash Crown Inside Mortar Rim -->
    <path d="M168 272 C176 238 198 244 210 266 C224 232 246 234 256 262 C270 230 294 236 306 264 C318 242 338 242 344 272 Z" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

    <!-- Chunky Warm-Tan Mortar Bowl -->
    <g>
      <path d="M148 268 L364 268 C362 342 324 388 256 388 C188 388 150 342 148 268 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Bowl Rim -->
      <rect x="136" y="252" width="240" height="28" rx="14" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Sturdy Base -->
      <path d="M196 384 L316 384 L324 400 L188 400 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    </g>
  `),

  // 12. İğneyle kuyu kazmak
  'igneyle-kuyu-kazmak': wrapSvg(`
    ${groundShadow(256, 404, 134, 16)}

    <!-- Earth Cross-Section Background Mound -->
    <path d="M98 228 L414 228 L414 386 C414 396 406 402 396 402 L116 402 C106 402 98 396 98 386 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <!-- Top Sage Grass Layer -->
    <rect x="94" y="210" width="324" height="26" rx="10" fill="${C.sage}" stroke="${C.ink}" stroke-width="5"/>

    <!-- Deep Well Shaft Carved Into the Earth -->
    <path d="M188 210 L188 354 C188 372 218 382 256 382 C294 382 324 372 324 354 L324 210 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <!-- Well Stone Rim Bricks at Left & Right -->
    <rect x="164" y="194" width="42" height="22" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
    <rect x="306" y="194" width="42" height="22" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Small asymmetrical dirt mound & pebble at well bottom -->
    <path d="M204 374 Q236 352 276 376" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round"/>
    <circle cx="298" cy="368" r="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="3.2"/>

    <!-- Oversized Gleaming Silver Sewing Needle Digging Earnestly at the Bottom! -->
    <g transform="rotate(14 256 232)">
      <!-- Silver Needle Body -->
      <path d="M244 102 C244 84 268 84 268 102 L262 350 L256 374 L250 350 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Needle Eye -->
      <ellipse cx="256" cy="112" rx="4.5" ry="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    <!-- Curly Terracotta Thread Trailing Out of the Needle Eye -->
    <path d="M286 118 C326 94 364 128 340 162 C320 190 364 202 386 176" stroke="${C.terracotta}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    ${sparkle(224, 344, 11, C.ochreLight)}
    ${sparkle(136, 160, 10, C.ochre)}
  `),

  // 13. Kulağına küpe olmak
  'kulagina-kupe-olmak': wrapSvg(`
    ${groundShadow(252, 412, 98, 14)}

    <!-- Radiating Warm Golden Rays Behind Lightbulb Earring -->
    <path d="M214 328 L186 338 M224 358 L202 376 M314 328 L342 338 M304 358 L326 376 M264 374 L264 390" stroke="${C.ochre}" stroke-width="5" stroke-linecap="round"/>

    <!-- Stylized Cartoon Ear -->
    <g>
      <path d="M188 186 C188 114 282 94 324 148 C354 188 332 246 296 270 C282 280 280 296 266 306 C248 318 220 306 218 282 C216 262 232 250 220 226 C210 206 188 212 188 186 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Inner Ear Canal Swirl -->
      <path d="M226 168 C236 138 286 136 298 168 C306 192 284 218 262 224 C248 228 242 248 258 258" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Hanging Golden Lightbulb Earring! -->
    <g>
      <!-- Gold Earring Ring -->
      <circle cx="264" cy="300" r="10" fill="none" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Screw Socket Cap -->
      <rect x="252" y="308" width="24" height="14" rx="4" fill="${C.teal}" stroke="${C.ink}" stroke-width="4"/>
      <!-- Glowing Lightbulb Glass -->
      <path d="M242 322 L286 322 C298 338 294 366 264 370 C234 366 230 338 242 322 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Inner Filament -->
      <path d="M254 326 L258 344 L264 336 L270 344 L274 326" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>

    ${sparkle(164, 294, 12, C.ochreLight)}
    ${sparkle(362, 286, 13, C.terracotta)}
    ${sparkle(354, 146, 10, C.tealLight)}
  `),

  // 14. Kulak misafiri olmak
  'kulak-misafiri-olmak': wrapSvg(`
    ${groundShadow(256, 404, 136, 16)}

    <!-- Branch with Two Tiny Whispering Songbirds on the Right -->
    <g>
      <path d="M276 230 Q346 218 410 198" stroke="${C.tanDark}" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M276 230 Q346 218 410 198" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- Little sage leaf on branch -->
      <ellipse cx="394" cy="214" rx="14" ry="8" transform="rotate(24 394 214)" fill="${C.sage}" stroke="${C.ink}" stroke-width="3.8"/>

      <!-- Bird 1 (Teal) -->
      <path d="M298 220 C294 192 316 178 332 184 C346 190 346 210 332 220 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M296 198 L280 202 L296 208 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="312" cy="194" r="3.5" fill="${C.cream}"/>

      <!-- Bird 2 (Terracotta leaning toward Bird 1) -->
      <path d="M352 210 C348 182 370 168 386 174 C400 180 400 200 386 210 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M350 188 L334 192 L350 198 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="366" cy="184" r="3.5" fill="${C.cream}"/>
    </g>

    <!-- Drifting Sound Waves Traveling Into the Giant Attentive Ear -->
    ${motionArc('M272 174 Q256 194 272 214', 4)}
    ${motionArc('M250 164 Q230 194 250 224', 4)}
    ${motionArc('M228 154 Q204 194 228 234', 4)}

    <!-- Oversized Curious Ear Peeking Around a Folded Cream Newspaper -->
    <g>
      <!-- Giant Attentive Ear extending right -->
      <path d="M168 186 C188 152 226 164 226 202 C226 232 204 252 184 268 C174 276 164 266 162 252 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M182 192 C198 180 212 196 204 214 C198 228 182 232 182 246" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>

      <!-- Folded Newspaper Shield -->
      <path d="M98 228 L178 214 L186 382 L106 394 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M114 254 L164 246 M116 276 L166 268 M118 298 L168 290 M120 326 L170 318 M122 348 L156 342" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>
      <!-- Newspaper folded image block -->
      <rect x="118" y="228" width="44" height="12" transform="rotate(-8 118 228)" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>
    </g>

    ${sparkle(258, 124, 11, C.ochreLight)}
  `),

  // 15. Maymun iştahlı olmak
  'maymun-istahli-olmak': wrapSvg(`
    ${groundShadow(256, 408, 128, 16)}

    <!-- Playful Semi-Circle of Diverse Toys & Interests -->
    <!-- 1. Mini Paintbrush (Top Left) -->
    <g transform="rotate(-34 128 164)">
      <rect x="118" y="128" width="16" height="66" rx="6" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4"/>
      <path d="M114 128 L138 128 L132 102 C128 96 124 96 120 102 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
    </g>

    <!-- 2. Mini Acoustic Guitar (Top Right) -->
    <g transform="rotate(28 386 164)">
      <rect x="373" y="96" width="26" height="16" rx="4" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="3.8"/>
      <path d="M379 112 L393 112 L392 154 L380 154 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="4"/>
      <path d="M370 152 C356 156 358 174 366 180 C356 192 362 214 386 214 C410 214 416 192 406 180 C414 174 416 156 402 152 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <circle cx="386" cy="176" r="8" fill="${C.ink}"/>
      <rect x="374" y="196" width="24" height="6" rx="2" fill="${C.ink}"/>
    </g>

    <!-- 3. Star Wand (Bottom Left) -->
    <g transform="rotate(-22 124 316)">
      <line x1="124" y1="308" x2="124" y2="372" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round"/>
      <path d="M124 274 L131 292 L150 294 L135 306 L140 324 L124 314 L108 324 L113 306 L98 294 L117 292 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>

    <!-- 4. Striped Toy Ball (Bottom Right) -->
    <g>
      <circle cx="384" cy="316" r="28" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5"/>
      <path d="M362 300 Q384 316 406 300 M362 332 Q384 316 406 332" stroke="${C.cream}" stroke-width="4.5" fill="none"/>
    </g>

    <!-- Swirling indecisive attention arcs -->
    ${motionArc('M152 214 Q176 196 192 214', 3.5, '6 6')}
    ${motionArc('M360 214 Q336 196 320 214', 3.5, '6 6')}

    <!-- Charming Minimalist Monkey Face in the Center Looking Eagerly -->
    <g>
      <!-- Big Round Monkey Ears -->
      <circle cx="174" cy="242" r="28" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
      <circle cx="174" cy="242" r="14" fill="${C.tan}"/>
      <circle cx="338" cy="242" r="28" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
      <circle cx="338" cy="242" r="14" fill="${C.tan}"/>

      <!-- Fuzzy Dark Head -->
      <circle cx="256" cy="248" r="76" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Tan Face Mask -->
      <path d="M206 232 C206 206 236 204 256 220 C276 204 306 206 306 232 C314 250 320 278 302 298 C280 318 232 318 210 298 C192 278 198 250 206 232 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="4"/>

      <!-- Cute Monkey Hair Swirl -->
      <path d="M244 172 Q256 150 272 170" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>

      <!-- Big Excited Eyes -->
      <circle cx="234" cy="238" r="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="278" cy="238" r="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="238" cy="238" r="5.5" fill="${C.ink}"/>
      <circle cx="282" cy="238" r="5.5" fill="${C.ink}"/>

      <!-- Cute Nostrils & Excited Open Grin -->
      <circle cx="248" cy="262" r="3" fill="${C.ink}"/>
      <circle cx="264" cy="262" r="3" fill="${C.ink}"/>
      <path d="M232 278 Q256 302 280 278 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    </g>

    ${sparkle(256, 122, 12, C.ochreLight)}
  `),

  // 16. Ocağına incir ağacı dikmek
  'ocagina-incir-agaci-dikmek': wrapSvg(`
    ${groundShadow(256, 412, 148, 16)}

    <!-- Miniature Cozy Anatolian Cottage -->
    <g>
      <!-- Brick Chimney -->
      <rect x="224" y="218" width="64" height="58" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Cottage Main Wall -->
      <rect x="148" y="294" width="216" height="110" rx="6" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Sloped Terracotta Roof -->
      <path d="M126 302 L256 232 L386 302 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Tiny Startled Cottage Windows & Door -->
      <rect x="176" y="324" width="38" height="38" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="4"/>
      <rect x="298" y="324" width="38" height="38" rx="6" fill="${C.teal}" stroke="${C.ink}" stroke-width="4"/>
      <path d="M234 404 L234 348 C234 336 278 336 278 348 L278 404 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Hairline surprise cracks radiating from chimney -->
      <path d="M214 246 L196 260 M298 246 L316 260" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
    </g>

    <!-- Giant Lush Fig Tree Bursting Comically Right Up Out of the Chimney! -->
    <g>
      <!-- Sturdy Gnarled Trunk Emerging from Chimney Top -->
      <path d="M236 224 C236 184 218 164 202 152 M276 224 C276 184 294 164 310 152" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M236 224 L276 224 L270 166 L242 166 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Big Scalloped Sage-Green Fig Canopy -->
      <path d="M158 176 C132 160 138 118 172 114 C180 82 222 72 246 94 C268 70 318 76 328 110 C366 112 378 156 346 178 C330 198 294 196 272 186 C250 196 180 200 158 176 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Foliage highlights -->
      <path d="M174 134 C192 114 222 118 232 134" stroke="${C.sageLight}" stroke-width="6" stroke-linecap="round" fill="none"/>

      <!-- Plump Purple/Teal Figs Hanging in the Canopy -->
      <g fill="${C.teal}" stroke="${C.ink}" stroke-width="3.5">
        <path d="M196 132 C188 144 188 156 196 156 C204 156 204 144 196 132 Z"/>
        <path d="M262 112 C254 124 254 136 262 136 C270 136 270 124 262 112 Z"/>
        <path d="M312 138 C304 150 304 162 312 162 C320 162 320 150 312 138 Z"/>
      </g>
    </g>

    ${sparkle(134, 212, 11, C.ochreLight)}
    ${sparkle(382, 212, 11, C.ochreLight)}
  `),

  // 17. Pabucu dama atılmak
  'pabucu-dama-atilmak': wrapSvg(`
    ${groundShadow(256, 408, 138, 16)}

    <!-- Cozy Terracotta-Tiled Rooftop Ridge -->
    <g>
      <path d="M104 396 L104 316 L256 232 L408 316 L408 396 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Sloped Terracotta Roof Overhang -->
      <path d="M84 326 L256 224 L428 326 L412 346 L256 254 L100 346 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Scalloped roof tile seams -->
      <path d="M148 308 L160 320 M198 278 L210 290 M314 278 L302 290 M364 308 L352 320" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
    </g>

    <!-- Dotted Upward Toss Arc Showing It Was Tossed Onto the Roof -->
    <path d="M126 244 C132 146 184 114 232 134" stroke="${C.ink}" stroke-width="4" stroke-dasharray="8 8" stroke-linecap="round" fill="none"/>
    <path d="M218 144 L236 136 L224 120" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Old Trusty Worn-Out Leather Shoe Perched Forlornly Up on the Roof! -->
    <g transform="rotate(-12 276 196)">
      <!-- Sole -->
      <path d="M214 226 L342 226 C352 226 352 240 340 240 L214 240 Z" fill="${C.ink}"/>
      <!-- Upper worn leather body -->
      <path d="M216 226 L224 166 L264 166 L284 196 L336 202 C350 204 352 226 336 226 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Patchwork scuff & loose untied shoelace -->
      <path d="M294 214 Q310 208 324 218" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M270 184 C284 176 288 160 276 152 M276 190 C296 194 302 208 292 214" stroke="${C.terracotta}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Sad little cobweb on heel -->
      <path d="M218 192 Q232 192 232 206" stroke="${C.cream}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </g>

    ${sparkle(362, 168, 11, C.ochreLight)}
  `),

  // 18. Saman altından su yürütmek
  'saman-altindan-su-yurutmek': wrapSvg(`
    ${groundShadow(256, 384, 152, 18)}

    <!-- Sneaky Bright Deep-Teal Undulating Water Stream Flowing Right Underneath the Haystack! -->
    <g>
      <!-- Water entry left -->
      <path d="M84 338 Q114 322 146 336 L146 368 Q114 354 84 368 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Hidden translucent hint line showing path passing under haystack -->
      <path d="M156 352 Q256 366 356 352" stroke="${C.tealMid}" stroke-width="14" stroke-linecap="round" stroke-dasharray="14 14" opacity="0.55"/>
      <!-- Water exit right with cheeky splash -->
      <path d="M356 338 Q392 324 426 340 L426 372 Q392 356 356 370 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Flow swirl lines & bubbles -->
      <path d="M98 352 Q122 344 138 352 M368 352 Q394 344 414 354" stroke="${C.cream}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <circle cx="422" cy="316" r="7" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="404" cy="302" r="5" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>
    </g>

    <!-- Lush Golden-Ochre Conical Haystack Sitting Innocently Above -->
    <g>
      <path d="M138 352 C142 232 192 142 256 138 C320 142 370 232 374 352 C336 364 176 364 138 352 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Subtle water ripple hint at bottom soil edge under haystack -->
      <path d="M158 356 Q190 364 222 356 Q256 348 290 356 Q322 364 354 356" stroke="${C.tealMid}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Straw texture tufts -->
      <path d="M214 196 L202 254 M256 176 L256 266 M298 196 L310 254 M176 276 L166 328 M234 282 L228 336 M284 282 L292 336 M334 276 L346 328" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round"/>
      <!-- Cute stray wisps sticking out of haystack top -->
      <path d="M248 138 L240 116 M256 138 L258 112 M264 138 L274 118" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>
      <!-- Meadow grass tufts framing base -->
      <path d="M126 364 L134 344 L144 364 M368 364 L378 344 L386 364" stroke="${C.sage}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>

    ${sparkle(116, 294, 10, C.tealLight)}
    ${sparkle(392, 268, 10, C.ochreLight)}
  `),

  // 19. Tereciye tere satmak
  'tereciye-tere-satmak': wrapSvg(`
    ${groundShadow(296, 404, 128, 16)}
    ${groundShadow(138, 356, 48, 10)}

    <!-- Towering Overflowing Woven Basket Mountain Brimming with Lush Leafy Green Cress (Right) -->
    <g>
      <!-- Huge Lush Scalloped Cress Leaf Canopy -->
      <path d="M214 258 C192 246 196 208 224 202 C220 170 250 148 276 162 C282 128 326 126 336 158 C366 154 386 182 374 208 C400 220 398 256 374 262 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Layered bright leafy sprig details -->
      <g fill="${C.sageLight}" stroke="${C.ink}" stroke-width="3.8" stroke-linejoin="round">
        <ellipse cx="262" cy="196" rx="18" ry="11" transform="rotate(-24 262 196)"/>
        <ellipse cx="308" cy="174" rx="18" ry="11" transform="rotate(18 308 174)"/>
        <ellipse cx="342" cy="212" rx="19" ry="12" transform="rotate(32 342 212)"/>
        <ellipse cx="242" cy="236" rx="18" ry="11" transform="rotate(-14 242 236)"/>
        <ellipse cx="298" cy="228" rx="20" ry="12" transform="rotate(8 298 228)"/>
      </g>
      <path d="M254 200 L270 192 M300 172 L316 176 M334 208 L350 216 M288 228 L308 228" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Woven Basket -->
      <path d="M204 266 L392 266 L364 388 L232 388 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Basket weave lines -->
      <path d="M214 304 L382 304 M222 344 L374 344 M262 266 L268 388 M300 266 L300 388 M338 266 L332 388" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="194" y="252" width="208" height="22" rx="10" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5"/>
    </g>

    <!-- Tiny Outstretched Hand Eagerly Offering ONE Solitary Little Cress Sprig (Left) -->
    <g>
      <path d="M84 314 L138 308 C154 306 164 322 148 330 L132 336 L84 342 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Cuff -->
      <path d="M80 306 L104 304 L106 346 L80 348 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Single tiny delicate cress sprig held upright -->
      <path d="M148 312 Q156 266 154 226" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="144" cy="248" rx="10" ry="6" transform="rotate(-32 144 248)" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="3.5"/>
      <ellipse cx="164" cy="238" rx="10" ry="6" transform="rotate(28 164 238)" fill="${C.sage}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="154" cy="222" r="7" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="3.5"/>
    </g>

    <!-- Playful contrast sparkle -->
    ${sparkle(154, 184, 11, C.ochreLight)}
  `),

  // 20. Yüzünden düşen bin parça olmak
  'yuzunden-dusen-bin-parca-olmak': wrapSvg(`
    ${groundShadow(256, 424, 118, 14)}

    <!-- Grumpy Sulking Round Face -->
    <g>
      <!-- Hair cap -->
      <path d="M158 194 C158 122 214 96 268 102 C322 108 354 148 354 194 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

      <!-- Main grumpy porcelain-like face -->
      <path d="M156 218 C156 154 202 122 256 122 C310 122 356 154 356 218 C356 266 326 298 286 306 L266 284 L246 306 C200 300 156 268 156 218 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

      <!-- Ears -->
      <circle cx="150" cy="218" r="18" fill="${C.cream}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="362" cy="218" r="18" fill="${C.cream}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Deep Angry Furrowed Eyebrows & Unhappy Droopy Eyes -->
      <path d="M196 184 L238 202 M316 184 L274 202" stroke="${C.ink}" stroke-width="6.5" stroke-linecap="round"/>
      <circle cx="218" cy="214" r="9" fill="${C.ink}"/>
      <circle cx="294" cy="214" r="9" fill="${C.ink}"/>
      <circle cx="215" cy="211" r="3" fill="${C.cream}"/>
      <circle cx="291" cy="211" r="3" fill="${C.cream}"/>

      <!-- Deep Downturned Grumpy Frown -->
      <path d="M220 264 Q256 238 292 264" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>

      <!-- Hairline crack lines running along cheek/jaw -->
      <path d="M194 272 L212 288 L206 302 M318 268 L302 284 L310 298" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>

    <!-- Tumbling Ceramic/Porcelain Frown Shards Scattering Downward! -->
    <g stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round">
      <polygon points="212,322 246,314 238,348 206,338" fill="${C.cream}"/>
      <polygon points="274,312 310,322 296,352 268,338" fill="${C.tan}"/>
      <polygon points="172,344 202,348 192,374 166,364" fill="${C.terracotta}"/>
      <polygon points="244,358 274,352 278,384 248,386" fill="${C.cream}"/>
      <polygon points="312,354 342,346 346,374 316,380" fill="${C.tealLight}"/>
      <polygon points="204,384 232,378 228,406 198,402" fill="${C.tan}"/>
      <polygon points="282,390 314,386 306,412 278,408" fill="${C.cream}"/>
      <polygon points="156,388 178,384 174,406 150,400" fill="${C.cream}"/>
    </g>

    <!-- Downward fall motion dashes -->
    ${motionArc('M186 312 L182 332 M326 312 L330 332 M256 322 L256 344', 3.5)}
  `),
};

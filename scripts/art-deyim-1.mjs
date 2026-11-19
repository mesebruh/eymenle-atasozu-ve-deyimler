import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const DEYIM_SVGS_1 = {
  // 1. Ağzı kulaklarına varmak
  'agzi-kulaklarina-varmak': wrapSvg(`
    ${groundShadow(256, 404, 112, 16)}

    ${sparkle(116, 138, 13, C.ochreLight)}
    ${sparkle(396, 146, 14, C.terracotta)}
    ${sparkle(136, 344, 10, C.tealLight)}
    ${sparkle(382, 336, 10, C.ochre)}

    <!-- Cute Ears -->
    <circle cx="132" cy="244" r="30" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
    <path d="M126 234 Q138 244 128 256" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
    <circle cx="380" cy="244" r="30" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
    <path d="M386 234 Q374 244 384 256" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>

    <!-- Cheerful Round Head -->
    <circle cx="256" cy="250" r="118" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>

    <!-- Playful Hair Cap -->
    <path d="M144 218 C154 134 226 112 276 122 C332 132 364 176 368 218 C346 184 316 172 284 180 C264 186 234 156 200 176 C174 190 156 202 144 218 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

    <!-- Rosy Terracotta Cheeks -->
    <ellipse cx="182" cy="244" rx="18" ry="12" fill="${C.terracotta}" fill-opacity="0.45"/>
    <ellipse cx="330" cy="244" rx="18" ry="12" fill="${C.terracotta}" fill-opacity="0.45"/>

    <!-- Happy Crescent Eyes -->
    <path d="M192 222 Q210 198 228 222" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    <path d="M284 222 Q302 198 320 222" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"/>

    <!-- Little Nose -->
    <path d="M254 234 Q264 244 252 250" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>

    <!-- Giant Smile Stretching Literally All the Way to Touch Both Ears! -->
    <path d="M132 246 C158 342 354 342 380 246 C334 284 178 284 132 246 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <!-- Bright Smile Highlight / Teeth Curve -->
    <path d="M164 268 C206 290 306 290 348 268 C316 286 196 286 164 268 Z" fill="${C.cream}"/>
  `),

  // 2. Ateş püskürmek
  'ates-puskurmek': wrapSvg(`
    ${groundShadow(248, 396, 134, 16)}

    <!-- Dramatic Cartoon Flames Bursting Rightward -->
    <path d="M242 268 C294 218 336 168 394 178 C372 204 388 222 426 226 C388 248 402 272 432 292 C384 306 384 338 348 342 C308 346 276 314 242 268 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    <path d="M242 268 C286 234 322 206 364 218 C348 238 366 252 390 258 C358 274 362 298 332 308 C296 318 274 294 242 268 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M242 268 C272 250 302 238 324 252 C312 266 322 280 302 288 C278 296 262 282 242 268 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>

    <!-- Flying Sparks & Embers -->
    ${sparkle(414, 160, 11, C.ochreLight)}
    ${sparkle(436, 256, 10, C.terracotta)}
    <circle cx="386" cy="144" r="6" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="3"/>
    <circle cx="408" cy="336" r="7" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3"/>

    <!-- Steaming Angry Puff Cloud Overhead -->
    <path d="M144 128 C144 114 162 106 176 116 C188 104 214 112 212 130 C222 136 216 150 202 150 L150 150 C138 150 136 134 144 128 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>

    <!-- Furious Puffed-Up Character Head on Left -->
    <g>
      <!-- Collar / shoulders -->
      <path d="M108 384 C116 340 144 324 182 324 C218 324 242 340 248 384 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Reddish flushed round head -->
      <circle cx="176" cy="248" r="82" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M96 226 C104 166 170 154 216 176 C244 190 256 214 256 232 C226 206 198 192 156 196 C126 200 108 212 96 226 Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <!-- Fierce furrowed eyebrow + glaring eye -->
      <path d="M188 210 L236 226" stroke="${C.ink}" stroke-width="6.5" stroke-linecap="round"/>
      <circle cx="216" cy="236" r="10" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="220" cy="236" r="4.5" fill="${C.ink}"/>
      <!-- Puffed cheek & open roaring mouth breathing fire -->
      <path d="M188 262 C210 254 242 254 252 268 C242 284 206 286 188 262 Z" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Cute round ear -->
      <circle cx="104" cy="252" r="18" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
    </g>
  `),

  // 3. Baltayı taşa vurmak
  'baltayi-tasa-vurmak': wrapSvg(`
    ${groundShadow(268, 396, 132, 18)}

    <!-- Startled Chunky Faceted Boulder -->
    <g>
      <path d="M186 382 L172 326 L204 276 L268 258 L338 282 L368 338 L352 382 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M268 258 L286 312 L338 282" stroke="${C.ink}" stroke-width="3.8" stroke-linejoin="round" fill="none"/>
      <path d="M286 312 L302 382" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round"/>
      <!-- Wide startled eyes & tiny o-mouth on boulder -->
      <circle cx="236" cy="322" r="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="268" cy="322" r="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="238" cy="322" r="4.5" fill="${C.ink}"/>
      <circle cx="270" cy="322" r="4.5" fill="${C.ink}"/>
      <ellipse cx="252" cy="348" rx="8" ry="10" fill="${C.ink}"/>
    </g>

    <!-- Swinging Wooden Axe Striking the Top of the Boulder -->
    <g transform="rotate(-24 252 246)">
      <!-- Long curved wooden handle -->
      <path d="M148 112 C164 152 212 206 250 240 L264 226 C228 192 182 138 166 102 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Metal Axe Head -->
      <path d="M234 218 L272 206 C288 228 292 254 276 276 L232 258 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Gleaming blade edge -->
      <path d="M268 214 C282 232 284 252 272 270" stroke="${C.cream}" stroke-width="4.5" stroke-linecap="round"/>
    </g>

    <!-- Comical Golden Impact Sparks & Shock Lines -->
    ${sparkle(226, 204, 15, C.ochreLight)}
    ${sparkle(314, 214, 13, C.terracotta)}
    ${sparkle(182, 244, 11, C.ochre)}
    <path d="M258 232 L248 198 M282 242 L310 226 M226 244 L196 226" stroke="${C.ochre}" stroke-width="5" stroke-linecap="round"/>
    ${motionArc('M112 152 Q112 204 152 234', 4, '8 8')}
  `),

  // 4. Burnu büyümek
  'burnu-buyumek': wrapSvg(`
    ${groundShadow(210, 412, 108, 14)}

    <!-- Strutting snooty character bust on the left with proud tilted chin -->
    <g>
      <!-- Fancy high-collar teal coat -->
      <path d="M108 398 C114 334 154 304 202 308 C238 312 262 340 268 398 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Terracotta scarf collar -->
      <path d="M148 312 Q188 336 228 312 L222 292 L154 292 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>

      <!-- Proudly tilted head with absurdly long whimsical nose! -->
      <path d="M144 268 C134 222 156 174 202 172 C240 170 264 196 264 232 L386 196 C400 192 406 212 390 218 L266 254 C258 286 226 306 188 298 C166 294 150 282 144 268 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>

      <!-- Dapper wavy hair & mini crown-like curls -->
      <path d="M138 236 C128 192 158 152 204 152 C236 152 256 170 258 192 C232 184 208 188 192 206 C176 200 156 212 154 234 Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>

      <!-- Snooty closed eye with raised smug brow & smirk -->
      <path d="M206 206 Q220 198 232 204" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M208 224 Q220 232 234 222" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M214 274 Q230 272 240 262" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>

      <!-- Ear -->
      <circle cx="152" cy="248" r="14" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    <!-- Cheerful tiny teal songbird casually perched on the giant nose tip -->
    <g>
      <path d="M358 196 C354 176 368 162 384 164 C396 166 402 178 398 190 C392 198 368 202 358 196 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Little wing & tail -->
      <path d="M358 186 L340 176 L348 192 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="3.8" stroke-linejoin="round"/>
      <path d="M398 176 L414 180 L398 186 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="386" cy="175" r="3" fill="${C.ink}"/>
      <!-- Bird feet gripping nose -->
      <path d="M372 198 L370 206 M382 196 L380 204" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
    </g>

    ${sparkle(318, 152, 11, C.ochreLight)}
    ${motionArc('M298 194 L350 178', 3, '6 6')}
  `),

  // 5. Çam devirmek
  'cam-devirmek': wrapSvg(`
    ${groundShadow(268, 396, 134, 16)}

    <!-- Dramatic wobble & falling motion arcs -->
    ${motionArc('M152 174 Q198 118 266 132', 4.5, '9 9')}
    ${motionArc('M352 162 L374 148 M368 188 L394 184', 4)}

    <!-- Tipping Evergreen Pine Tree in Classic Terracotta Pot (~40 deg tilt!) -->
    <g transform="translate(-14, 4) rotate(38 278 338)">
      <!-- Terracotta Flower Pot -->
      <path d="M236 308 L320 308 L308 386 L248 386 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <rect x="228" y="290" width="100" height="22" rx="6" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="5"/>

      <!-- Trunk -->
      <rect x="266" y="256" width="24" height="36" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="4.5"/>

      <!-- Lush Tiered Pine Foliage -->
      <path d="M278 192 L352 268 L204 268 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M278 142 L338 214 L218 214 Z" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M278 96 L322 162 L234 162 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    </g>

    <!-- Spilled soil pebbles & comic shock lines -->
    <circle cx="176" cy="364" r="9" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="3.5"/>
    <circle cx="152" cy="382" r="6" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="3.5"/>
    <circle cx="198" cy="384" r="7" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="3.5"/>
    ${sparkle(136, 294, 12, C.terracotta)}
    ${sparkle(386, 266, 11, C.ochre)}
  `),

  // 6. Dört gözle beklemek
  'dort-gozle-beklemek': wrapSvg(`
    ${groundShadow(256, 408, 126, 14)}

    <!-- Arched Teal Window Frame -->
    <path d="M126 376 L126 218 C126 140 184 96 256 96 C328 96 386 140 386 218 L386 376 Z" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M148 376 L148 220 C148 156 196 118 256 118 C316 118 364 156 364 220 L364 376 Z" fill="${C.tealLight}" fill-opacity="0.35" stroke="${C.ink}" stroke-width="4.5"/>

    <!-- Eager Character Inside Window Wearing TWO Pairs of Stacked Glasses! -->
    <g>
      <!-- Shirt peeking above sill -->
      <path d="M174 376 C182 326 214 310 256 310 C298 310 330 326 338 376 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Ears -->
      <circle cx="178" cy="248" r="18" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="334" cy="248" r="18" fill="${C.tan}" stroke="${C.ink}" stroke-width="5"/>
      <!-- Round Head -->
      <circle cx="256" cy="244" r="76" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Cute Side-Parted Hair -->
      <path d="M182 226 C186 168 232 154 272 162 C312 170 332 200 330 226 C306 200 278 194 248 202 C226 208 204 204 182 226 Z" fill="${C.ink}"/>

      <!-- UPPER EXTRA PAIR OF GLASSES (pushed slightly above brow with two alert eyes!) -->
      <g>
        <circle cx="222" cy="204" r="21" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>
        <circle cx="290" cy="204" r="21" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4.5"/>
        <line x1="243" y1="204" x2="269" y2="204" stroke="${C.ink}" stroke-width="4.5"/>
        <circle cx="224" cy="204" r="7" fill="${C.ink}"/>
        <circle cx="292" cy="204" r="7" fill="${C.ink}"/>
        <circle cx="227" cy="201" r="2.5" fill="${C.cream}"/>
        <circle cx="295" cy="201" r="2.5" fill="${C.cream}"/>
      </g>

      <!-- MAIN PAIR OF GLASSES (on nose bridge with two eager wide eyes!) -->
      <g>
        <circle cx="222" cy="252" r="23" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
        <circle cx="290" cy="252" r="23" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
        <line x1="245" y1="252" x2="267" y2="252" stroke="${C.ink}" stroke-width="4.5"/>
        <circle cx="224" cy="252" r="8" fill="${C.ink}"/>
        <circle cx="292" cy="252" r="8" fill="${C.ink}"/>
        <circle cx="227" cy="249" r="3" fill="${C.cream}"/>
        <circle cx="295" cy="249" r="3" fill="${C.cream}"/>
      </g>

      <!-- Hopeful little smile -->
      <path d="M244 288 Q256 298 268 288" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Windowsill + Tiny Hands Resting Eagerly on Sill -->
    <rect x="108" y="366" width="296" height="24" rx="8" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
    <ellipse cx="198" cy="364" rx="18" ry="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
    <ellipse cx="314" cy="364" rx="18" ry="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
    ${sparkle(96, 178, 11, C.ochreLight)}
    ${sparkle(414, 178, 11, C.ochreLight)}
  `),

  // 7. Etekleri zil çalmak
  'etekleri-zil-calmak': wrapSvg(`
    ${groundShadow(256, 408, 134, 16)}

    <!-- Swirl motion ribbons & musical notes -->
    ${motionArc('M102 278 Q86 322 118 352', 4)}
    ${motionArc('M410 278 Q426 322 394 352', 4)}
    ${sparkle(128, 162, 12, C.ochreLight)}
    ${sparkle(388, 166, 12, C.terracotta)}

    <!-- Floating joyful music notes -->
    <g fill="${C.ink}" stroke="${C.ink}" stroke-width="2.5">
      <circle cx="116" cy="222" r="7"/>
      <path d="M122 222 L122 188 L142 194" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="388" cy="228" r="7"/>
      <circle cx="406" cy="222" r="7"/>
      <path d="M394 228 L394 192 L412 188 L412 222" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </g>

    <!-- Joyful Twirling Pleated Skirt Hem -->
    <g>
      <!-- Waistband -->
      <path d="M210 116 L302 116 L310 144 L202 144 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Swirling wide flared terracotta skirt -->
      <path d="M202 144 C172 222 114 278 106 326 C144 352 184 328 214 342 C244 356 268 356 298 342 C328 328 368 352 406 326 C398 278 340 222 310 144 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Dynamic flowing pleat folds -->
      <path d="M226 144 C214 218 182 284 166 336 M256 144 L256 348 M286 144 C298 218 330 284 346 336" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>

      <!-- 5 Shiny Golden Bells Tied Along the Hem -->
      <g>
        <!-- Bell 1 -->
        <path d="M126 334 C126 318 148 318 148 334 L154 354 L120 354 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="137" cy="358" r="5" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3"/>
        <!-- Bell 2 -->
        <path d="M184 340 C184 324 206 324 206 340 L212 360 L178 360 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="195" cy="364" r="5" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3"/>
        <!-- Bell 3 -->
        <path d="M245 350 C245 334 267 334 267 350 L273 370 L239 370 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="256" cy="374" r="5" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3"/>
        <!-- Bell 4 -->
        <path d="M306 340 C306 324 328 324 328 340 L334 360 L300 360 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="317" cy="364" r="5" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3"/>
        <!-- Bell 5 -->
        <path d="M364 334 C364 318 386 318 386 334 L392 354 L358 354 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="375" cy="358" r="5" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3"/>
      </g>
    </g>

    <!-- Ring-ring chime vibration arcs underneath bells -->
    ${motionArc('M114 374 Q137 386 160 374', 3.5)}
    ${motionArc('M232 390 Q256 402 280 390', 3.5)}
    ${motionArc('M352 374 Q375 386 398 374', 3.5)}
  `),

  // 8. Fincancı katırlarını ürkütmek
  'fincanci-katirlarini-urkutmak': wrapSvg(`
    ${groundShadow(256, 412, 118, 16)}

    <!-- Precariously Wobbling Tall Stack of Delicate Porcelain Teacups -->
    <g>
      <!-- Bottom stable saucer & cup -->
      <ellipse cx="256" cy="382" rx="68" ry="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="5"/>
      <path d="M214 334 L298 334 C298 366 280 380 256 380 C232 380 214 366 214 334 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5"/>
      <path d="M298 344 C318 342 318 368 294 366" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>

      <!-- Second wobbling tilted saucer & cup -->
      <g transform="rotate(-9 256 322)">
        <ellipse cx="256" cy="322" rx="62" ry="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.8"/>
        <path d="M216 276 L296 276 C296 306 278 320 256 320 C234 320 216 306 216 276 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.8"/>
        <path d="M216 294 L296 294" stroke="${C.terracotta}" stroke-width="5"/>
        <path d="M216 286 C196 284 196 310 220 308" stroke="${C.ink}" stroke-width="4.8" stroke-linecap="round" fill="none"/>
      </g>

      <!-- Third wildly tilted saucer & cup -->
      <g transform="rotate(14 260 254)">
        <ellipse cx="260" cy="256" rx="58" ry="10" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.8"/>
        <path d="M222 212 L298 212 C298 240 282 254 260 254 C238 254 222 240 222 212 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.8"/>
        <path d="M298 222 C316 220 316 244 294 242" stroke="${C.ink}" stroke-width="4.8" stroke-linecap="round" fill="none"/>
      </g>

      <!-- Fourth top-most flying cup tipping in mid-air -->
      <g transform="rotate(-18 242 162)">
        <ellipse cx="242" cy="186" rx="52" ry="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.8"/>
        <path d="M206 144 L278 144 C278 172 262 184 242 184 C222 184 206 172 206 144 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.8"/>
        <path d="M206 154 C188 152 188 176 210 174" stroke="${C.ink}" stroke-width="4.8" stroke-linecap="round" fill="none"/>
      </g>
    </g>

    <!-- Startle wobble arcs & comic shock bolts -->
    ${motionArc('M152 186 Q134 218 150 252', 4)}
    ${motionArc('M358 184 Q376 216 360 250', 4)}
    <path d="M138 140 L162 152 M128 164 L154 166 M374 140 L350 152 M384 164 L358 166" stroke="${C.terracotta}" stroke-width="4.5" stroke-linecap="round"/>
    ${sparkle(294, 114, 12, C.ochreLight)}
  `),

  // 9. Göz boyamak
  'goz-boyamak': wrapSvg(`
    ${groundShadow(246, 376, 138, 16)}

    <!-- Large Expressive Stylized Eye Shape -->
    <g>
      <path d="M98 268 C154 188 338 188 394 268 C338 348 154 348 98 268 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/>
      <!-- Deep Teal Iris -->
      <circle cx="246" cy="268" r="56" fill="${C.teal}" stroke="${C.ink}" stroke-width="5"/>
      <circle cx="246" cy="268" r="24" fill="${C.ink}"/>
      <!-- Eye sparkle -->
      <circle cx="232" cy="252" r="9" fill="${C.cream}"/>
      <!-- Gleaming Golden Paint Swath Painted Right Across the Eye! -->
      <path d="M124 252 C176 206 296 196 368 240 C346 272 284 260 236 276 C192 292 146 290 124 252 Z" fill="${C.ochreLight}" fill-opacity="0.92" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <!-- Dazzling sparkles on the painted gold finish -->
      ${sparkle(184, 248, 12, C.cream)}
      ${sparkle(292, 232, 14, C.cream)}
    </g>

    <!-- Cheeky Wide Paintbrush Sweeping Gold Paint Across -->
    <g transform="rotate(34 346 168)">
      <!-- Wooden brush handle -->
      <path d="M332 68 C338 56 354 56 360 68 L366 154 L326 154 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Metal ferrule -->
      <rect x="322" y="152" width="48" height="22" rx="4" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Bristles dipped in glowing ochre-gold paint -->
      <path d="M322 174 L370 174 L374 222 C356 232 336 232 318 222 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <path d="M334 174 L334 214 M348 174 L348 218 M360 174 L360 212" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
    </g>

    <!-- Playful dripping gold paint drop -->
    <path d="M356 286 C356 286 344 306 344 316 C344 324 350 328 356 328 C362 328 368 324 368 316 C368 306 356 286 356 286 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
  `),

  // 10. Gözden düşmek
  'gozden-dusmek': wrapSvg(`
    ${groundShadow(256, 422, 92, 12)}

    <!-- Large Unimpressed Editorial Eye Glancing Sideways at Top -->
    <g>
      <!-- Unimpressed flat eyebrow -->
      <path d="M138 112 Q256 102 374 114" stroke="${C.ink}" stroke-width="6.5" stroke-linecap="round" fill="none"/>
      <!-- Eye contour -->
      <path d="M114 178 C176 118 336 118 398 178 C336 238 176 238 114 178 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/>
      <!-- Half-lidded upper eyelid -->
      <path d="M126 168 Q256 154 386 168 C332 124 180 124 126 168 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Iris looking off to the left -->
      <circle cx="212" cy="184" r="32" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="212" cy="184" r="14" fill="${C.ink}"/>
      <circle cx="204" cy="176" r="5" fill="${C.cream}"/>
    </g>

    <!-- Downward falling dashed motion trail from the eye's lower rim -->
    ${motionArc('M256 230 L256 264', 4, '7 7')}

    <!-- Tiny Cartoon Character Floating Downward on a Terracotta Striped Parachute -->
    <g>
      <!-- Parachute canopy -->
      <path d="M196 312 C196 266 316 266 316 312 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <path d="M236 276 C230 290 230 302 232 312 M276 276 C282 290 282 302 280 312" stroke="${C.cream}" stroke-width="5"/>
      <path d="M196 312 C196 266 316 266 316 312 Z" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Parachute cords -->
      <path d="M204 312 L248 358 M234 312 L252 358 M278 312 L260 358 M308 312 L264 358" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
      <!-- Little surprised round character hanging underneath -->
      <circle cx="256" cy="366" r="20" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="249" cy="364" r="3" fill="${C.ink}"/>
      <circle cx="263" cy="364" r="3" fill="${C.ink}"/>
      <circle cx="256" cy="374" r="4" fill="${C.ink}"/>
      <!-- Little waving arms & legs -->
      <path d="M236 370 L224 358 M276 370 L288 358 M248 386 L244 402 M264 386 L268 402" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>
    </g>
  `),
};

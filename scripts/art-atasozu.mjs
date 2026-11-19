import { C, groundShadow, motionArc, sparkle, wrapSvg } from './svg-shared.mjs';

export const ATASOZU_SVGS = {
  // 1. Bakarsan bağ, bakmazsan dağ olur.
  'bakarsan-bag-bakmazsan-dag-olur': wrapSvg(`
    <defs>
      <clipPath id="clip-left">
        <path d="M256 88 A168 168 0 0 0 256 424 Z"/>
      </clipPath>
      <clipPath id="clip-right">
        <path d="M256 88 A168 168 0 0 1 256 424 Z"/>
      </clipPath>
    </defs>

    ${groundShadow(256, 424, 154, 18)}

    <!-- Left half: Lush tended vineyard -->
    <g clip-path="url(#clip-left)">
      <circle cx="256" cy="256" r="168" fill="${C.ochreLight}" fill-opacity="0.35"/>
      <!-- Rolling sage hills -->
      <path d="M84 318 Q170 286 260 310 L260 430 L84 430 Z" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="4.5"/>
      <path d="M84 360 Q175 332 260 356 L260 430 L84 430 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Warm sun -->
      <circle cx="152" cy="158" r="24" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5"/>
      <!-- Vine trellis & plump grape cluster -->
      <path d="M118 228 Q174 198 242 222" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
      <path d="M138 220 C128 202 152 192 162 212 C148 220 142 222 138 220 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="4"/>
      <path d="M214 214 C224 196 244 204 234 222 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="4"/>
      <g fill="${C.teal}" stroke="${C.ink}" stroke-width="3.8">
        <circle cx="176" cy="238" r="10"/>
        <circle cx="196" cy="238" r="10"/>
        <circle cx="186" cy="254" r="10"/>
        <circle cx="176" cy="268" r="9"/>
        <circle cx="195" cy="268" r="9"/>
        <circle cx="186" cy="282" r="8.5"/>
      </g>
      <!-- Watering can -->
      <rect x="118" y="294" width="54" height="44" rx="8" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5"/>
      <path d="M118 308 C100 306 100 330 118 328" stroke="${C.ink}" stroke-width="4.5" fill="none"/>
      <path d="M172 324 L198 296 L204 304 L172 334 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M206 300 L216 290" stroke="${C.tealMid}" stroke-width="4" stroke-linecap="round"/>
    </g>

    <!-- Right half: Untended dry thorny crag -->
    <g clip-path="url(#clip-right)">
      <circle cx="256" cy="256" r="168" fill="${C.tan}" fill-opacity="0.38"/>
      <!-- Jagged rocky mountain -->
      <path d="M254 316 L306 232 L348 280 L388 216 L432 330 L432 430 L254 430 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <path d="M254 362 L322 332 L374 368 L432 342 L432 430 L254 430 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Crooked thorny bush -->
      <path d="M326 352 Q314 294 282 260 M326 340 Q348 286 382 252 M318 302 L344 276 M298 282 L286 254" stroke="${C.ink}" stroke-width="5" stroke-linecap="round"/>
      <path d="M294 272 L284 270 M312 292 L322 284 M358 272 L368 264 M346 298 L360 302" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Dry cloud -->
      <path d="M312 162 C312 148 326 140 338 148 C346 136 368 140 370 156 C382 158 386 174 374 178 L318 178 C308 178 308 164 312 162 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
    </g>

    <!-- Outer circular medallion frame & crisp center divider -->
    <circle cx="256" cy="256" r="168" stroke="${C.ink}" stroke-width="6"/>
    <line x1="256" y1="88" x2="256" y2="424" stroke="${C.ink}" stroke-width="5.5" stroke-linecap="round"/>
  `),

  // 2. Bir elin nesi var, iki elin sesi var.
  'bir-elin-nesi-var-iki-elin-sesi-var': wrapSvg(`
    ${groundShadow(256, 396, 128, 18)}

    <!-- Radiating acoustic waves & golden sparks -->
    ${sparkle(256, 124, 16, C.ochreLight)}
    ${sparkle(164, 152, 11, C.terracotta)}
    ${sparkle(348, 152, 11, C.tealLight)}
    ${motionArc('M180 184 Q162 162 178 140', 4)}
    ${motionArc('M332 184 Q350 162 334 140', 4)}
    ${motionArc('M216 146 Q256 126 296 146', 4)}

    <!-- Left clapping hand (Terracotta cuff) -->
    <g transform="translate(-8, 6) rotate(-14 226 280)">
      <path d="M126 364 L162 292 L202 312 L166 384 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M168 296 L186 254 C190 242 172 222 176 206 C180 194 198 198 202 214 L214 238 L226 176 C228 164 244 166 242 180 L234 234 L248 182 C252 170 266 176 262 190 L248 242 L258 204 C262 194 274 200 270 212 L252 276 C244 300 220 314 198 312 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    </g>

    <!-- Right clapping hand (Deep Teal cuff) -->
    <g transform="translate(8, 6) rotate(14 286 280)">
      <path d="M386 364 L350 292 L310 312 L346 384 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <path d="M344 296 L326 254 C322 242 340 222 336 206 C332 194 314 198 310 214 L298 238 L286 176 C284 164 268 166 270 180 L278 234 L264 182 C260 170 246 176 250 190 L264 242 L254 204 C250 194 238 200 242 212 L260 276 C268 300 292 314 314 312 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
    </g>

    <!-- Clap burst lines at palm contact -->
    <path d="M256 176 L256 154 M236 184 L222 166 M276 184 L290 166" stroke="${C.ochre}" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M256 176 L256 154 M236 184 L222 166 M276 184 L290 166" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>
  `),

  // 3. Çalma elin kapısını, çalarlar kapını.
  'calma-elin-kapisini-calarlar-kapini': wrapSvg(`
    ${groundShadow(164, 410, 74, 14)}
    ${groundShadow(348, 410, 74, 14)}

    <!-- Left Door (Teal) -->
    <g>
      <rect x="98" y="190" width="132" height="214" rx="14" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5"/>
      <rect x="116" y="210" width="96" height="72" rx="6" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4"/>
      <rect x="116" y="302" width="96" height="82" rx="6" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="4"/>
      <!-- Brass ring knocker -->
      <circle cx="164" cy="252" r="14" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="164" cy="252" r="6" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="3"/>
    </g>

    <!-- Right Door (Terracotta) -->
    <g>
      <rect x="282" y="190" width="132" height="214" rx="14" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5"/>
      <rect x="300" y="210" width="96" height="72" rx="6" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="4"/>
      <rect x="300" y="302" width="96" height="82" rx="6" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="348" cy="252" r="14" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="4"/>
      <circle cx="348" cy="252" r="6" fill="${C.terracottaDark}" stroke="${C.ink}" stroke-width="3"/>
    </g>

    <!-- Knocking hands & sound ticks -->
    <g>
      <!-- Left sleeve & knocking fist -->
      <path d="M126 322 L152 284 L174 298 L148 336 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="164" cy="278" r="17" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.5"/>
      <path d="M156 270 L156 286 M164 268 L164 286 M172 270 L172 284" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M132 252 L120 242 M136 276 L118 276 M196 252 L208 242" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round"/>

      <!-- Right sleeve & knocking fist -->
      <path d="M386 322 L360 284 L338 298 L364 336 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="348" cy="278" r="17" fill="${C.cream}" stroke="${C.ink}" stroke-width="4.5"/>
      <path d="M340 270 L340 284 M348 268 L348 286 M356 270 L356 286" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M316 252 L304 242 M380 252 L392 242 M376 276 L394 276" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round"/>
    </g>

    <!-- Looping boomerang cause-and-effect arc overhead -->
    <path d="M166 168 C166 96 346 96 346 160" stroke="${C.ink}" stroke-width="4.5" stroke-dasharray="10 10" stroke-linecap="round" fill="none"/>
    <path d="M332 146 L346 164 L360 146" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    ${sparkle(256, 114, 12, C.ochre)}
  `),

  // 4. El elden üstündür.
  'el-elden-ustundur': wrapSvg(`
    ${groundShadow(256, 426, 110, 14)}

    <!-- Bottom Hand holding 1 tan ball -->
    <g>
      <path d="M126 394 L182 394 L204 366 L264 366 C276 366 280 382 266 386 L236 390 L282 396 C294 398 292 414 276 414 L184 414 L126 418 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="242" cy="346" r="20" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    <!-- Middle Hand balancing 2 teal balls -->
    <g>
      <path d="M386 286 L326 286 L304 260 L246 260 C234 260 230 276 244 280 L274 284 L228 290 C216 292 218 308 234 308 L326 308 L386 312 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="248" cy="238" r="18" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5"/>
      <circle cx="290" cy="238" r="18" fill="${C.sage}" stroke="${C.ink}" stroke-width="4.5"/>
    </g>

    <!-- Top Hand effortlessly holding radiant golden star -->
    <g>
      <path d="M132 178 L194 178 L216 154 L272 154 C284 154 288 170 274 174 L244 178 L286 184 C298 186 296 202 280 202 L192 202 L132 206 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Big 5-point star -->
      <path d="M256 76 L267 104 L298 106 L274 125 L282 154 L256 138 L230 154 L238 125 L214 106 L245 104 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      ${sparkle(194, 102, 10, C.ochreLight)}
      ${sparkle(318, 102, 10, C.ochreLight)}
    </g>
  `),

  // 5. Gülme komşuna, gelir başına.
  'gulme-komsuna-gelir-basina': wrapSvg(`
    ${groundShadow(170, 396, 86, 14)}
    ${groundShadow(344, 396, 86, 14)}

    <!-- Left side: Slipping banana peel 1 & comical falling hat/shoe -->
    <g>
      <!-- Flying striped shoe -->
      <g transform="rotate(-32 162 184)">
        <path d="M118 196 L184 196 C198 196 204 182 192 174 L168 164 L132 164 L118 196 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M116 196 L200 196 L200 206 L116 206 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
      </g>
      ${motionArc('M112 248 Q126 212 162 214', 4)}
      <!-- Banana peel 1 -->
      <path d="M148 332 C152 308 168 308 172 332 C192 350 218 372 206 384 C192 388 176 368 164 358 C154 368 134 390 120 382 C110 370 132 348 148 332 Z" fill="${C.ochre}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <path d="M158 358 C164 374 166 386 154 390" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>
      ${sparkle(116, 304, 11, C.terracotta)}
    </g>

    <!-- Right side: Laughing character ignoring second peel under its own foot -->
    <g>
      <!-- Cozy shoulder torso attached to laughing head -->
      <path d="M276 294 C282 248 304 234 334 234 C364 234 386 252 392 294 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Pointing arm attached cleanly to shoulder -->
      <path d="M286 252 L238 240 C226 238 226 254 238 256 L282 270" fill="${C.tan}" stroke="${C.ink}" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Laughing head -->
      <circle cx="332" cy="182" r="54" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Cheeky hair tuft -->
      <path d="M312 130 Q332 110 352 130" stroke="${C.ink}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Laughing squeezed eyes -->
      <path d="M302 174 Q314 162 326 174" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M342 174 Q354 162 366 174" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <!-- Wide open laughing mouth -->
      <path d="M304 192 Q334 230 364 192 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Second banana peel waiting directly underneath right side -->
      <path d="M332 336 C336 314 352 314 356 336 C374 352 396 372 384 384 C370 388 356 368 346 360 C336 370 318 390 306 382 C296 370 316 350 332 336 Z" fill="${C.ochreLight}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
      <!-- Boomerang loop indicator from left peel to right peel -->
      ${motionArc('M216 378 Q258 408 298 378', 4, '8 8')}
    </g>
  `),

  // 6. Huylu huyundan vazgeçmez.
  'huylu-huydan-vazgecmez': wrapSvg(`
    ${groundShadow(240, 412, 144, 16)}

    <!-- Unraveled terracotta yarn thread looping across bottom -->
    <path d="M126 392 C164 416 206 366 254 390 C296 410 338 386 362 368" stroke="${C.terracotta}" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M126 392 C164 416 206 366 254 390 C296 410 338 386 362 368" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round" fill="none"/>

    <!-- Sitting proper cat with formal teal bow tie -->
    <g>
      <!-- Tail curled neatly -->
      <path d="M158 352 C110 344 106 286 142 282" stroke="${C.ink}" stroke-width="18" stroke-linecap="round" fill="none"/>
      <path d="M158 352 C110 344 106 286 142 282" stroke="${C.tan}" stroke-width="10" stroke-linecap="round" fill="none"/>
      <!-- Cat torso -->
      <path d="M156 376 C152 296 176 238 222 238 C268 238 286 296 280 376 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Cream belly patch -->
      <ellipse cx="220" cy="318" rx="34" ry="48" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <!-- Cat head & pointy ears -->
      <path d="M170 166 L164 114 L204 142 C214 138 232 138 242 142 L282 114 L276 166 C290 182 290 212 272 228 C254 242 192 242 174 228 C156 212 156 182 170 166 Z" fill="${C.tan}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Inner ears -->
      <path d="M174 156 L172 128 L194 144 Z" fill="${C.terracotta}"/>
      <path d="M272 156 L274 128 L252 144 Z" fill="${C.terracotta}"/>
      <!-- Wide focused eyes eyeing the yarn ball! -->
      <circle cx="204" cy="186" r="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="246" cy="186" r="11" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
      <circle cx="208" cy="188" r="5.5" fill="${C.ink}"/>
      <circle cx="250" cy="188" r="5.5" fill="${C.ink}"/>
      <!-- Nose & whiskers -->
      <path d="M220 202 L230 202 L225 208 Z" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="2.5"/>
      <path d="M148 194 L176 198 M148 208 L176 206 M274 198 L302 194 M274 206 L302 208" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
      <!-- Formal Deep Teal Bow Tie -->
      <path d="M196 236 L224 250 L196 264 Z M252 236 L224 250 L252 264 Z" fill="${C.teal}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="224" cy="250" r="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="3.5"/>
      <!-- Playful extended paw swatting the yarn ball -->
      <path d="M266 286 Q304 290 324 318" stroke="${C.ink}" stroke-width="22" stroke-linecap="round" fill="none"/>
      <path d="M266 286 Q304 290 324 318" stroke="${C.tan}" stroke-width="12" stroke-linecap="round" fill="none"/>
      <circle cx="326" cy="322" r="12" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
    </g>

    <!-- Rolling terracotta yarn ball -->
    <g>
      <circle cx="364" cy="354" r="38" fill="${C.terracotta}" stroke="${C.ink}" stroke-width="5.5"/>
      <path d="M334 338 Q364 326 392 344 M328 356 Q364 348 398 364 M344 378 Q368 370 390 378 M352 322 Q364 352 346 386" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round" fill="none"/>
      ${motionArc('M386 304 Q404 316 408 336', 3.5)}
    </g>
  `),

  // 7. Yuvarlanan taş yosun tutmaz.
  'yuvarlanan-tas-yosun-tutmaz': wrapSvg(`
    ${groundShadow(168, 366, 78, 16)}
    ${groundShadow(346, 384, 72, 16)}

    <!-- Gentle hillside slope line -->
    <path d="M80 236 L284 376 L432 376" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round" fill="none"/>

    <!-- Stationary sleeping rock covered in lush sage moss on the right -->
    <g>
      <path d="M294 376 C290 318 324 274 366 276 C406 278 424 322 418 376 Z" fill="${C.tanDark}" stroke="${C.ink}" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Cozy sage moss blanket on top & side -->
      <path d="M306 318 C306 288 336 272 366 276 C398 280 412 302 406 324 C394 334 382 322 370 330 C358 338 344 324 332 332 C318 338 308 330 306 318 Z" fill="${C.sage}" stroke="${C.ink}" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Sleepy closed eyes -->
      <path d="M332 344 Q340 352 348 344 M368 344 Q376 352 384 344" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round" fill="none"/>
      <!-- Little leafy sprout on moss -->
      <path d="M366 274 Q366 254 380 248" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="384" cy="246" rx="10" ry="6" transform="rotate(-20 384 246)" fill="${C.sageLight}" stroke="${C.ink}" stroke-width="3.2"/>
    </g>

    <!-- Fast rolling lively round boulder zooming down slope -->
    <g transform="rotate(24 176 238)">
      <circle cx="176" cy="238" r="56" fill="${C.tealMid}" stroke="${C.ink}" stroke-width="5.5"/>
      <!-- Cheerful rock spots & happy eyes -->
      <circle cx="156" cy="218" r="8" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="198" cy="258" r="10" fill="${C.tealLight}" stroke="${C.ink}" stroke-width="3"/>
      <circle cx="164" cy="242" r="4.5" fill="${C.ink}"/>
      <circle cx="192" cy="242" r="4.5" fill="${C.ink}"/>
      <path d="M168 256 Q178 266 188 256" stroke="${C.ink}" stroke-width="3.8" stroke-linecap="round" fill="none"/>
    </g>

    <!-- Motion speed lines & dust puffs -->
    ${motionArc('M108 176 Q142 146 192 152', 4)}
    ${motionArc('M96 206 L112 206 M88 232 L108 232', 4)}
    <circle cx="102" cy="274" r="14" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/>
    <circle cx="82" cy="260" r="9" fill="${C.cream}" stroke="${C.ink}" stroke-width="3.5"/>
    ${sparkle(226, 166, 10, C.ochreLight)}
  `),
};

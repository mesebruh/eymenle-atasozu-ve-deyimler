export const C = {
  paper: '#F9F4E7',
  ink: '#1E242B',
  terracotta: '#D95D39',
  terracottaDark: '#B84323',
  teal: '#1F4E5F',
  tealMid: '#2E6F7E',
  tealLight: '#8EBAC0',
  ochre: '#E2A03F',
  ochreLight: '#F4CA6E',
  sage: '#5E8C61',
  sageLight: '#89B084',
  tan: '#D9B89C',
  tanDark: '#C19875',
  cream: '#FFFBF2',
  shadow: '#E7DEC9',
};

export function wrapSvg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="720" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" fill="${C.paper}"/>
  ${body}
</svg>`;
}

export function groundShadow(cx, cy, rx, ry) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.shadow}"/>`;
}

export function sparkle(x, y, r = 10, color = C.ochreLight) {
  const inner = r * 0.32;
  const d = [
    `M ${x} ${y - r}`,
    `Q ${x + inner * 0.5} ${y - inner * 0.5} ${x + r} ${y}`,
    `Q ${x + inner * 0.5} ${y + inner * 0.5} ${x} ${y + r}`,
    `Q ${x - inner * 0.5} ${y + inner * 0.5} ${x - r} ${y}`,
    `Q ${x - inner * 0.5} ${y - inner * 0.5} ${x} ${y - r} Z`,
  ].join(' ');
  return `<path d="${d}" fill="${color}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
}

export function motionArc(d, width = 3.5, dash = '') {
  const dashAttr = dash ? ` stroke-dasharray="${dash}"` : '';
  return `<path d="${d}" stroke="${C.ink}" stroke-width="${width}" stroke-linecap="round" fill="none"${dashAttr}/>`;
}

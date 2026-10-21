// ======== YOUR FILE: put this in the same folder as this HTML file ========
const MUSIC = 'music/bday.mp3';
// ==========================================================================

const cv = document.getElementById('c'), g = cv.getContext('2d'), hint = document.getElementById('hint');
const st = document.createElement('canvas'), sg = st.getContext('2d');
let P, W, H, cx, by, ty, cakeTop, stars, bal, sp, conf = [], fw = [], pt = [], smoke = [], lit = true, t = 0, seed = 1;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const R = (x, y, w, h, c, k = g) => { k.fillStyle = c; k.fillRect(Math.round(x), Math.round(y), w, h); };
const disc = (x, y, r, c) => { g.fillStyle = c; for (let d = -r; d <= r; d++) { const w = Math.floor(Math.sqrt(r * r - d * d)); g.fillRect(Math.round(x - w), Math.round(y + d), 2 * w + 1, 1); } };
const COL = ['#ff5d8f', '#ffe066', '#7df9ff', '#9dff8a', '#c792ff', '#ff9f43'];
const BAL = [['#ff5d8f', '#c93a69'], ['#ffe066', '#d4b53a'], ['#7df9ff', '#3ec0d0'], ['#9dff8a', '#5bc24c'], ['#c792ff', '#8f5fd6'], ['#ff9f43', '#d37416']];
const F = {
  H: '101101111101101', A: '010101111101101', P: '110101110100100', Y: '101101010010010',
  B: '110101110101110', I: '111010010010111', R: '110101110101101', T: '111010010010010', D: '110101101101110'
};
const cand = j => cx - 13 + j * 6;
const mkConf = init => ({ x: Math.random() * W, y: init ? Math.random() * H : -3, vy: .25 + Math.random() * .45, p: Math.random() * 6, c: COL[Math.floor(Math.random() * 6)] });

function size() {
  const vw = innerWidth, vh = innerHeight;
  P = Math.max(2, Math.floor(Math.min(vw / 104, vh / 112)));
  W = Math.ceil(vw / P); H = Math.ceil(vh / P);
  cv.width = st.width = W; cv.height = st.height = H;
  cv.style.width = W * P + 'px'; cv.style.height = H * P + 'px';
  g.imageSmoothingEnabled = false;
  cx = W >> 1; by = Math.min(Math.floor(H * .84), Math.floor(H * .5 + 45)); ty = by; cakeTop = by - 52;
  seed = 11;
  stars = Array.from({ length: Math.floor(W * H / 90) }, () => ({ x: Math.floor(rnd() * W), y: Math.floor(rnd() * ty * .8), p: Math.floor(rnd() * 8), b: rnd() < .15 }));
  sp = Array.from({ length: 26 }, () => ({ x: Math.floor(-30 + rnd() * 58), y: Math.floor(-10 + rnd() * 3), c: ['#ffe066', '#7df9ff', '#fff', '#9dff8a', '#ff5d8f'][Math.floor(rnd() * 5)] }));
  const step = W < 130 ? 7 : 13;
  bal = [];
  [-1, 1].forEach(s => [0, 1, 2].forEach(i => {
    const x = Math.min(Math.max(cx + s * (46 + i * step), 8), W - 8);
    bal.push({ x, y: by - 58 - i * 7 - rnd() * 10, p: rnd() * 6, c: BAL[(i * 2 + (s > 0 ? 1 : 0)) % 6] });
  }));
  if (!conf.length || conf.length > W) conf = Array.from({ length: Math.floor(W / 3) }, () => mkConf(true));
  buildStatic();
}

function buildStatic() {
  const k = sg, bands = ['#0a0920', '#100d30', '#171243', '#221a59', '#32257a', '#47349a'], bh = Math.ceil(ty / bands.length);
  bands.forEach((c, i) => {
    R(0, i * bh, W, bh, c, k);
    if (i) for (let x = 0; x < W; x++) for (let y = 0; y < 2; y++) if ((x + y) % 2 === 0) R(x, i * bh + y, 1, 1, bands[i - 1], k);
  });
  const mx = Math.min(W - 12, cx + 60), my = Math.round(ty * .22);
  for (let dy = -7; dy <= 7; dy++) for (let dx = -7; dx <= 7; dx++) if (dx * dx + dy * dy <= 49) R(mx + dx, my + dy, 1, 1, (dx + dy * .6) > 3 ? '#d9d3a6' : '#f4efd0', k);
  R(mx - 3, my - 3, 2, 2, '#d9d3a6', k); R(mx + 2, my + 2, 2, 1, '#d9d3a6', k); R(mx - 1, my + 3, 1, 1, '#d9d3a6', k);
  
  const h1 = x => ty - 10 - Math.round(Math.sin(x / 17) * 4 + Math.sin(x / 7 + 1) * 2 + 8);
  const h2 = x => ty - 6 - Math.round(Math.sin(x / 11 + 2) * 3 + 4);
  for (let x = 0; x < W; x++) { R(x, h1(x), 1, ty - h1(x), '#1a1448', k); R(x, h2(x), 1, ty - h2(x), '#120d36', k); }
  seed = 5;
  for (let x = 6; x < W; x += 14 + Math.floor(rnd() * 14)) {
    const b = h2(x) + 1, ph = 7 + Math.floor(rnd() * 4);
    for (let j = 0; j < ph; j++) { const w = 1 + j; R(x - (w >> 1), b - ph + j, w, 1, '#0b0824', k); }
    R(x, b, 1, 2, '#0b0824', k);
  }
  R(0, ty, W, H - ty, '#6b4429', k); R(0, ty, W, 1, '#8a5a38', k); R(0, ty + 1, W, 1, '#7a4e30', k);
  for (let x = 11; x < W; x += 23) R(x, ty + 3, 1, H - ty, '#573620', k);
  for (let i = 0; i < W * (H - ty) / 60; i++) R(rnd() * W, ty + 3 + rnd() * (H - ty), 3 + Math.floor(rnd() * 4), 1, '#5d3b23', k);
}

function tier(w, h, yb, main, dark, light) {
  const x = cx - (w >> 1), y = yb - h, dw = Math.ceil(w * .2);
  R(x, y, w, h, main); R(x + w - dw, y, dw, h, dark); R(x, y, 1, h, light); R(x, yb - 1, w, 1, dark);
  R(x - 1, y, w + 2, 3, '#fff6fb'); R(x - 1, y + 2, w + 2, 1, '#ffd1e6');
  for (let i = 2; i < w - 3; i += 5) { const l = 2 + ((i * 7) % 3); R(x + i, y + 3, 3, l, '#fff6fb'); R(x + i, y + 2 + l, 3, 1, '#ffd1e6'); }
  for (let i = 3; i < w - 3; i += 5) R(x + i, yb - 3, 2, 2, '#fff6fb');
}

function cake() {
  R(cx - 41, by, 82, 2, '#00000066');
  R(cx - 38, by - 3, 76, 3, '#e8ecff'); R(cx - 38, by - 1, 76, 1, '#a9b1e6'); R(cx - 36, by - 4, 72, 1, '#fff');
  tier(64, 14, by - 3, '#7b4a2e', '#5e3620', '#9a6038');
  sp.forEach(s => R(cx + s.x, by + s.y, 2, 1, s.c));
  tier(46, 12, by - 17, '#f48fb1', '#d6628f', '#ffb3d0');
  for (let i = -18; i <= 14; i += 4) R(cx + i, by - 23, 2, 2, '#fff');
  tier(30, 11, by - 29, '#c6a7ff', '#9b7bd6', '#e1d0ff');
  for (let i = -12; i <= 10; i += 6) R(cx + i + 3, by - 35, 1, 1, '#ffe066');
  for (let j = 0; j < 5; j++) {
    const x = cand(j);
    for (let r = 0; r < 6; r++) R(x, by - 46 + r, 2, 1, r % 2 ? '#fff' : COL[(j + 1) % 6]);
    R(x, by - 47, 1, 1, '#222');
  }
}

function flames() {
  if (!lit) return;
  for (let j = 0; j < 5; j++) {
    const x = cand(j), f = ((t >> 1) + j) % 4;
    disc(x + 1, by - 49, 8, 'rgba(255,190,80,0.05)'); disc(x + 1, by - 49, 4, 'rgba(255,200,90,0.07)');
    R(x, by - 48, 2, 1, '#fff7c2'); R(x, by - 49, 2, 1, '#ffb02e');
    R(x + (f & 1), by - 50, 1, 1, '#ff8a1f'); R(x + (f === 1 ? 1 : 0), by - 51, 1, 1, '#ff5a1f');
    if (f === 2) R(x, by - 52, 1, 1, '#ff5a1f');
  }
}

function balloon(b) {
  const y = b.y + Math.sin(t / 20 + b.p) * 3, x = b.x + Math.sin(t / 31 + b.p) * 1.5, rx = 5, ry = 6;
  for (let i = ty - (y + ry + 3); i >= 0; i--) { const yy = y + ry + 3 + (ty - (y + ry + 3) - i); R(x + Math.round(Math.sin(yy / 4 + t / 15 + b.p) * 1.2), yy, 1, 1, 'rgba(220,215,255,0.55)'); }
  for (let d = -ry; d <= ry; d++) {
    const w = Math.floor(rx * Math.sqrt(1 - d * d / (ry * ry)) + .5), m = Math.ceil(w / 2);
    R(x - w, y + d, 2 * w + 1, 1, b.c[0]); R(x + m, y + d, w - m + 1, 1, b.c[1]);
  }
  R(x - 3, y - 3, 1, 2, '#ffffffcc'); R(x - 2, y - 4, 1, 1, '#ffffffcc');
  R(x - 1, y + ry + 1, 3, 1, b.c[1]); R(x, y + ry + 2, 1, 1, b.c[1]);
}

function bunting() {
  for (let x = 0; x < W; x++) R(x, 1 + Math.round(3 * Math.sin(Math.PI * ((x % 52) / 52))), 1, 1, '#d9d3ff');
  for (let x = 3, i = 0; x < W - 5; x += 6, i++) {
    const y = 1 + Math.round(3 * Math.sin(Math.PI * ((x % 52) / 52))) + 1, c = COL[i % 6];
    for (let k = 0; k < 3; k++) R(x + k, y + k, 5 - 2 * k, 1, c);
  }
}

function title() {
  const lines = W >= 124 ? ['HAPPY BIRTHDAY'] : ['HAPPY', 'BIRTHDAY'];
  const y0 = Math.max(13, Math.floor(cakeTop / 2 - lines.length * 6));
  for (let pass = 0; pass < 2; pass++) lines.forEach((s, li) => {
    const x0 = cx - ((s.length * 8 - 2) >> 1);
    [...s].forEach((ch, i) => {
      if (ch === ' ') return;
      const m = F[ch], yy = y0 + li * 14 + Math.round(Math.sin(t / 5 + i * .7 + li) * 1.5), c = COL[(i + (t >> 3)) % 6];
      for (let k = 0; k < 15; k++) if (m[k] === '1') {
        const px = x0 + i * 8 + (k % 3) * 2, py = yy + Math.floor(k / 3) * 2;
        if (pass === 0) R(px + 1, py + 1, 2, 2, '#000000aa'); else R(px, py, 2, 2, c);
      }
    });
  });
}

function rocket(x) {
  fw.push({ x: x ?? 8 + Math.random() * (W - 16), y: ty - 4, vy: -(2.2 + Math.random() * .6), ty: 6 + Math.random() * ty * .35, c: COL[Math.floor(Math.random() * 6)], tr: [] });
}

function boom(r) {
  for (let i = 0; i < 30; i++) {
    const a = i / 30 * Math.PI * 2 + Math.random() * .2, s = .5 + Math.random() * .9;
    pt.push({ x: r.x, y: r.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, l: 34 + Math.random() * 10, c: i % 3 ? r.c : '#fff' });
  }
}

function tick() {
  t++;
  if (t % (lit ? 110 : 40) === 0) rocket();
  conf.forEach(p => { p.y += p.vy; p.x += Math.sin(t / 9 + p.p) * .3; if (p.y > H) { if (p.tmp) p.dead = 1; else { p.y = -3; p.x = Math.random() * W; } } });
  conf = conf.filter(p => !p.dead);
  smoke.forEach(p => { p.y -= .35; p.x += Math.sin(t / 3 + p.y) * .25; p.a -= .03; });
  smoke = smoke.filter(p => p.a > 0);
  fw.forEach(r => { r.y += r.vy; r.tr.push([r.x, r.y]); if (r.tr.length > 5) r.tr.shift(); if (r.y <= r.ty) { boom(r); r.dead = 1; } });
  fw = fw.filter(r => !r.dead);
  pt.forEach(p => { p.x += p.vx; p.y += p.vy; p.vx *= .985; p.vy = p.vy * .985 + .025; p.l--; });
  pt = pt.filter(p => p.l > 0);
  draw();
}

function draw() {
  g.drawImage(st, 0, 0);
  stars.forEach(s => {
    const on = (t / 6 + s.p) % 8 < 5, c = on ? '#fff' : '#5b57a0';
    R(s.x, s.y, 1, 1, c); if (s.b && on) { R(s.x - 1, s.y, 3, 1, c); R(s.x, s.y - 1, 1, 3, c); }
  });
  fw.forEach(r => { r.tr.forEach((q, i) => { g.globalAlpha = (i + 1) / 6; R(q[0], q[1], 1, 1, '#ffe9a8'); }); g.globalAlpha = 1; });
  pt.forEach(p => { g.globalAlpha = Math.min(1, p.l / 18); R(p.x, p.y, 1, 1, p.c); }); g.globalAlpha = 1;
  bunting();
  bal.forEach(balloon);
  cake(); flames();
  smoke.forEach(p => { g.globalAlpha = p.a; R(p.x, p.y, 2, 2, '#cfcfe6'); }); g.globalAlpha = 1;
  conf.forEach(p => R(p.x, p.y, 1, 2, p.c));
  title();
}

let ac;
function tone(seq) {
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    seq.forEach((f, i) => {
      const o = ac.createOscillator(), n = ac.createGain(), s = ac.currentTime + i * .14;
      o.type = 'square'; o.frequency.value = f; n.gain.setValueAtTime(.04, s); n.gain.exponentialRampToValueAtTime(.0001, s + .13);
      o.connect(n); n.connect(ac.destination); o.start(s); o.stop(s + .14);
    });
  } catch (e) {}
}

function toggle() {
  if (lit) {
    lit = false;
    for (let j = 0; j < 5; j++) for (let k = 0; k < 6; k++) smoke.push({ x: cand(j) + Math.random() * 2, y: by - 50 - k * 2, a: .9 - k * .05 });
    for (let i = 0; i < 5; i++) setTimeout(() => rocket(10 + (W - 20) * (i + .5) / 5), i * 220);
    for (let i = 0; i < 70; i++) conf.push({ ...mkConf(), y: -Math.random() * 30, tmp: true });
    hint.textContent = 'make a wish!  tap to relight';
    tone([784, 659, 523, 392]);
  } else {
    lit = true; hint.textContent = 'click the cake for a surprise!';
    tone([392, 523, 659, 784]);
  }
}

const pop = document.getElementById('pop');
const inCake = e => { const lx = e.clientX / P, ly = e.clientY / P; return Math.abs(lx - cx) <= 41 && ly >= by - 53 && ly <= by + 2; };
function openPop() {
  if (lit) toggle();
  for (let i = 0; i < 50; i++) conf.push({ ...mkConf(), y: -Math.random() * 30, tmp: true });
  setTimeout(() => pop.classList.add('show'), 350);
}
const closePop = () => pop.classList.remove('show');
pop.addEventListener('pointerdown', e => { e.stopPropagation(); if (!e.target.closest('.gift')) closePop(); });

addEventListener('pointerdown', e => {
  if (pop.classList.contains('show')) return;
  if (inCake(e)) { openPop(); return; }
  toggle();
});
addEventListener('keydown', e => {
  if (e.code === 'Escape' || e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    if (pop.classList.contains('show')) closePop();
    else if (e.code !== 'Escape') toggle();
  }
});

const aud = new Audio(), mb = document.getElementById('mus');
aud.loop = true; aud.volume = .6;
let musicOK = false;
const mlabel = () => { mb.textContent = aud.paused ? 'MUSIC OFF' : 'MUSIC ON'; };
aud.addEventListener('canplay', () => { musicOK = true; mlabel(); });
aud.addEventListener('play', mlabel); aud.addEventListener('pause', mlabel);
aud.src = MUSIC;

mb.addEventListener('pointerdown', e => e.stopPropagation());
mb.addEventListener('click', () => {
  if (!musicOK) return;
  if (aud.paused) { aud.play().catch(() => {}); } else { aud.pause(); }
});

addEventListener('pointerdown', e => {
  if (e.target === mb) return;
  if (musicOK && aud.paused) {
    aud.play().catch(() => {});
  }
}, true);

addEventListener('resize', size);
size(); draw();

// --- Loading Screen Simulation ---
window.addEventListener('load', () => {
  const fill = document.getElementById('progress-fill');
  const screen = document.getElementById('loading-screen');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('fade-out');
        setTimeout(() => screen.remove(), 500);
      }, 300);
    }
    fill.style.width = progress + '%';
  }, 120);
});

let last = 0;
(function loop(ts) {
  requestAnimationFrame(loop);
  if (ts - last < 33) return;
  last = ts;
  tick();
})(0);
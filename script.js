// ===== YOUR FILES (same folder as this page) =====
const PHOTOS = Array.from({ length: 12 }, (_, i) => `photos/photo${i + 1}.jpeg`);

// Songs the person can pick from
const TRACKS = [
  { name: 'Dance With My Father', src: 'music/dance_with_my_father.mp3' },
  { name: 'Happy Birthday', src: 'music/happy_birthday.mp3' }
];

// ===== Tagalog letters, one per photo (edit freely) =====
const LETTERS = [
  'Pader, sa bawat larawan mo, nakikita ko ang isang taong tahimik na lumalaban sa buhay para sa pamilya. Hindi mo kailangang magsalita nang marami para ipakita kung gaano mo sila kamahal.',
  'Ikaw ang klase ng Pader na hindi kailangang maging perpekto para maging kahanga-hanga. Sa simpleng pag-aalaga mo sa amin, ramdam namin kung gaano kami kahalaga sa iyo.',
  'Kilala kita bilang isang taong matatag kahit maraming pinagdadaanan. Kahit pagod ka na, patuloy ka pa ring nagsisikap para makita kaming masaya.',
  'Ang sipag at tiyaga mo ang isa sa pinakamagandang halimbawang natutuhan ko sa iyo. Itinuro mo sa akin na ang tunay na pagmamahal ay hindi lang sinasabi, kundi ipinapakita sa gawa.',
  'Pader, hinahangaan ko ang kabutihan ng puso mo. Kahit marami kang iniisip, patuloy ka pa ring nagbibigay ng oras at pagmamahal sa mga taong mahalaga sa iyo.',
  'Ikaw ang sandigan ng sating pamilya.Salamat dahil palagi mong akong sinusubukang maging matatag para sa atin.',
  'Hindi man natin laging nasasabi ang lahat, mahalaga sa akin ang bawat sandaling kasama ka. Balang araw, ang mga simpleng alaalang ito ang lalo kong pahahalagahan.',
  'Alam kong hindi ako palaging madaling intindihin, Pader. Pero salamat dahil patuloy mo akong ginagabayan, pinapaalalahanan, at minamahal kahit minsan ay pasaway  ako.',
  'Sa iyo ko natutuhan ang kahalagahan ng pagiging responsable, matiyaga, at mabuting tao. Sana, sa paglaki ko, maipakita ko sa iyo na hindi nasasayang ang lahat ng itinuro mo.',
  'Ang hiling ko lang ay manatili kang malusog, ligtas, at masaya. Deserve mong maranasan ang kapayapaan at pagmamahal na matagal mo nang ibinibigay sa ating pamilya.',
  'Para sa akin, hindi lang ikaw basta Pader. Ikaw ang isa sa mga taong pinakahinahangaan ko, ang taong gusto kong mapasaya, at ang taong habambuhay kong ipagmamalaki.',
  'Happy Birthday Pader, Salamat sa pagiging masipag, mabuting ama, sakripisyo, at pagmamahal. Hindi man ko kayang tumbasan ang lahat ng nagawa mo para sa akin at kina lolo at lola, sisikapin kong iparamdam sa iyo kung gaano ka kahalaga. Mahal na mahal kita, Pader. ❤️🎂'
];

const LETTERS_EN = [
  'Dad, in every picture of you, I see someone who quietly struggles through life for his family. You do not have to say much to show how deeply you love them.',
  'You are the kind of dad who does not have to be perfect to be amazing. Through the simple ways you care for us, we feel how much we mean to you.',
  'I know you as someone who stays strong despite all the challenges you face. Even when you are tired, you keep working hard to see us happy.',
  'Your hard work and perseverance are among the greatest examples you have given me. You taught me that true love is not just spoken but shown through actions.',
  'Dad, I admire the kindness in your heart. Even when you have a lot on your mind, you continue to give your time and love to the people who matter to you.',
  'You are the pillar of our family. Just having you around gives us a sense of peace that is hard to explain. Thank you for always trying to stay strong for us.',
  'Even if we do not always say everything we feel, every moment I spend with you means so much to me. Someday, I know I will treasure these simple memories even more.',
  'I know I am not always easy to understand, Dad. But thank you for continuing to guide me, remind me of what matters, and love me even when I can be stubborn.',
  'You taught me the importance of being responsible, patient, and kind. As I grow older, I hope to show you that none of the lessons you taught me have gone to waste.',
  'My only wish is for you to stay healthy, safe, and happy. You deserve to experience the peace and love you have given our family for so long.',
  'To me, you are more than just a dad. You are one of the people I admire most, someone I want to make happy, and someone I will always be proud of.',
  'Happy birthday, Pader! Thank you for being a hardworking and loving father, for your sacrifices, and for all the love you have given me and Lolo and Lola. I may never be able to repay everything you have done for us, but I will do my best to show you how much you mean to me. I love you so much, Pader. ❤️🎂'
];

let lang = 'tl';
const TXT = () => (lang === 'tl' ? LETTERS : LETTERS_EN)[cur % LETTERS.length];

// ---------- pixel cake loader ----------
const cakeCanvas = document.getElementById('cake'), ck = cakeCanvas.getContext('2d');
const CKR = (x, y, w, h, c) => { ck.fillStyle = c; ck.fillRect(x, y, w, h); };

function drawCake() {
  ck.clearRect(0, 0, 48, 48);
  // Plate
  CKR(8, 40, 32, 2, '#8a8fc7'); CKR(10, 42, 28, 2, '#4d4f80');
  // Bottom Layer (Chocolate/Base)
  CKR(12, 28, 24, 12, '#8b4513'); CKR(12, 38, 24, 2, '#5c2e0b');
  // Frosting Filling
  CKR(12, 33, 24, 2, '#fff6e0');
  // Top Frosting (Pink)
  CKR(10, 24, 28, 4, '#ff5d8f'); CKR(10, 27, 28, 2, '#d6336c');
  // Drips
  CKR(12, 28, 2, 3, '#ff5d8f'); CKR(18, 28, 3, 4, '#ff5d8f');
  CKR(26, 28, 2, 2, '#ff5d8f'); CKR(32, 28, 3, 3, '#ff5d8f');
  // Cherry on top
  CKR(22, 18, 4, 4, '#ff0044'); CKR(23, 19, 1, 1, '#ffffff'); // cherry highlight
  CKR(24, 14, 2, 4, '#5bc24c'); // stem
  // Candle
  CKR(15, 17, 2, 7, '#ffd24a'); CKR(31, 17, 2, 7, '#7df9ff');
  // Flame
  const flick = (Math.random() > 0.5 ? 1 : 0);
  CKR(15, 13 - flick, 2, 3, '#ff9f43'); CKR(15, 14 - flick, 2, 1, '#ffe066');
  CKR(31, 13 + flick, 2, 3, '#ff9f43'); CKR(31, 14 + flick, 2, 1, '#ffe066');
}

// Simulate Loading Progress
let progress = 0;
const loaderBar = document.getElementById('bar');
const loaderEl = document.getElementById('loader');

const loadIv = setInterval(() => {
  progress += Math.floor(Math.random() * 15) + 5;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadIv);
    setTimeout(() => {
      loaderEl.classList.add('hide');
    }, 400);
  }
  loaderBar.style.width = progress + '%';
}, 120);

// ---------- pixel sky background ----------
const bgc = document.getElementById('bg'), g = bgc.getContext('2d');
let W, H, P = 4, conf = [], t = 0;
const COL = ['#ff5d8f', '#ffe066', '#7df9ff', '#9dff8a', '#c792ff', '#ff9f43'];
const R = (x, y, w, h, c) => { g.fillStyle = c; g.fillRect(Math.round(x), Math.round(y), w, h); };

function bgsize() {
  W = Math.ceil(innerWidth / P);
  H = Math.ceil(innerHeight / P);
  bgc.width = W;
  bgc.height = H;
  g.imageSmoothingEnabled = false;
}

function bgdraw() {
  t++;
  R(0, 0, W, H, '#14113a');
  conf.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .03; p.l--; R(p.x, p.y, 1, 2, p.c); });
  conf = conf.filter(p => p.l > 0);
}

function burst() {
  for (let i = 0; i < 120; i++) {
    const a = Math.random() * Math.PI * 2, s = .6 + Math.random() * 2.2;
    conf.push({ x: W / 2, y: H * .45, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 1.2, l: 60 + Math.random() * 50, c: COL[Math.random() * 6 | 0] });
  }
}

// ---------- pixel gift box ----------
const bx = document.getElementById('box'), k = bx.getContext('2d');
const BR = (x, y, w, h, c) => { k.fillStyle = c; k.fillRect(x, y, w, h); };
let open = 0, opening = false;

function giftdraw() {
  k.clearRect(0, 0, 48, 48);
  const sh = Math.round(open * 16);
  // shadow
  BR(8, 44, 32, 2, '#00000055');
  // body
  BR(7, 26, 34, 18, '#ff5d8f'); BR(33, 26, 8, 18, '#c93a69'); BR(7, 26, 34, 2, '#ffb3d0'); BR(7, 42, 34, 2, '#a82a58'); BR(7, 28, 1, 14, '#ff8fb3');
  BR(21, 26, 6, 18, '#ffd24a'); BR(21, 26, 2, 18, '#fff0a0'); BR(25, 26, 2, 18, '#d4a017');
  if (open > 0) BR(9, 26, 30, 2, '#fff6c2');
  // lid
  const y = 17 - sh;
  BR(4, y, 40, 10, '#ff7aa6'); BR(36, y, 8, 10, '#c93a69'); BR(4, y, 40, 2, '#ffc2d8'); BR(4, y + 8, 40, 2, '#d6628f');
  BR(21, y, 6, 10, '#ffd24a'); BR(21, y, 2, 10, '#fff0a0'); BR(25, y, 2, 10, '#d4a017');
  // bow
  BR(12, y - 9, 10, 9, '#ffd24a'); BR(26, y - 9, 10, 9, '#ffd24a');
  k.clearRect(15, y - 6, 4, 4); k.clearRect(29, y - 6, 4, 4);
  BR(12, y - 9, 10, 2, '#fff0a0'); BR(26, y - 9, 10, 2, '#fff0a0'); BR(18, y - 3, 4, 3, '#d4a017'); BR(26, y - 3, 4, 3, '#d4a017');
  BR(21, y - 6, 6, 6, '#d4a017'); BR(21, y - 6, 2, 2, '#ffe066');
}

// ---------- gallery ----------
const grid = document.getElementById('grid'), gal = document.getElementById('gal'), intro = document.getElementById('intro');

function loadImg(box, src, alt) {
  const im = new Image();
  im.alt = alt;
  im.onload = () => { box.innerHTML = ''; box.appendChild(im); };
  im.src = src;
}

PHOTOS.forEach((src, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'fr';
  b.setAttribute('aria-label', 'Buksan ang liham ' + (i + 1));
  b.innerHTML = '<div class="im">🖼️</div><div class="lb">ALAALA ' + (i + 1) + '</div>';
  loadImg(b.firstChild, src, 'Larawan ' + (i + 1));
  b.addEventListener('click', () => openM(i));
  grid.appendChild(b);
});

function openGift() {
  if (opening) return;
  opening = true;
  intro.classList.add('go');
  document.getElementById('tap').textContent = '';
  let f = 0;
  const iv = setInterval(() => {
    f++;
    open = Math.min(1, f / 10);
    if (f === 6) burst();
    if (f === 16) burst();
    if (f >= 26) {
      clearInterval(iv);
      intro.style.display = 'none';
      gal.classList.add('show');
      scrollTo(0, 0);
    }
  }, 60);
}

intro.addEventListener('click', openGift);
document.getElementById('box').addEventListener('keydown', e => { if (e.key === 'Enter') openGift(); });

// ---------- letter modal (typewriter) ----------
const m = document.getElementById('m'), big = document.getElementById('big'), msg = document.getElementById('msg'), cnt = document.getElementById('cnt');
let cur = 0, typer = null;

function show(i) {
  cur = (i + PHOTOS.length) % PHOTOS.length;
  big.innerHTML = '🖼️';
  loadImg(big, PHOTOS[cur], 'Larawan ' + (cur + 1));
  cnt.textContent = (cur + 1) + ' / ' + PHOTOS.length;
  clearInterval(typer);
  msg.textContent = '';
  msg.classList.remove('done');
  const txt = TXT();
  let n = 0;
  typer = setInterval(() => {
    n++;
    msg.textContent = txt.slice(0, n);
    if (n >= txt.length) { clearInterval(typer); msg.classList.add('done'); }
  }, 28);
}

function setLang(l) {
  lang = l;
  document.getElementById('ltl').classList.toggle('on', l === 'tl');
  document.getElementById('len').classList.toggle('on', l === 'en');
  document.getElementById('to').textContent = l === 'tl' ? 'Mahal kong Tatay,' : 'Dear Dad,';
  document.getElementById('from').innerHTML = l === 'tl' ? 'Nagmamahal,<br>ang iyong anak' : 'With love,<br>your child';
  show(cur);
}

document.getElementById('ltl').onclick = () => setLang('tl');
document.getElementById('len').onclick = () => setLang('en');

function openM(i) { show(i); m.classList.add('show'); }
function closeM() { clearInterval(typer); m.classList.remove('show'); }

document.getElementById('close').onclick = closeM;
document.getElementById('prev').onclick = () => show(cur - 1);
document.getElementById('next').onclick = () => show(cur + 1);
m.addEventListener('pointerdown', e => { if (e.target === m) closeM(); });
msg.addEventListener('click', () => { clearInterval(typer); msg.textContent = TXT(); msg.classList.add('done'); });

addEventListener('keydown', e => {
  if (!m.classList.contains('show')) return;
  if (e.key === 'Escape') closeM();
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});

// ---------- music picker ----------
const aud = new Audio(), mb = document.getElementById('mus'), mp = document.getElementById('mp'), tl = document.getElementById('tl'),
  pp = document.getElementById('pp'), nx = document.getElementById('nx'), vol = document.getElementById('vol');
aud.volume = .6;
let idx = -1, musicOff = false;

function label() {
  const n = idx >= 0 ? TRACKS[idx].name : 'PUMILI NG MUSIKA';
  mb.textContent = '♪ ' + n;
  pp.textContent = aud.paused ? '▶' : '❚❚';
  [...tl.children].forEach((b, i) => b.classList.toggle('on', i === idx));
}

function renderList() {
  tl.innerHTML = '';
  TRACKS.forEach((tr, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'mi' + (tr.bad ? ' bad' : '');
    b.textContent = (tr.bad ? '✕ ' : '♪ ') + tr.name + (tr.bad ? ' (wala ang file)' : '');
    b.addEventListener('click', () => play(i));
    tl.appendChild(b);
  });
  label();
}

function play(i) {
  idx = i;
  musicOff = false;
  const tr = TRACKS[i];
  tr.bad = false;
  aud.src = tr.src;
  aud.play().catch(() => {});
  renderList();
}

aud.addEventListener('error', () => { if (idx >= 0) { TRACKS[idx].bad = true; renderList(); } });
aud.addEventListener('play', label);
aud.addEventListener('pause', label);
aud.addEventListener('ended', () => play((idx + 1) % TRACKS.length));

pp.addEventListener('click', () => {
  if (idx < 0) { play(0); return; }
  if (aud.paused) { musicOff = false; aud.play().catch(() => {}); }
  else { musicOff = true; aud.pause(); }
});

nx.addEventListener('click', () => play((idx + 1) % TRACKS.length));
vol.addEventListener('input', () => { aud.volume = vol.value / 100; });

const mf = document.createElement('input');
mf.type = 'file';
mf.accept = 'audio/*';
mf.multiple = true;
document.getElementById('addm').addEventListener('click', () => { mf.value = ''; mf.click(); });

mf.addEventListener('change', () => {
  const files = [...mf.files];
  if (!files.length) return;
  const first = TRACKS.length;
  files.forEach(f => TRACKS.push({ name: f.name.replace(/\.[^.]+$/, '').slice(0, 28), src: URL.createObjectURL(f) }));
  play(first);
});

mb.addEventListener('click', () => mp.classList.toggle('show'));

let started = false;
addEventListener('pointerdown', e => {
  if (!e.target.closest('.mwrap')) mp.classList.remove('show');
  else return;
  if (!started && !musicOff && idx < 0) { started = true; play(0); }
}, true);

renderList();

addEventListener('resize', bgsize);
bgsize();
let last = 0;
(function loop(ts) {
  requestAnimationFrame(loop);
  if (ts - last < 33) return;
  last = ts;
  bgdraw();
  giftdraw();
  drawCake();
})(0);
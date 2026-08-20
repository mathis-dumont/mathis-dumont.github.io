/* A DPO training run printing itself in the bottom of the left margin.
   Decoration only: it is hidden whenever the margin is too narrow to hold it,
   and it never sits behind the text. */
(function () {
  const canvas = document.getElementById('bg');
  if (!canvas || !canvas.getContext) return;

  const ACCENT = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const COLUMN = 768;          // the 48rem content column
  let SIZE = 11;               // type size, reduced if the margin is tight
  let LH = 17;                 // line height
  const SPEED = 38;            // ms per character
  const REPLAY = 30000;        // ms the finished run stands before typing again

  const LINES = [
    '$ python train.py',
    'loading 9,692 samples',
    'epoch 1/5   loss 0.6931',
    'epoch 2/5   loss 0.5107',
    'epoch 3/5   loss 0.3862',
    'epoch 4/5   loss 0.2934',
    'epoch 5/5   loss 0.2418',
    'eval  accuracy 0.91',
    'saved -> model.pt'
  ];

  let x, w, h, left, baseY, visible, frame;
  let li = 0, ci = 0, shown = [], last = 0, done = false, blink, replay;

  function layout() {
    const d = window.devicePixelRatio || 1;
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * d; canvas.height = h * d;
    x = canvas.getContext('2d');
    x.setTransform(d, 0, 0, d, 0, 0);

    // Fit is measured, not assumed: take the largest type size whose longest
    // line still fits the margin beside the column, and hide if none do.
    const gutter = Math.max(0, (w - COLUMN) / 2);
    let widest = 0;
    visible = false;
    for (const size of [11, 10, 9]) {
      x.font = size + 'px "JetBrains Mono", ui-monospace, monospace';
      widest = Math.max.apply(null, LINES.map(l => x.measureText(l).width));
      if (gutter >= widest + 24) { SIZE = size; LH = Math.round(size * 1.55); visible = true; break; }
    }
    canvas.style.display = visible ? '' : 'none';
    if (!visible) return;
    left = Math.max(12, (gutter - widest) / 2);
    baseY = h - 96;                       // clear of the nav bar
  }

  const hex = a => a.toString(16).padStart(2, '0');

  function draw(t) {
    x.clearRect(0, 0, w, h);
    x.font = SIZE + 'px "JetBrains Mono", ui-monospace, monospace';
    x.textBaseline = 'alphabetic';

    const typing = done ? null : LINES[li].slice(0, ci);
    const all = typing === null ? shown : shown.concat([typing]);

    all.forEach((line, i) => {
      const y = baseY - (all.length - 1 - i) * LH;
      const fresh = i === all.length - 1;
      x.fillStyle = ACCENT + hex(line.startsWith('$') ? (fresh ? 0x8c : 0x66) : (fresh ? 0x62 : 0x42));
      x.fillText(line, left, y);
    });

    if (Math.floor(t / 500) % 2 === 0) {                    // blinking cursor
      const line = all[all.length - 1] || '';
      x.fillStyle = ACCENT + '80';
      x.fillRect(left + x.measureText(line).width + 2, baseY - SIZE + 2, SIZE * 0.55, SIZE);
    }
  }

  function step(t) {
    if (done) return;
    if (t - last < SPEED) return;
    last = t;
    ci++;
    if (ci > LINES[li].length) {
      shown.push(LINES[li]); li++; ci = 0;
      // The run stands finished for a while, with only the cursor moving on a
      // timer rather than a frame loop, then types itself again.
      if (li >= LINES.length) {
        done = true;
        cancelAnimationFrame(frame); frame = null;
        clearInterval(blink);
        blink = setInterval(() => { if (visible) draw(performance.now()); }, 500);
        clearTimeout(replay);
        replay = setTimeout(restart, REPLAY);
      }
    }
  }

  function restart() {
    clearInterval(blink); blink = null;
    shown = []; li = 0; ci = 0; last = 0; done = false;
    if (visible && !frame) run(performance.now());
  }

  function run(t) {
    frame = null;
    if (!visible) return;
    if (!still) step(t || 0);
    draw(t || 0);
    if (!still && !done) frame = requestAnimationFrame(run);
  }

  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      layout();
      if (!visible) return;
      if (done) draw(performance.now());
      else if (!frame) run(performance.now());
    }, 150);
  });

  if (still) { shown = LINES.slice(); done = true; }        // typed already, no motion
  layout();
  run(0);
})();

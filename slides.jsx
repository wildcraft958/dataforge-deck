// ======= DESIGN TOKENS =======
// Palette mined from Pathway's live site CSS. Pathway's brand is light, so the
// canvas is near-white and every accent has to hold contrast against it.
const COLORS = {
  canvas: '#f6f6f6',
  surface: '#ffffff',
  text: '#000000',
  body: '#4b4b4b',
  muted: '#8c8c8c',
  border: '#c8c8c8',
  borderSoft: '#e9e9e9',
  p300: '#88e6ff',
  p400: '#28baff',
  pUI: '#4fbdf0',
  p600: '#0a85eb',
  link: '#1e6bdd',
  linkTint: '#1e6bdd1f',
  violet: '#C061FF',
  nodeIdle: '#B7B7C8',
  edge: '#6E7BB1',
  magenta: '#E561FF',
  cyan: '#61D8FF',
  yellow: '#DBC838',
  red: '#FF6164',
  gradient: 'linear-gradient(180deg, #1e6bdd, #661a55)',
};

const TYPE_SCALE = {
  hero: 148, title: 76, subtitle: 46, lead: 36, body: 30, small: 25, mono: 24, label: 19,
};

const SPACING = {
  paddingX: 104, paddingTop: 64, paddingBottom: 48, titleGap: 44, itemGap: 24,
};

const RADIUS = { card: 24, pill: 999, chip: 16 };

const FONT_DISPLAY = '"Funnel Display", "Open Sauce One", Inter, system-ui, sans-serif';
// "Open Sauce One" is Pathway's own body face. It is not served by Google Fonts,
// so Inter carries the deck and Open Sauce One is used when a machine has it.
const FONT_SANS = '"Open Sauce One", Inter, system-ui, -apple-system, sans-serif';
const FONT_MONO = '"Inconsolata", ui-monospace, "SF Mono", Menlo, monospace';

// ======= PATHWAY WORDMARK =======
// Inlined from pathway.com/assets/design/logo/pathway-logo-dark.svg so the deck
// works with no network. Monochrome by design: it recolors, it never gets tinted.
function PathwayLogo({ h = 44, color = COLORS.text, style = {} }) {
  return (
    <svg viewBox="0 0 650 190" height={h} width={h * (650 / 190)} fill={color}
         role="img" aria-label="Pathway" style={{ display: 'block', ...style }}>
      <path d="M215,120h-5a10,10,0,0,1-10-10V45a5,5,0,0,0-5-5H185A5,5,0,0,0,181,42.07,30,30,0,0,0,170,40H160a30,30,0,0,0-30,30v40a30,30,0,0,0,30,30h10a30,30,0,0,0,20-7.64A30,30,0,0,0,210,140h5a5,5,0,0,0,5-5V125A5,5,0,0,0,215,120Zm-35-10a10,10,0,0,1-10,10H160a10,10,0,0,1-10-10h0V70a10,10,0,0,1,10-10h10a10,10,0,0,1,10,10Z" />
      <path d="M90,40H80A30,30,0,0,0,50,70v50H35a5,5,0,0,0-5,5v10a5,5,0,0,0,5,5H50v20a10,10,0,0,1-10,10H35a5,5,0,0,0-5,5v10a5,5,0,0,0,5,5h5a30,30,0,0,0,30-30V140H90a30,30,0,0,0,30-30V70A30,30,0,0,0,90,40Zm10,70a10,10,0,0,1-10,10H70V70A10,10,0,0,1,80,60H90a10,10,0,0,1,10,10Z" />
      <rect y="120" width="20" height="20" rx="5" />
      <path d="M265,40H250V5a5,5,0,0,0-5-5H235a5,5,0,0,0-5,5V40H215a5,5,0,0,0-5,5V55a5,5,0,0,0,5,5h15v75a5,5,0,0,0,5,5h10a5,5,0,0,0,5-5V60h15a5,5,0,0,0,5-5V45A5,5,0,0,0,265,40Z" />
      <path d="M645,40H635a5,5,0,0,0-5,5v75H610a10,10,0,0,1-10-10h0V45a5,5,0,0,0-5-5H585a5,5,0,0,0-5,5v65a30,30,0,0,0,30,30h20v10a10,10,0,0,1-10,10H585a5,5,0,0,0-5,5v10a5,5,0,0,0,5,5h35a30,30,0,0,0,30-30V45A5,5,0,0,0,645,40Z" />
      <path d="M475,40H465a5,5,0,0,0-5,5v75H440a10,10,0,0,1-10-10h0V45a5,5,0,0,0-5-5H415a5,5,0,0,0-5,5v75H390a10,10,0,0,1-10-10h0V45a5,5,0,0,0-5-5H365a5,5,0,0,0-5,5v65a30,30,0,0,0,30,30h35a5,5,0,0,0,4.05-2.07A30,30,0,0,0,440,140h35a5,5,0,0,0,5-5V45A5,5,0,0,0,475,40Z" />
      <path d="M580,125a5,5,0,0,0-5-5h-5a10,10,0,0,1-10-10V45a5,5,0,0,0-5-5H545a5,5,0,0,0-4,2.07A30,30,0,0,0,530,40H520a30,30,0,0,0-30,30v40a30,30,0,0,0,30,30h10a30,30,0,0,0,20-7.64A30,30,0,0,0,570,140h5a5,5,0,0,0,5-5Zm-40-15a10,10,0,0,1-10,10H520a10,10,0,0,1-10-10h0V70a10,10,0,0,1,10-10h10a10,10,0,0,1,10,10Z" />
      <path d="M320,40H300V5a5,5,0,0,0-5-5H285a5,5,0,0,0-5,5V135a5,5,0,0,0,5,5h10a5,5,0,0,0,5-5V60h20a10,10,0,0,1,10,10v65a5,5,0,0,0,5,5h10a5,5,0,0,0,5-5V70A30,30,0,0,0,320,40Z" />
    </svg>
  );
}

// ======= SHARED CHROME =======
function Frame({ children, style = {} }) {
  return (
    <div style={{
      width: 1920, height: 1080,
      background: COLORS.canvas,
      color: COLORS.text, fontFamily: FONT_SANS,
      position: 'relative', overflow: 'hidden', ...style,
    }}>
      {/* Ambient glows, Pathway blue and Pathway violet, kept very faint on light. */}
      <div style={{ position: 'absolute', width: 1100, height: 1100, borderRadius: '50%', top: -480, right: -280, background: `radial-gradient(circle, ${COLORS.p300}3d, transparent 68%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 820, height: 820, borderRadius: '50%', bottom: -340, left: -240, background: `radial-gradient(circle, ${COLORS.violet}1f, transparent 70%)`, pointerEvents: 'none' }} />
      {/* Subtle grid, masked so it never fights the text. */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(${COLORS.borderSoft} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.borderSoft} 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)',
        opacity: 0.85,
      }} />
      {children}
    </div>
  );
}

function Chrome({ n, section, cite }) {
  return (
    <>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 60,
        background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)',
        borderBottom: `1px solid ${COLORS.borderSoft}`,
        display: 'flex', alignItems: 'center', padding: `0 ${SPACING.paddingX}px`,
        fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: COLORS.muted, zIndex: 10, whiteSpace: 'nowrap', fontWeight: 500,
      }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: COLORS.p600, marginRight: 16, flexShrink: 0 }} />
        <span style={{ color: COLORS.text }}>What BDH Remembers</span>
        <span style={{ margin: '0 14px', color: COLORS.border }}>/</span>
        <span>{section}</span>
        <span style={{ marginLeft: 'auto', color: COLORS.muted }}>DataForge 2026 · Pathway Track</span>
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 56,
        background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)',
        borderTop: `1px solid ${COLORS.borderSoft}`,
        display: 'flex', alignItems: 'center', padding: `0 ${SPACING.paddingX}px`,
        fontFamily: FONT_MONO, fontSize: 21, color: COLORS.muted, zIndex: 10, whiteSpace: 'nowrap',
      }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{cite || 'Source cited beside every claim'}</span>
        <span style={{ marginLeft: 'auto', color: COLORS.body, letterSpacing: '0.08em' }}>{n} / 08</span>
      </div>
    </>
  );
}

function Body({ children, topPad = SPACING.paddingTop, botPad = SPACING.paddingBottom }) {
  return (
    <div style={{
      position: 'absolute', top: 60, left: 0, right: 0, bottom: 56,
      padding: `${topPad}px ${SPACING.paddingX}px ${botPad}px`,
      display: 'flex', flexDirection: 'column', minHeight: 0,
    }}>
      {children}
    </div>
  );
}

function Title({ eyebrow, children, sub, style = {} }) {
  return (
    <div style={{ marginBottom: SPACING.titleGap, flexShrink: 0, ...style }}>
      {eyebrow && (
        <div style={{
          fontSize: TYPE_SCALE.label, color: COLORS.p600, letterSpacing: '0.08em',
          marginBottom: 14, textTransform: 'uppercase', fontWeight: 600,
        }}>{eyebrow}</div>
      )}
      <h1 style={{
        margin: 0, fontFamily: FONT_DISPLAY, fontSize: TYPE_SCALE.title, fontWeight: 500,
        letterSpacing: '-0.02em', lineHeight: 1.04, color: COLORS.text,
      }}>{children}</h1>
      {sub && (
        <div style={{ fontSize: TYPE_SCALE.lead, color: COLORS.body, marginTop: 18, lineHeight: 1.3, maxWidth: 1500 }}>
          {sub}
        </div>
      )}
    </div>
  );
}

function Card({ children, accent, className = '', style = {} }) {
  return (
    <div className={className} style={{
      background: COLORS.surface,
      border: `1px solid ${COLORS.borderSoft}`,
      borderRadius: RADIUS.card,
      borderTop: accent ? `4px solid ${accent}` : `1px solid ${COLORS.borderSoft}`,
      boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      ...style,
    }}>{children}</div>
  );
}

function Pill({ children, color = COLORS.p600, tint, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '10px 22px', borderRadius: RADIUS.pill,
      border: `1px solid ${color}`, color,
      background: tint || 'transparent',
      fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
      ...style,
    }}>{children}</span>
  );
}

// Source line rendered next to the claim it supports, never as a bibliography.
function Cite({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: FONT_MONO, fontSize: 21, color: COLORS.muted, lineHeight: 1.35, ...style,
    }}>{children}</div>
  );
}

// ======= ICONS =======
const Icon = {
  Arrow: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill="none" stroke={p.c || 'currentColor'} strokeWidth={p.w || 1.8} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
    </svg>
  ),
  Check: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill="none" stroke={p.c || 'currentColor'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  X: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill="none" stroke={p.c || 'currentColor'} strokeWidth="2.4" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
  ),
  Grid: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill="none" stroke={p.c || 'currentColor'} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /></svg>
  ),
  List: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill="none" stroke={p.c || 'currentColor'} strokeWidth="1.8" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="3.5" cy="6" r="1.2" fill={p.c || 'currentColor'} /><circle cx="3.5" cy="12" r="1.2" fill={p.c || 'currentColor'} /><circle cx="3.5" cy="18" r="1.2" fill={p.c || 'currentColor'} /></svg>
  ),
  Play: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill={p.c || 'currentColor'}><path d="M8 5.5v13l11-6.5z" /></svg>
  ),
  Link: (p = {}) => (
    <svg viewBox="0 0 24 24" width={p.s || 28} height={p.s || 28} fill="none" stroke={p.c || 'currentColor'} strokeWidth="1.8" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" /><path d="M14 11a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 21.07l1.5-1.5" /></svg>
  ),
};

// ======= SHARED VISUALS =======
// The published BDH-CQ ordering ladder. Lengths 2 to 5 are saturated, then the
// score falls away. Fractions come from the BDH-CQ report ladder experiment.
const LADDER = [
  { x: 2, y: 100, raw: '36/36' },
  { x: 3, y: 100, raw: '36/36' },
  { x: 4, y: 100, raw: '36/36' },
  { x: 5, y: 100, raw: '36/36' },
  { x: 6, y: 80.6, raw: '29/36' },
  { x: 7, y: 33.3, raw: '8/24' },
  { x: 8, y: 4.2, raw: '1/24' },
];

function CliffChart({ w, h, stroke = COLORS.violet, strokeWidth = 5, fillOpacity = 0.1, axes = false, dots = false, animate = true }) {
  const padL = axes ? 74 : 0;
  const padB = axes ? 46 : 0;
  const padT = dots ? 16 : 0;
  const innerW = w - padL;
  const innerH = h - padB - padT;
  const px = (x) => padL + ((x - 2) / 6) * innerW;
  const py = (y) => padT + innerH - (y / 100) * innerH;
  const line = LADDER.map((p, i) => `${i === 0 ? 'M' : 'L'}${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`).join(' ');
  const area = `${line} L${px(8).toFixed(1)},${(padT + innerH).toFixed(1)} L${px(2).toFixed(1)},${(padT + innerH).toFixed(1)} Z`;
  const gid = `cliff-${Math.round(w)}-${Math.round(h)}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity={fillOpacity} />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {axes && [0, 25, 50, 75, 100].map((t) => (
        <g key={t}>
          <line x1={padL} y1={py(t)} x2={w} y2={py(t)} stroke={COLORS.borderSoft} strokeWidth="1" />
          <text x={padL - 14} y={py(t) + 7} textAnchor="end" fontSize="20" fill={COLORS.muted} fontFamily={FONT_MONO}>{t}</text>
        </g>
      ))}
      <path d={area} fill={`url(#${gid})`} />
      <path className={animate ? 'anim-el anim-draw' : undefined} d={line} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
      {dots && LADDER.map((p) => (
        <circle key={p.x} cx={px(p.x)} cy={py(p.y)} r="7" fill={COLORS.surface} stroke={stroke} strokeWidth="4" />
      ))}
      {axes && LADDER.map((p) => (
        <text key={p.x} x={px(p.x)} y={h - 12} textAnchor="middle" fontSize="20" fill={COLORS.muted} fontFamily={FONT_MONO}>{p.x}</text>
      ))}
    </svg>
  );
}

// Deterministic stand-in for a synapse strength, so the grid looks like a real
// matrix and renders the same every time the slide is shown.
function synVal(i, j, seed) {
  const x = Math.sin((i + 1) * 12.9898 + (j + 1) * 78.233 + seed) * 43758.5453;
  return Math.abs(x - Math.floor(x));
}

function SynapseGrid({ n = 8, cell = 30, gap = 4, seed = 1, color = COLORS.violet, style = {}, className }) {
  const cells = [];
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const v = synVal(i, j, seed);
      cells.push(
        <div key={`${i}-${j}`} style={{
          width: cell, height: cell, borderRadius: 5,
          background: v < 0.22 ? COLORS.canvas : color,
          opacity: v < 0.22 ? 1 : 0.18 + v * 0.8,
          border: v < 0.22 ? `1px solid ${COLORS.borderSoft}` : 'none',
          boxSizing: 'border-box',
        }} />
      );
    }
  }
  return (
    <div className={className} style={{
      display: 'grid', gridTemplateColumns: `repeat(${n}, ${cell}px)`, gap, ...style,
    }}>{cells}</div>
  );
}

// ======= SLIDE 1 · TITLE =======
function Slide1() {
  return (
    <Frame>
      {/* The coverage cliff itself, used as the backdrop of the title. Kept to
          the right of the headline so the flat 100% run never crosses a word. */}
      <div style={{ position: 'absolute', right: 0, bottom: 116, opacity: 0.5, pointerEvents: 'none' }}>
        <CliffChart w={880} h={470} stroke={COLORS.violet} strokeWidth={7} fillOpacity={0.14} />
      </div>

      <div style={{ position: 'absolute', inset: 0, padding: '72px 104px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexShrink: 0 }}>
          <PathwayLogo h={42} color={COLORS.text} />
          <span style={{ width: 1, height: 40, background: COLORS.border }} />
          <span style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600 }}>
            DataForge 2026 · Pathway Track
          </span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1400 }}>
          <div className="anim-el anim-fade" style={{ marginBottom: 34 }}>
            <Pill color={COLORS.violet} tint="rgba(192,97,255,0.08)">One claim, provable in 90 seconds</Pill>
          </div>
          <h1 className="anim-el anim-slide-up delay-1" style={{
            margin: 0, fontFamily: FONT_DISPLAY, fontSize: TYPE_SCALE.hero, fontWeight: 500,
            letterSpacing: '-0.035em', lineHeight: 0.98, color: COLORS.text,
          }}>
            What BDH<br />Remembers
          </h1>
          <div className="anim-el anim-slide-up delay-2" style={{
            fontSize: 54, color: COLORS.body, marginTop: 36, fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            Capability was never the variable.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, flexShrink: 0 }}>
          <div className="anim-el anim-fade delay-4" style={{
            padding: '16px 30px', borderRadius: RADIUS.pill, background: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`, fontSize: TYPE_SCALE.small, color: COLORS.text, fontWeight: 600,
          }}>
            Team NamoFans
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <Cite>Coverage cliff shown behind: BDH-CQ ordering ladder, arXiv:2608.09888</Cite>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ======= SLIDE 2 · HOW A MODEL USES YOUR EXAMPLES =======
function Slide2() {
  const examples = ['Example 1', 'Example 2', 'Example 3'];
  return (
    <Frame>
      <Chrome n="02" section="The idea in plain words" cite="Quote: pathway.com/research/introducing-bdh-cq" />
      <Body>
        <Title eyebrow="Step one">How a model uses your examples</Title>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 46, minHeight: 0 }}>
          {/* Examples you type in */}
          <div className="anim-el anim-slide-right" style={{ display: 'flex', flexDirection: 'column', gap: 18, width: 320 }}>
            <div style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600, marginBottom: 2 }}>
              You show it
            </div>
            {examples.map((e, i) => (
              <Card key={e} style={{ padding: '22px 26px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 12, height: 12, borderRadius: 3, background: [COLORS.cyan, COLORS.yellow, COLORS.magenta][i] }} />
                <span style={{ fontSize: TYPE_SCALE.body, color: COLORS.text }}>{e}</span>
              </Card>
            ))}
          </div>

          <div className="anim-el anim-fade delay-2" style={{ color: COLORS.border }}><Icon.Arrow s={54} c={COLORS.border} /></div>

          {/* The working memory */}
          <div className="anim-el anim-fade delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.violet, fontWeight: 600 }}>
              Working memory
            </div>
            <Card style={{ padding: 22, borderTop: `4px solid ${COLORS.violet}` }}>
              <SynapseGrid n={8} cell={30} gap={5} seed={3} color={COLORS.violet} />
            </Card>
            <div style={{ fontSize: TYPE_SCALE.small, color: COLORS.body }}>Written while reading. No retraining.</div>
          </div>

          <div className="anim-el anim-fade delay-3" style={{ color: COLORS.border }}><Icon.Arrow s={54} c={COLORS.border} /></div>

          {/* The answer */}
          <div className="anim-el anim-slide-up delay-4" style={{ width: 340 }}>
            <div style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600, marginBottom: 18 }}>
              It answers by
            </div>
            <Card accent={COLORS.p600} style={{ padding: '30px 30px 34px' }}>
              <div style={{ fontSize: 40, fontFamily: FONT_DISPLAY, fontWeight: 500, color: COLORS.text, lineHeight: 1.1 }}>
                reading that<br />memory back
              </div>
              <div style={{ fontSize: TYPE_SCALE.small, color: COLORS.body, marginTop: 16, lineHeight: 1.35 }}>
                Not by looking at your examples again.
              </div>
            </Card>
          </div>
        </div>

        <Card className="anim-el anim-fade delay-5" style={{
          marginTop: 24, padding: '30px 40px', borderLeft: `5px solid ${COLORS.violet}`,
          display: 'flex', alignItems: 'center', gap: 40, flexShrink: 0,
        }}>
          <div style={{ fontSize: 34, color: COLORS.text, lineHeight: 1.3, fontWeight: 400 }}>
            &ldquo;Examples presented at inference time update the model&rsquo;s memory as they are processed.&rdquo;
          </div>
          <Cite style={{ marginLeft: 'auto', textAlign: 'right', flexShrink: 0 }}>
            Pathway<br />pathway.com/research/<br />introducing-bdh-cq
          </Cite>
        </Card>
      </Body>
    </Frame>
  );
}

// ======= SLIDE 3 · WHAT PATHWAY CHANGED =======
function Slide3() {
  return (
    <Frame>
      <Chrome n="03" section="The architecture" cite="Dragon Hatchling, arXiv:2509.26507 · BDH Explainer Ch. 2" />
      <Body topPad={56} botPad={36}>
        <Title eyebrow="Step two">What Pathway changed</Title>

        <div style={{ flex: 1, display: 'flex', gap: 56, minHeight: 0 }}>
          {/* Transformer: a list that grows */}
          <Card className="anim-el anim-slide-right" style={{ flex: 1, padding: '30px 36px 34px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: COLORS.muted, marginBottom: 6 }}>
              <Icon.List s={26} c={COLORS.muted} />
              <span style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>A transformer</span>
            </div>
            <div style={{ fontSize: 40, fontFamily: FONT_DISPLAY, fontWeight: 500, color: COLORS.text, marginBottom: 22 }}>
              keeps a list that grows
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 9, minHeight: 0 }}>
              {[42, 58, 74, 90, 106, 122, 138, 154, 170, 186].map((hgt, i) => (
                <div key={hgt} className={`anim-el anim-grow-v delay-${Math.min(6, i + 1)}`} style={{
                  width: 40, height: hgt, borderRadius: 8,
                  background: COLORS.nodeIdle, opacity: 0.35 + i * 0.065,
                }} />
              ))}
              <div style={{ fontSize: 34, color: COLORS.muted, marginLeft: 8, marginBottom: 4 }}>...</div>
            </div>
            <div style={{ fontSize: TYPE_SCALE.small, color: COLORS.body, marginTop: 20 }}>
              Every example is stored whole. More examples, more to keep and more to search.
            </div>
          </Card>

          {/* BDH: one fixed grid */}
          <Card className="anim-el anim-slide-up delay-2" accent={COLORS.violet} style={{ flex: 1, padding: '30px 36px 34px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: COLORS.violet, marginBottom: 6 }}>
              <Icon.Grid s={26} c={COLORS.violet} />
              <span style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>BDH</span>
            </div>
            <div style={{ fontSize: 40, fontFamily: FONT_DISPLAY, fontWeight: 500, color: COLORS.text, marginBottom: 22 }}>
              sums them into one fixed grid
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 40, minHeight: 0 }}>
              <SynapseGrid n={8} cell={23} gap={4} seed={7} color={COLORS.violet} />
              <div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 44, color: COLORS.violet, fontWeight: 600 }}>S</div>
                <div style={{ fontSize: TYPE_SCALE.small, color: COLORS.body, marginTop: 4 }}>synapse strengths</div>
                <Pill color={COLORS.violet} tint="rgba(192,97,255,0.08)" style={{ marginTop: 16, padding: '8px 18px', fontSize: 17 }}>
                  Same size, always
                </Pill>
              </div>
            </div>
            <div style={{ fontSize: TYPE_SCALE.small, color: COLORS.body, marginTop: 20 }}>
              One example or a hundred, the grid never gets bigger. It only gets added to.
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 44, marginTop: 36, flexShrink: 0 }}>
          <div style={{ fontSize: 34, color: COLORS.text, lineHeight: 1.3, maxWidth: 780 }}>
            The rule in words: <strong style={{ fontWeight: 600 }}>each token adds one small pattern to the grid.</strong>
          </div>
          <div className="anim-el anim-fade delay-4" style={{
            padding: '26px 44px', borderRadius: RADIUS.card, background: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`, borderLeft: `5px solid ${COLORS.violet}`,
            fontFamily: FONT_MONO, fontSize: 46, color: COLORS.text, whiteSpace: 'nowrap',
          }}>
            S &#8592; S + &#966;(K) &#8855; V
          </div>
          <Cite style={{ marginLeft: 'auto', textAlign: 'right' }}>
            Dragon Hatchling<br />arXiv:2509.26507, &sect;2
          </Cite>
        </div>
      </Body>
    </Frame>
  );
}

// ======= SLIDE 4 · LIVE DEMO CUE, THE WRITE =======
function Slide4() {
  const steps = [
    { n: '1', t: 'The contribution grid C being built', d: 'One token in, one small pattern out.' },
    { n: '2', t: 'C fading onto S', d: 'That is the addition. Nothing is replaced.' },
    { n: '3', t: 'One cell, clicked open', d: 'C[i,j] = φ(K)[i] × V[j]. The whole rule, one number at a time.' },
  ];
  return (
    <Frame>
      <Chrome n="04" section="Live demo" cite="Running at web-jet-theta-42.vercel.app, view 1" />
      <Body topPad={56}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 22, flexShrink: 0 }}>
          <span className="live-dot" style={{ width: 20, height: 20, borderRadius: '50%', background: COLORS.red, flexShrink: 0 }} />
          <span style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.red, fontWeight: 700 }}>
            Switch to the artifact
          </span>
        </div>

        <h1 style={{
          margin: 0, fontFamily: FONT_DISPLAY, fontSize: 108, fontWeight: 500,
          letterSpacing: '-0.03em', lineHeight: 1, color: COLORS.text, flexShrink: 0,
        }}>
          Live demo <span style={{ color: COLORS.muted }}>·</span> view 1
        </h1>
        <div style={{ fontSize: TYPE_SCALE.lead, color: COLORS.body, marginTop: 20, flexShrink: 0 }}>
          Watch the write happen.
        </div>

        <div style={{ flex: 1, display: 'flex', gap: 30, marginTop: 44, minHeight: 0 }}>
          {steps.map((s, i) => (
            <Card key={s.n} className={`anim-el anim-slide-up delay-${i + 1}`} style={{
              flex: 1, padding: '36px 34px 38px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%', background: 'rgba(192,97,255,0.10)',
                color: COLORS.violet, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT_MONO, fontSize: 30, fontWeight: 700, marginBottom: 26, flexShrink: 0,
              }}>{s.n}</div>
              <div style={{ fontSize: 38, color: COLORS.text, lineHeight: 1.18, fontWeight: 500, fontFamily: FONT_DISPLAY }}>{s.t}</div>
              <div style={{ fontSize: 27, color: COLORS.body, lineHeight: 1.4, marginTop: 18 }}>{s.d}</div>
            </Card>
          ))}
        </div>

        <div className="anim-el anim-fade delay-5" style={{
          marginTop: 34, padding: '32px 44px', borderRadius: RADIUS.card,
          background: COLORS.linkTint, borderLeft: `5px solid ${COLORS.link}`,
          display: 'flex', alignItems: 'center', gap: 28, flexShrink: 0,
        }}>
          <Icon.Play s={34} c={COLORS.link} />
          <div style={{ fontSize: 36, color: COLORS.text, fontWeight: 500 }}>
            Every number is computed in the browser from trained weights. Nothing is drawn.
          </div>
        </div>
      </Body>
    </Frame>
  );
}

// ======= SLIDE 5 · THE QUESTION =======
function Slide5() {
  return (
    <Frame>
      <div style={{
        position: 'absolute', inset: 0, padding: '120px 140px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div className="anim-el anim-fade" style={{
          fontSize: 40, color: COLORS.body, lineHeight: 1.45, maxWidth: 1340, marginBottom: 92,
        }}>
          If <span style={{ fontFamily: FONT_MONO, color: COLORS.violet, fontWeight: 600 }}>S</span> is fixed in size and
          only ever added to, then what <span style={{ fontFamily: FONT_MONO, color: COLORS.violet, fontWeight: 600 }}>S</span> holds
          is decided by what you wrote.
        </div>

        <div style={{ width: 128, height: 5, background: COLORS.violet, borderRadius: 3, marginBottom: 72 }} className="anim-el anim-grow-h delay-1" />

        <h1 className="anim-el anim-slide-up delay-2" style={{
          margin: 0, fontFamily: FONT_DISPLAY, fontSize: 104, fontWeight: 500,
          letterSpacing: '-0.03em', lineHeight: 1.06, color: COLORS.text, maxWidth: 1560,
        }}>
          So what happens when what you wrote does not cover what you ask?
        </h1>
      </div>
      <div style={{
        position: 'absolute', bottom: 56, left: 140,
        fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600,
      }}>
        05 / 08
      </div>
    </Frame>
  );
}

// ======= SLIDE 6 · LIVE DEMO CUE, THE COVERAGE CLIFF =======
function Slide6() {
  const steps = [
    { k: 'Complexity 3, covered', v: 'Correct', ok: true },
    { k: 'Slider to 8, still covered', v: 'Still correct', ok: true },
    { k: 'Coverage off', v: 'Fails', ok: false },
    { k: 'Coverage on', v: 'Recovers', ok: true },
  ];
  return (
    <Frame>
      <Chrome n="06" section="Live demo" cite="Running at web-jet-theta-42.vercel.app, view 2" />
      <Body topPad={52} botPad={34}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 18, flexShrink: 0 }}>
          <span className="live-dot" style={{ width: 20, height: 20, borderRadius: '50%', background: COLORS.red, flexShrink: 0 }} />
          <span style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.red, fontWeight: 700 }}>
            Switch to the artifact
          </span>
        </div>
        <h1 style={{
          margin: 0, fontFamily: FONT_DISPLAY, fontSize: 92, fontWeight: 500,
          letterSpacing: '-0.03em', lineHeight: 1, color: COLORS.text, flexShrink: 0,
        }}>
          Live demo <span style={{ color: COLORS.muted }}>·</span> the coverage cliff
        </h1>

        <div style={{ flex: 1, display: 'flex', gap: 56, marginTop: 38, minHeight: 0 }}>
          {/* Four steps */}
          <div style={{ flex: 1.15, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {steps.map((s, i) => (
              <Card key={s.k} className={`anim-el anim-slide-right delay-${i + 1}`} style={{
                flex: 1, padding: '22px 30px', display: 'flex', alignItems: 'center', gap: 22,
                borderLeft: `5px solid ${s.ok ? COLORS.p600 : COLORS.red}`,
              }}>
                <span style={{
                  fontFamily: FONT_MONO, fontSize: 24, color: COLORS.muted, width: 30, flexShrink: 0,
                }}>{i + 1}</span>
                <span style={{ fontSize: 31, color: COLORS.text }}>{s.k}</span>
                <span style={{
                  marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 10,
                  color: s.ok ? COLORS.p600 : COLORS.red, fontSize: 28, fontWeight: 600, whiteSpace: 'nowrap',
                }}>
                  {s.ok ? <Icon.Check s={24} c={COLORS.p600} /> : <Icon.X s={24} c={COLORS.red} />}
                  {s.v}
                </span>
              </Card>
            ))}
          </div>

          {/* The headline number pair */}
          <Card className="anim-el anim-fade delay-3" style={{
            flex: 1, padding: '34px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600, marginBottom: 22 }}>
              Exact match on the hardest setting
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 130, fontWeight: 600, lineHeight: 1, color: COLORS.p600, letterSpacing: '-0.03em' }}>100%</div>
                <div style={{ fontSize: 28, color: COLORS.body, marginTop: 10 }}>examples cover it</div>
              </div>
              <Icon.Arrow s={58} c={COLORS.border} />
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: 130, fontWeight: 600, lineHeight: 1, color: COLORS.red, letterSpacing: '-0.03em' }}>0%</div>
                <div style={{ fontSize: 28, color: COLORS.body, marginTop: 10 }}>they do not</div>
              </div>
            </div>
            <div style={{ height: 1, background: COLORS.borderSoft, margin: '32px 0 26px' }} />
            <div style={{ fontSize: 28, color: COLORS.body, lineHeight: 1.35 }}>
              Exact match on the ordering task, 8 bars, from the model in the artifact.
            </div>
          </Card>
        </div>

        <div className="anim-el anim-fade delay-5" style={{
          marginTop: 30, padding: '30px 44px', borderRadius: RADIUS.card,
          background: COLORS.surface, border: `1px solid ${COLORS.borderSoft}`,
          borderLeft: `5px solid ${COLORS.violet}`, flexShrink: 0,
          display: 'flex', alignItems: 'baseline', gap: 20,
        }}>
          <span style={{ fontSize: 40, color: COLORS.body, fontFamily: FONT_DISPLAY }}>Same weights. Same question.</span>
          <span style={{ fontSize: 40, color: COLORS.text, fontWeight: 600, fontFamily: FONT_DISPLAY }}>Only the examples changed.</span>
        </div>
      </Body>
    </Frame>
  );
}

// ======= SLIDE 7 · PATHWAY'S OWN MODEL =======
function Slide7() {
  const rows = [
    { k: 'Without supporting examples', a: '0 / 24', b: '0 / 24', bad: true },
    { k: 'With supporting examples', a: '12 / 24', b: '13 / 24', bad: false },
  ];
  const costs = [
    { k: 'BDH-CQ', v: '$0.00070', best: true },
    { k: 'HRM', v: '$1.48', best: false },
    { k: 'TRM', v: '$1.76', best: false },
  ];
  return (
    <Frame>
      <Chrome n="07" section="Published evidence" cite="BDH-CQ report, arXiv:2608.09888, Table 3 and ladder experiment" />
      <Body topPad={48} botPad={30}>
        <Title style={{ marginBottom: 28 }} eyebrow="Not just our 4.2M model">Pathway&rsquo;s own model does this too</Title>

        <div style={{ flex: 1, display: 'flex', gap: 46, minHeight: 0 }}>
          {/* Table */}
          <div style={{ flex: 1.06 }}>
            <div className="anim-el anim-fade" style={{
              borderRadius: RADIUS.card, border: `1px solid ${COLORS.borderSoft}`,
              background: COLORS.surface, overflow: 'hidden',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', padding: '18px 30px',
                background: COLORS.canvas, borderBottom: `1px solid ${COLORS.borderSoft}`,
                fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: COLORS.muted, fontWeight: 600,
              }}>
                <span>BDH-CQ &middot; ordering, length 8</span>
                <span style={{ marginLeft: 'auto', width: 175, textAlign: 'right', flexShrink: 0 }}>pass@1</span>
                <span style={{ width: 175, textAlign: 'right', flexShrink: 0 }}>pass@2</span>
              </div>
              {rows.map((r) => (
                <div key={r.k} style={{
                  display: 'flex', alignItems: 'center', padding: '30px 30px',
                  borderBottom: `1px solid ${COLORS.borderSoft}`,
                  background: r.bad ? 'rgba(255,97,100,0.05)' : 'rgba(10,133,235,0.05)',
                }}>
                  <span style={{ fontSize: 29, color: COLORS.text }}>{r.k}</span>
                  <span style={{
                    marginLeft: 'auto', width: 175, textAlign: 'right', fontFamily: FONT_MONO,
                    fontSize: 38, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
                    color: r.bad ? COLORS.red : COLORS.p600,
                  }}>{r.a}</span>
                  <span style={{
                    width: 175, textAlign: 'right', fontFamily: FONT_MONO,
                    fontSize: 38, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
                    color: r.bad ? COLORS.red : COLORS.p600,
                  }}>{r.b}</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'stretch' }}>
                {costs.map((c, i) => (
                  <div key={c.k} style={{
                    flex: 1, padding: '22px 30px',
                    borderRight: i < costs.length - 1 ? `1px solid ${COLORS.borderSoft}` : 'none',
                  }}>
                    <div style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600 }}>{c.k}</div>
                    <div style={{
                      fontFamily: FONT_MONO, fontSize: 36, fontWeight: 700, marginTop: 8,
                      color: c.best ? COLORS.p600 : COLORS.body,
                    }}>{c.v}</div>
                    <div style={{ fontSize: 19, color: COLORS.muted, marginTop: 2 }}>per task</div>
                  </div>
                ))}
              </div>
            </div>
            <Cite style={{ marginTop: 14 }}>Table 3 and cost comparison, BDH-CQ report, arXiv:2608.09888</Cite>
          </div>

          {/* Ladder chart */}
          <Card className="anim-el anim-slide-up delay-2" style={{
            flex: 1, padding: '26px 34px 26px', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600 }}>
              The ladder: where the edge sits
            </div>
            <div style={{ fontSize: 27, color: COLORS.body, margin: '10px 0 18px' }}>
              Score in percent against ordering length
            </div>
            <CliffChart w={690} h={330} stroke={COLORS.violet} strokeWidth={5} fillOpacity={0.14} axes dots />
            <div style={{ flex: 1, minHeight: 16 }} />
            <div style={{ display: 'flex', gap: 30, fontFamily: FONT_MONO, fontSize: 22 }}>
              <span style={{ color: COLORS.body }}>2 to 5: 36/36</span>
              <span style={{ color: COLORS.body }}>6: 29/36</span>
              <span style={{ color: COLORS.red }}>7: 8/24</span>
              <span style={{ color: COLORS.red }}>8: 1/24</span>
            </div>
          </Card>
        </div>

        <div className="anim-el anim-fade delay-4" style={{
          marginTop: 28, padding: '24px 40px', borderRadius: RADIUS.card,
          background: 'rgba(192,97,255,0.07)', borderLeft: `5px solid ${COLORS.violet}`,
          display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0,
        }}>
          <span style={{ fontSize: 34, color: COLORS.text, fontWeight: 600 }}>
            We did not run BDH-CQ. These are published numbers.
          </span>
          <span style={{ fontSize: 26, color: COLORS.body, marginLeft: 'auto' }}>
            No public weights exist. Our own 100% to 0% result is the 4.2M model in the artifact.
          </span>
        </div>
      </Body>
    </Frame>
  );
}

// ======= SLIDE 8 · CLOSE =======
function Slide8() {
  const takeaways = [
    { t: 'More examples is not the fix', d: 'The right examples are. Ten more easy ones buy nothing.' },
    { t: 'It is not a small model quirk', d: 'We see it at 4.2M parameters. Pathway sees it at 150M.' },
    { t: 'When a model fails, ask this', d: 'Did anything you showed it reach that far?' },
  ];
  return (
    <Frame>
      <div style={{ position: 'absolute', inset: 0, padding: '70px 104px 60px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexShrink: 0 }}>
          <PathwayLogo h={38} color={COLORS.text} />
          <span style={{ width: 1, height: 36, background: COLORS.border }} />
          <span style={{ fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600 }}>
            DataForge 2026 · Pathway Track
          </span>
          <span style={{ marginLeft: 'auto', fontSize: TYPE_SCALE.label, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600 }}>
            08 / 08
          </span>
        </div>

        <h1 className="anim-el anim-slide-up" style={{
          margin: '56px 0 0', fontFamily: FONT_DISPLAY, fontSize: 92, fontWeight: 500,
          letterSpacing: '-0.03em', lineHeight: 1.06, color: COLORS.text, flexShrink: 0,
        }}>
          Capability was never the variable.<br />
          <span style={{
            backgroundImage: COLORS.gradient, WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>S was.</span>
        </h1>

        <div style={{ flex: 1, display: 'flex', gap: 30, marginTop: 52, minHeight: 0, alignItems: 'stretch' }}>
          {takeaways.map((k, i) => (
            <Card key={k.t} className={`anim-el anim-slide-up delay-${i + 2}`} accent={[COLORS.p600, COLORS.violet, COLORS.link][i]} style={{
              flex: 1, padding: '30px 32px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ fontFamily: FONT_MONO, fontSize: 22, color: COLORS.muted, marginBottom: 16 }}>0{i + 1}</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 35, fontWeight: 500, color: COLORS.text, lineHeight: 1.15 }}>{k.t}</div>
              <div style={{ fontSize: 26, color: COLORS.body, lineHeight: 1.4, marginTop: 16 }}>{k.d}</div>
            </Card>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 24, marginTop: 36, flexShrink: 0 }}>
          {[
            { l: 'Try it', u: 'web-jet-theta-42.vercel.app', full: 'https://web-jet-theta-42.vercel.app' },
            { l: 'Read it', u: 'github.com/wildcraft958/DataForge', full: 'https://github.com/wildcraft958/DataForge' },
          ].map((x) => (
            <a key={x.l} href={x.full} target="_blank" rel="noopener noreferrer"
              className="anim-el anim-fade delay-5 deck-link" style={{
              flex: 1, padding: '22px 30px', borderRadius: RADIUS.card,
              background: COLORS.linkTint, border: `1px solid ${COLORS.borderSoft}`,
              display: 'flex', alignItems: 'center', gap: 20,
              textDecoration: 'none', cursor: 'pointer',
            }}>
              <Icon.Link s={28} c={COLORS.link} />
              <div>
                <div style={{ fontSize: 19, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.muted, fontWeight: 600 }}>{x.l}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 30, color: COLORS.link, marginTop: 4 }}>{x.u}</div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: 34, flexShrink: 0 }}>
          <div style={{
            padding: '14px 28px', borderRadius: RADIUS.pill, background: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`, fontSize: TYPE_SCALE.small, color: COLORS.text, fontWeight: 600,
          }}>
            Team NamoFans
          </div>
          <Cite style={{ marginLeft: 'auto', textAlign: 'right' }}>
            Pathway logo used under their published media kit.
          </Cite>
        </div>
      </div>
    </Frame>
  );
}

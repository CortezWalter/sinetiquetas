/* global React */

const WINE = '#720E21';
const CREAM = '#F2E9D8';
const PAPER = '#EFE3CB';
const INK = '#1A1210';
const CLAY = '#C9956B';

// Shared post frame: 1080 x 1350. We design at native px.
const Frame = ({ bg = CREAM, fg = INK, children, style }) => (
  <div style={{
    width: 1080, height: 1350, background: bg, color: fg,
    position: 'relative', overflow: 'hidden',
    fontFamily: '"Manrope", system-ui, sans-serif',
    ...style,
  }}>
    {children}
  </div>
);

const Mono = ({ children, style }) => (
  <span style={{
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontSize: 22,
    ...style,
  }}>{children}</span>
);

const Display = ({ children, style }) => (
  <span style={{
    fontFamily: '"Bodoni Moda", "Bodoni 72", serif',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    lineHeight: 0.92,
    ...style,
  }}>{children}</span>
);

// Tiny SVG glass — used as quiet brand mark, never as illustration filler.
const GlassMark = ({ size = 36, color = 'currentColor' }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 20 28" fill="none" aria-hidden>
    <path d="M3 2 Q3 13 10 14 Q17 13 17 2 Z" stroke={color} strokeWidth="1.2" fill="none"/>
    <path d="M3 2 Q3 9 10 10 Q17 9 17 2 Z" fill={color} opacity="0.85"/>
    <line x1="10" y1="14" x2="10" y2="25" stroke={color} strokeWidth="1.2"/>
    <line x1="5" y1="26" x2="15" y2="26" stroke={color} strokeWidth="1.2"/>
  </svg>
);

// Re-usable header: brand wordmark + handle
const PostHeader = ({ color = INK, faint }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '54px 64px 0', color,
  }}>
    <Mono style={{ fontSize: 20, fontWeight: 600 }}>SIN&nbsp;ETIQUETAS</Mono>
    <Mono style={{ fontSize: 18, opacity: faint ? 0.55 : 0.8 }}>@sinetiquetas.club</Mono>
  </div>
);

const PostFooter = ({ color = INK, label = 'CATAS NÓMADES · MENDOZA' }) => (
  <div style={{
    position: 'absolute', left: 64, right: 64, bottom: 48,
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color,
  }}>
    <Mono style={{ fontSize: 18, opacity: 0.7 }}>{label}</Mono>
    <Mono style={{ fontSize: 18, opacity: 0.7 }}>SINETIQUETAS.CLUB</Mono>
  </div>
);

// Subtle paper grain via repeating radial gradients (very light)
const grain = {
  backgroundImage:
    'radial-gradient(rgba(26,18,16,0.05) 1px, transparent 1.4px)',
  backgroundSize: '6px 6px',
};

/* ------------------------------------------------------------------ */
/* POST 01 — Sin miedo al vino                                          */
/* ------------------------------------------------------------------ */
function PostSinMiedo() {
  return (
    <Frame bg={CREAM} style={grain}>
      <PostHeader />

      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'baseline', gap: 28 }}>
        <Display style={{ fontSize: 220, color: WINE, fontStyle: 'italic' }}>01</Display>
        <Mono style={{ fontSize: 20, color: INK, opacity: 0.7 }}>/ 06 · EXPERIENCIAS</Mono>
      </div>

      <div style={{ padding: '20px 64px 0' }}>
        <Display style={{ fontSize: 148, color: INK, display: 'block' }}>
          Sin&nbsp;miedo
        </Display>
        <Display style={{ fontSize: 148, color: INK, display: 'block', fontStyle: 'italic' }}>
          al vino.
        </Display>
      </div>

      <div style={{
        position: 'absolute', left: 64, right: 64, top: 880,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
      }}>
        <p style={{ fontSize: 26, lineHeight: 1.45, color: INK, margin: 0, maxWidth: 460 }}>
          Arrancamos desde cero, sin drama. Olemos, comparamos,
          nos equivocamos, nos reímos.
        </p>
        <div style={{ borderLeft: `1px solid ${WINE}`, paddingLeft: 28 }}>
          <Mono style={{ fontSize: 16, color: WINE, display: 'block', marginBottom: 14 }}>
            LA REGLA
          </Mono>
          <p style={{
            fontFamily: '"Bodoni Moda", serif', fontSize: 32, lineHeight: 1.2,
            margin: 0, color: INK, fontStyle: 'italic',
          }}>
            La única pregunta tonta es la que no se hace.
          </p>
          <Mono style={{ fontSize: 16, color: INK, opacity: 0.6, display: 'block', marginTop: 22 }}>
            INCLUYE TAPEO DE LA ZONA
          </Mono>
        </div>
      </div>

      <PostFooter />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* POST 02 — A ciegas                                                   */
/* ------------------------------------------------------------------ */
function PostACiegas() {
  return (
    <Frame bg={INK} fg={CREAM}>
      {/* faint redacted bars suggesting hidden labels */}
      <svg width="1080" height="1350" style={{ position: 'absolute', inset: 0 }} aria-hidden>
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <rect key={i}
            x={80 + (i % 4) * 240} y={1080 + Math.floor(i/4) * 18}
            width={200 - (i*7 % 60)} height={6}
            fill={WINE} opacity={0.35}/>
        ))}
      </svg>

      <PostHeader color={CREAM} faint />

      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'baseline', gap: 28 }}>
        <Display style={{ fontSize: 220, color: WINE, fontStyle: 'italic' }}>02</Display>
        <Mono style={{ fontSize: 20, color: CREAM, opacity: 0.55 }}>/ 06 · EXPERIENCIAS</Mono>
      </div>

      <div style={{ padding: '20px 64px 0', position: 'relative' }}>
        <Display style={{ fontSize: 220, color: CREAM, display: 'block', fontStyle: 'italic' }}>
          A ciegas.
        </Display>
        {/* black bar redacting like a wine label */}
        <div style={{
          position: 'absolute', left: 64, top: 110, width: 540, height: 78,
          background: CREAM, mixBlendMode: 'difference', opacity: 0.0,
        }}/>
      </div>

      <div style={{
        position: 'absolute', left: 64, right: 64, top: 780,
      }}>
        <div style={{
          display: 'flex', gap: 24, alignItems: 'center', marginBottom: 28,
        }}>
          <span style={{
            display: 'inline-block', background: CREAM, height: 14, width: 220,
          }}/>
          <span style={{
            display: 'inline-block', background: CREAM, height: 14, width: 140, opacity: 0.6,
          }}/>
          <span style={{
            display: 'inline-block', background: CREAM, height: 14, width: 80, opacity: 0.3,
          }}/>
        </div>
        <p style={{
          fontSize: 30, lineHeight: 1.4, color: CREAM, margin: 0, maxWidth: 720,
        }}>
          Sin etiqueta, sin precio, sin pistas. Solo el vino en la copa
          y lo que te genera. Varietales de proyectos chicos de
          Argentina que probablemente nunca viste en una góndola.
        </p>
      </div>

      <PostFooter color={CREAM} label="CATA · BRINDIS · CHARLA SUELTA"/>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* POST 03 — Maridajes imperfectos                                      */
/* ------------------------------------------------------------------ */
function PostMaridajes() {
  const pairs = [
    ['Malbec', '×', 'Dulce de leche', '✓'],
    ['Bonarda', '×', 'Pan con manteca', '✓'],
    ['Cab. Franc', '×', 'Chocolate 70%', '✓'],
    ['Torrontés', '×', 'Papas chips', '✓'],
    ['Tinto raro', '×', 'Lo que aparezca', '✓'],
    ['Vino fino', '×', 'Comida fina', '—'],
  ];
  return (
    <Frame bg={PAPER} style={grain}>
      <PostHeader />

      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'baseline', gap: 28 }}>
        <Display style={{ fontSize: 220, color: WINE, fontStyle: 'italic' }}>03</Display>
        <Mono style={{ fontSize: 20, color: INK, opacity: 0.7 }}>/ 06 · EXPERIENCIAS</Mono>
      </div>

      <div style={{ padding: '20px 64px 0' }}>
        <Display style={{ fontSize: 124, color: INK, display: 'block' }}>Maridajes</Display>
        <Display style={{ fontSize: 124, color: WINE, display: 'block', fontStyle: 'italic' }}>
          imperfectos.
        </Display>
      </div>

      <div style={{
        position: 'absolute', left: 64, right: 64, top: 740,
      }}>
        <div style={{ borderTop: `1px solid ${INK}`, opacity: 0.25 }}/>
        {pairs.map(([a, x, b, ok], i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 40px 1fr 60px',
            alignItems: 'center',
            padding: '11px 0',
            borderBottom: i === pairs.length - 1 ? 'none' : `1px solid ${INK}22`,
            fontFamily: '"Bodoni Moda", serif',
            fontSize: 36,
            color: INK,
            opacity: ok === '—' ? 0.4 : 1,
            fontStyle: ok === '—' ? 'italic' : 'normal',
          }}>
            <span>{a}</span>
            <Mono style={{ fontSize: 20, opacity: 0.5, textAlign: 'center' }}>{x}</Mono>
            <span>{b}</span>
            <Mono style={{
              fontSize: 22, color: ok === '✓' ? WINE : INK, textAlign: 'right',
              opacity: ok === '—' ? 0.5 : 1,
            }}>{ok}</Mono>
          </div>
        ))}
      </div>

      <PostFooter label="SPOILER · CASI SIEMPRE FUNCIONA"/>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* POST 04 — Historias y copas                                          */
/* ------------------------------------------------------------------ */
function PostHistorias() {
  return (
    <Frame bg={WINE} fg={CREAM}>
      <PostHeader color={CREAM} faint />

      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'baseline', gap: 28 }}>
        <Display style={{ fontSize: 220, color: CREAM, fontStyle: 'italic' }}>04</Display>
        <Mono style={{ fontSize: 20, color: CREAM, opacity: 0.6 }}>/ 06 · EXPERIENCIAS</Mono>
      </div>

      {/* Big stat */}
      <div style={{ padding: '20px 64px 0', display: 'flex', alignItems: 'flex-start', gap: 24 }}>
        <Display style={{
          fontSize: 460, color: CREAM, lineHeight: 0.85, letterSpacing: '-0.04em',
        }}>70</Display>
        <Display style={{
          fontSize: 200, color: CLAY, lineHeight: 1, fontStyle: 'italic',
        }}>%</Display>
      </div>

      <div style={{
        padding: '0 64px', marginTop: 0, maxWidth: 760,
      }}>
        <p style={{
          fontFamily: '"Bodoni Moda", serif', fontSize: 40, lineHeight: 1.15,
          color: CREAM, margin: 0, fontStyle: 'italic',
        }}>
          del vino del país sale de Mendoza.
        </p>
        <p style={{ fontSize: 26, lineHeight: 1.5, color: CREAM, opacity: 0.85, margin: '24px 0 0' }}>
          La mayoría de esa historia no llega a ninguna copa. Acá sí:
          viñedos chicos, lo que cambia en la industria, lo que se calla
          en las bodegas grandes.
        </p>
      </div>

      <div style={{
        position: 'absolute', left: 64, bottom: 110,
        fontFamily: '"Bodoni Moda", serif', fontStyle: 'italic',
        color: CLAY, fontSize: 34,
      }}>
        Historias y copas — sin PowerPoint.
      </div>

      <PostFooter color={CREAM} label="MENDOZA · TERROIR · CONVERSACIÓN" />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* POST 05 — Manifiesto (rellena #5)                                    */
/* ------------------------------------------------------------------ */
function PostManifiesto() {
  return (
    <Frame bg={CREAM} style={grain}>
      <PostHeader />

      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'baseline', gap: 28 }}>
        <Display style={{ fontSize: 220, color: WINE, fontStyle: 'italic' }}>05</Display>
        <Mono style={{ fontSize: 20, color: INK, opacity: 0.7 }}>/ 06 · MANIFIESTO</Mono>
      </div>

      <div style={{ padding: '10px 64px 0' }}>
        <Display style={{ fontSize: 118, color: INK, display: 'block' }}>Acá no hay</Display>
        <Display style={{ fontSize: 118, color: INK, display: 'block' }}>
          <span style={{ color: WINE, fontStyle: 'italic' }}>expertos.</span>
        </Display>
        <Display style={{ fontSize: 118, color: INK, display: 'block', marginTop: 6 }}>
          Hay curiosos
        </Display>
        <Display style={{ fontSize: 118, color: INK, display: 'block', fontStyle: 'italic' }}>
          que brindan.
        </Display>
      </div>

      {/* Four values from "Qué somos" — quiet bottom strip */}
      <div style={{
        position: 'absolute', left: 64, right: 64, bottom: 110,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
        borderTop: `1px solid ${INK}33`, paddingTop: 24,
      }}>
        {[
          ['01', 'Autenticidad', 'Sin poses.'],
          ['02', 'Cercanía', 'Lo probamos con vos.'],
          ['03', 'Curiosidad', '¿A qué te recuerda?'],
          ['04', 'Calidad', 'Pocas copas, bien elegidas.'],
        ].map(([n, t, s]) => (
          <div key={n}>
            <Mono style={{ fontSize: 14, color: WINE, display: 'block' }}>{n}</Mono>
            <div style={{
              fontFamily: '"Bodoni Moda", serif', fontSize: 26, color: INK,
              marginTop: 4,
            }}>{t}</div>
            <div style={{ fontSize: 15, color: INK, opacity: 0.65, marginTop: 4 }}>{s}</div>
          </div>
        ))}
      </div>

      <PostFooter label="QUÉ SOMOS · VINO CON ALMA" />
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* POST 06 — Modelo nómade (rellena #6)                                 */
/* ------------------------------------------------------------------ */
function PostNomade() {
  // small "map" of pinned cata locations — abstract
  const pins = [
    { x: 160, y: 80,  label: 'patio · Chacras' },
    { x: 760, y: 110, label: 'terraza · Ciudad' },
    { x: 420, y: 170, label: 'living · Godoy Cruz' },
    { x: 250, y: 260, label: 'galpón · Luján' },
    { x: 580, y: 290, label: 'finca · Maipú' },
    { x: 830, y: 230, label: 'casa amiga · ?' },
  ];
  return (
    <Frame bg={CREAM} style={grain}>
      <PostHeader />

      <div style={{ padding: '40px 64px 0', display: 'flex', alignItems: 'baseline', gap: 28 }}>
        <Display style={{ fontSize: 220, color: WINE, fontStyle: 'italic' }}>06</Display>
        <Mono style={{ fontSize: 20, color: INK, opacity: 0.7 }}>/ 06 · MODELO</Mono>
      </div>

      <div style={{ padding: '10px 64px 0' }}>
        <Display style={{ fontSize: 148, color: INK, display: 'block' }}>Modelo</Display>
        <Display style={{ fontSize: 148, color: WINE, display: 'block', fontStyle: 'italic' }}>
          nómade.
        </Display>
      </div>

      {/* "map" of pins */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 760, height: 360,
        border: `1px solid ${INK}22`, background: `${WINE}08`,
      }}>
        {/* faint contour lines */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} aria-hidden>
          {[60, 130, 210, 290].map((y, i) => (
            <path key={i}
              d={`M0 ${y} Q 240 ${y - 30 - i*8} 480 ${y + 10} T 960 ${y - 20}`}
              stroke={WINE} strokeWidth="1" fill="none" opacity="0.18"/>
          ))}
        </svg>
        {pins.map((p, i) => (
          <div key={i} style={{
            position: 'absolute', left: p.x, top: p.y,
            transform: 'translate(-50%, -100%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <Mono style={{ fontSize: 13, color: INK, opacity: 0.75, marginBottom: 6 }}>
              {p.label}
            </Mono>
            <div style={{
              width: 14, height: 14, borderRadius: '50%', background: WINE,
              boxShadow: `0 0 0 6px ${WINE}22`,
            }}/>
          </div>
        ))}
      </div>

      <p style={{
        position: 'absolute', left: 64, right: 64, top: 1170,
        fontFamily: '"Bodoni Moda", serif', fontSize: 30, fontStyle: 'italic',
        color: INK, margin: 0,
      }}>
        Cada cata, otro techo. Mismo brindis.
      </p>

      <PostFooter label="NUESTRA CASA · TU CASA" />
    </Frame>
  );
}

window.Posts = {
  PostSinMiedo, PostACiegas, PostMaridajes,
  PostHistorias, PostManifiesto, PostNomade,
};

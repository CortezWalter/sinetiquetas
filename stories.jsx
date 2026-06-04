/* global React */

const WINE = '#720E21';
const CREAM = '#F2E9D8';
const PAPER = '#EFE3CB';
const INK = '#1A1210';
const CLAY = '#C9956B';

const grain = {
  backgroundImage: 'radial-gradient(rgba(26,18,16,0.05) 1px, transparent 1.4px)',
  backgroundSize: '6px 6px',
};

const Display = ({ children, style }) => (
  <span style={{
    fontFamily: '"Bodoni Moda", "Bodoni 72", serif',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    lineHeight: 0.95,
    ...style,
  }}>{children}</span>
);
const Mono = ({ children, style }) => (
  <span style={{
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 18,
    ...style,
  }}>{children}</span>
);

// Story frame – 1080×1920. Keep critical content within "safe zone":
// approx 220px top and 280px bottom are covered by IG UI (avatar, stickers, reactions).
const StoryFrame = ({ bg = CREAM, fg = INK, style, children }) => (
  <div style={{
    width: 1080, height: 1920, background: bg, color: fg,
    position: 'relative', overflow: 'hidden',
    fontFamily: '"Manrope", system-ui, sans-serif',
    ...style,
  }}>
    {children}
    {/* safe-zone guides — only visible in design view, won't show after export */}
  </div>
);

const TopBar = ({ color = INK, faint }) => (
  <div style={{
    position: 'absolute', top: 240, left: 64, right: 64,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', color,
  }}>
    <Mono style={{ fontSize: 20, fontWeight: 600 }}>SIN&nbsp;ETIQUETAS</Mono>
    <Mono style={{ fontSize: 16, opacity: faint ? 0.55 : 0.8 }}>@sinetiquetas.club</Mono>
  </div>
);

/* ------------------------------------------------------------ */
/* STORY 01 — Hook / Manifiesto                                 */
/* ------------------------------------------------------------ */
function StoryHook() {
  return (
    <StoryFrame bg={WINE} fg={CREAM}>
      <TopBar color={CREAM} faint />

      {/* Big Bodoni quote, centered vertically in safe zone */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 460,
      }}>
        <Mono style={{ color: CLAY, fontSize: 16, display: 'block', marginBottom: 28 }}>
          QUÉ SOMOS
        </Mono>
        <Display style={{ fontSize: 160, color: CREAM, display: 'block' }}>Acá no hay</Display>
        <Display style={{
          fontSize: 160, color: CLAY, display: 'block', fontStyle: 'italic',
        }}>expertos.</Display>
        <Display style={{ fontSize: 160, color: CREAM, display: 'block', marginTop: 24 }}>
          Hay curiosos
        </Display>
        <Display style={{
          fontSize: 160, color: CREAM, display: 'block', fontStyle: 'italic',
        }}>que brindan.</Display>
      </div>

      {/* CTA pulse */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 360,
        display: 'flex', justifyContent: 'center',
      }}>
        <Mono style={{ color: CLAY, fontSize: 20, letterSpacing: '0.3em' }}>
          MANTENÉ APRETADO ↓
        </Mono>
      </div>

      {/* footer faint */}
      <div style={{
        position: 'absolute', bottom: 240, left: 64, right: 64,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <Mono style={{ color: CREAM, opacity: 0.55, fontSize: 14 }}>
          CATAS NÓMADES · MENDOZA
        </Mono>
        <Mono style={{ color: CREAM, opacity: 0.55, fontSize: 14 }}>01 / 03</Mono>
      </div>
    </StoryFrame>
  );
}

/* ------------------------------------------------------------ */
/* STORY 02 — Qué pasa en una cata                              */
/* ------------------------------------------------------------ */
function StoryQuePasa() {
  const beats = [
    ['01', 'Olemos cosas raras.'],
    ['02', 'Probamos vinos a ciegas.'],
    ['03', 'Maridamos con lo que haya.'],
    ['04', 'Nos reímos. Brindamos.'],
  ];
  return (
    <StoryFrame bg={CREAM} style={grain}>
      <TopBar />

      <div style={{ position: 'absolute', left: 64, right: 64, top: 400 }}>
        <Mono style={{ color: WINE, fontSize: 16, display: 'block', marginBottom: 22 }}>
          CÓMO SE VIVE
        </Mono>
        <Display style={{ fontSize: 130, color: INK, display: 'block' }}>Esto pasa</Display>
        <Display style={{
          fontSize: 130, color: WINE, display: 'block', fontStyle: 'italic',
        }}>en una cata.</Display>
      </div>

      {/* List */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 950,
      }}>
        {beats.map(([n, t], i) => (
          <div key={n} style={{
            display: 'grid', gridTemplateColumns: '90px 1fr',
            alignItems: 'baseline', padding: '22px 0',
            borderBottom: i === beats.length - 1 ? 'none' : `1px solid ${INK}22`,
          }}>
            <Mono style={{ color: WINE, fontSize: 22, fontWeight: 600 }}>{n}</Mono>
            <span style={{
              fontFamily: '"Bodoni Moda", serif', fontSize: 56, color: INK,
              fontStyle: i === beats.length - 1 ? 'italic' : 'normal',
            }}>{t}</span>
          </div>
        ))}
      </div>

      {/* hint */}
      <div style={{
        position: 'absolute', bottom: 240, left: 64, right: 64,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <Mono style={{ color: INK, opacity: 0.55, fontSize: 14 }}>
          SEGUÍ →
        </Mono>
        <Mono style={{ color: INK, opacity: 0.55, fontSize: 14 }}>02 / 03</Mono>
      </div>
    </StoryFrame>
  );
}

/* ------------------------------------------------------------ */
/* STORY 03 — Próxima cata · CTA                                */
/* ------------------------------------------------------------ */
function StoryCTA() {
  return (
    <StoryFrame bg={INK} fg={CREAM}>
      <TopBar color={CREAM} faint />

      <div style={{ position: 'absolute', left: 64, right: 64, top: 380 }}>
        <Mono style={{ color: CLAY, fontSize: 16, display: 'block', marginBottom: 22 }}>
          PRÓXIMA CATA
        </Mono>
        <Display style={{ fontSize: 150, color: CREAM, display: 'block' }}>El vino,</Display>
        <Display style={{
          fontSize: 150, color: CLAY, display: 'block', fontStyle: 'italic',
        }}>sin miedo.</Display>
      </div>

      {/* photo placeholder — drop a real cata photo here */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 880, height: 520,
        border: `1px dashed ${CREAM}40`, borderRadius: 14, overflow: 'hidden',
      }}>
        <image-slot
          id="story-cata-photo"
          shape="rect"
          placeholder="Soltá una foto de cata (copas, mesa, gente brindando)"
          style={{ width: '100%', height: '100%' }}
        ></image-slot>
      </div>

      {/* sticker reservation hint */}
      <div style={{
        position: 'absolute', left: 64, right: 64, bottom: 320,
        border: `1px dashed ${CLAY}66`, borderRadius: 14, padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <Mono style={{ color: CLAY, fontSize: 13, display: 'block', marginBottom: 4 }}>
            ESPACIO RESERVADO
          </Mono>
          <span style={{
            fontFamily: '"Bodoni Moda", serif', fontStyle: 'italic',
            color: CREAM, fontSize: 28,
          }}>
            Acá pegá el sticker "Cuenta regresiva" con la fecha
          </span>
        </div>
        <Mono style={{ color: CLAY, fontSize: 36 }}>⏱</Mono>
      </div>
    </StoryFrame>
  );
}

window.Stories = { StoryHook, StoryQuePasa, StoryCTA };

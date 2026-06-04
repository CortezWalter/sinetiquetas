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
    fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 0.95,
    ...style,
  }}>{children}</span>
);
const Mono = ({ children, style }) => (
  <span style={{
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 18,
    ...style,
  }}>{children}</span>
);

const StoryFrame = ({ bg = CREAM, fg = INK, style, children }) => (
  <div style={{
    width: 1080, height: 1920, background: bg, color: fg,
    position: 'relative', overflow: 'hidden',
    fontFamily: '"Manrope", system-ui, sans-serif',
    ...style,
  }}>{children}</div>
);

/* ---------------- FRAME 01 — Anuncio / Logo grande ---------------- */
function StoryLaunch1() {
  return (
    <StoryFrame bg={CREAM} style={grain}>
      {/* top kicker */}
      <div style={{
        position: 'absolute', top: 240, left: 0, right: 0,
        textAlign: 'center', color: WINE,
      }}>
        <Mono style={{ fontSize: 22, letterSpacing: '0.4em' }}>
          17 · MAYO · 2026
        </Mono>
        <div style={{
          width: 80, height: 1, background: WINE, opacity: 0.45,
          margin: '24px auto 0',
        }}/>
      </div>

      {/* logo, generous size */}
      <img
        src="assets/logo-sinetiquetas.png"
        alt="Sin Etiquetas"
        style={{
          position: 'absolute',
          left: '50%', top: 460,
          width: 760, height: 'auto',
          transform: 'translateX(-50%)',
          objectFit: 'contain',
        }}
      />

      {/* declaration */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 1080,
        textAlign: 'center',
      }}>
        <Display style={{ fontSize: 92, color: INK, display: 'block' }}>
          Hoy esto es
        </Display>
        <Display style={{
          fontSize: 92, color: WINE, display: 'block', fontStyle: 'italic',
          marginTop: 6,
        }}>
          una realidad.
        </Display>
      </div>

      {/* sub */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 1340,
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: '"Bodoni Moda", serif', fontSize: 32, fontStyle: 'italic',
          color: INK, opacity: 0.75, lineHeight: 1.4, margin: 0,
          maxWidth: 760, marginLeft: 'auto', marginRight: 'auto',
        }}>
          Después de meses de probar, elegir y encontrar proyectos que nos vuelan la cabeza.
        </p>
      </div>

      {/* footer cta */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 280,
        textAlign: 'center',
      }}>
        <Mono style={{ color: WINE, fontSize: 18, letterSpacing: '0.35em' }}>
          SEGUÍ →
        </Mono>
      </div>
    </StoryFrame>
  );
}

/* ---------------- FRAME 02 — Manifiesto de lanzamiento ---------------- */
function StoryLaunch2() {
  return (
    <StoryFrame bg={WINE} fg={CREAM}>
      {/* small logo top */}
      <img
        src="assets/logo-sinetiquetas.png"
        alt="Sin Etiquetas"
        style={{
          position: 'absolute', left: 64, top: 220,
          width: 200, height: 'auto', objectFit: 'contain',
          filter: 'brightness(0) saturate(100%) invert(89%) sepia(13%) saturate(391%) hue-rotate(346deg) brightness(99%) contrast(94%)',
          /* recolor wine→cream */
        }}
      />
      <Mono style={{
        position: 'absolute', top: 280, right: 64,
        color: CLAY, fontSize: 16,
      }}>
        LANZAMIENTO · 01 / 01
      </Mono>

      {/* Editorial line */}
      <div style={{ position: 'absolute', left: 64, right: 64, top: 480 }}>
        <Display style={{ fontSize: 110, color: CREAM, display: 'block' }}>
          Vino,
        </Display>
        <Display style={{
          fontSize: 110, color: CLAY, display: 'block', fontStyle: 'italic',
        }}>
          de otra manera.
        </Display>
      </div>

      {/* Body — cleaned, friendlier rhythm */}
      <div style={{
        position: 'absolute', left: 64, right: 64, top: 800,
      }}>
        <p style={{
          fontSize: 30, lineHeight: 1.55, color: CREAM, margin: 0, maxWidth: 880,
        }}>
          Después de meses de trabajo silencioso —de recorrer Mendoza,
          probar, elegir y encontrar proyectos que nos vuelan la cabeza—
          definimos nuestra impronta y nuestra misión.
        </p>
        <div style={{
          width: 56, height: 1, background: CLAY, margin: '36px 0',
        }}/>
        <p style={{
          fontSize: 30, lineHeight: 1.55, color: CREAM, margin: 0, maxWidth: 880,
        }}>
          Queremos acercarte el vino de otra manera.
          <br /><strong style={{ color: CLAY, fontWeight: 600 }}>
            Sin vueltas. Sin pretensiones.
          </strong>
        </p>
      </div>

      {/* Closer / CTA */}
      <div style={{
        position: 'absolute', left: 64, right: 64, bottom: 350,
      }}>
        <div style={{
          borderTop: `1px solid ${CLAY}55`, paddingTop: 28,
        }}>
          <p style={{
            fontFamily: '"Bodoni Moda", serif', fontStyle: 'italic',
            fontSize: 38, color: CREAM, margin: 0, lineHeight: 1.25,
          }}>
            Hoy <span style={{ color: CLAY }}>Sin Etiquetas</span> ve la luz.
            Primer paso firme hacia experiencias nuevas.
          </p>
        </div>
      </div>

      {/* footer */}
      <div style={{
        position: 'absolute', bottom: 240, left: 64, right: 64,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Mono style={{ color: CREAM, opacity: 0.7, fontSize: 14 }}>
          @sinetiquetas.club
        </Mono>
        <Mono style={{ color: CLAY, fontSize: 14, letterSpacing: '0.35em' }}>
          MIRÁ ARRIBA ↑
        </Mono>
      </div>
    </StoryFrame>
  );
}

window.LaunchStories = { StoryLaunch1, StoryLaunch2 };

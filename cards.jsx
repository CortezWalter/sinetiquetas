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
    fontFamily: '"Playfair Display", "Bodoni Moda", serif',
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
    fontSize: 16,
    fontWeight: 600,
    ...style,
  }}>{children}</span>
);

// Tiny wordmark
const Wordmark = ({ color = INK }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, color }}>
    <Display style={{ fontSize: 36, fontStyle: 'italic', lineHeight: 1 }}>Sin&nbsp;Etiquetas</Display>
    <Mono style={{ fontSize: 13, opacity: 0.7 }}>club</Mono>
  </div>
);

/* ------------------------------------------------------------ */
/* Card frame — 1050 x 600 with rounded corners                 */
/* ------------------------------------------------------------ */
const CardFrame = ({ bg = CREAM, fg = INK, style, children }) => (
  <div style={{
    width: 1050, height: 600, background: bg, color: fg,
    position: 'relative', overflow: 'hidden',
    borderRadius: 18,
    fontFamily: '"Manrope", system-ui, sans-serif',
    boxShadow: '0 30px 60px rgba(26,18,16,0.18), 0 4px 12px rgba(26,18,16,0.08)',
    ...style,
  }}>
    {children}
  </div>
);

/* ------------------------------------------------------------ */
/* FRONT                                                         */
/* ------------------------------------------------------------ */
function CardFront({ name, lastName, role, specialty, email }) {
  return (
    <CardFrame bg={CREAM} style={grain}>
      {/* top bar */}
      <div style={{
        position: 'absolute', top: 36, left: 48, right: 48,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Wordmark />
        <Mono style={{ color: WINE, fontSize: 11, fontWeight: 600 }}>
          CATAS NÓMADES · MENDOZA
        </Mono>
      </div>

      {/* name block */}
      <div style={{
        position: 'absolute', left: 48, top: 150,
      }}>
        <Display style={{ fontSize: 110, color: INK, display: 'block', lineHeight: 0.95 }}>
          {name}
        </Display>
        <Display style={{
          fontSize: 110, color: WINE, display: 'block', lineHeight: 0.95,
          fontStyle: 'italic',
        }}>
          {lastName}
        </Display>
      </div>

      {/* role */}
      <div style={{
        position: 'absolute', left: 48, top: 400, right: 48,
      }}>
        <div style={{
          width: 80, height: 2, background: WINE, opacity: 0.7, marginBottom: 16,
        }}/>
        <Mono style={{ fontSize: 20, color: WINE, fontWeight: 600 }}>
          {role}
        </Mono>
        <div style={{
          fontFamily: '"Playfair Display", serif', fontSize: 28, color: INK,
          fontStyle: 'italic', marginTop: 10, opacity: 0.95, fontWeight: 500,
        }}>
          {specialty}
        </div>
      </div>

      {/* contact */}
      <div style={{
        position: 'absolute', left: 48, right: 48, bottom: 38,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div>
          <Mono style={{ fontSize: 16, color: INK, opacity: 0.55, display: 'block' }}>
            INSTAGRAM
          </Mono>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 22,
            color: INK, marginTop: 6, letterSpacing: '0.02em', fontWeight: 600,
          }}>
            @sinetiquetas.club
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Mono style={{ fontSize: 16, color: INK, opacity: 0.55, display: 'block' }}>
            CONTACTO
          </Mono>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 22,
            color: INK, marginTop: 6, letterSpacing: '0.02em', fontWeight: 600,
          }}>
            {email}
          </div>
        </div>
      </div>
    </CardFrame>
  );
}

/* ------------------------------------------------------------ */
/* BACK                                                          */
/* ------------------------------------------------------------ */
function CardBack() {
  return (
    <CardFrame bg={WINE} fg={CREAM}>
      {/* Top tagline */}
      <div style={{
        position: 'absolute', top: 36, left: 48, right: 48,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Wordmark color={CREAM} />
        <Mono style={{ color: CLAY, fontSize: 16, fontWeight: 600 }}>
          VINO · SIN MIEDO
        </Mono>
      </div>

      {/* Big editorial line on the left */}
      <div style={{
        position: 'absolute', left: 48, top: 140, right: 460,
      }}>
        <Display style={{ fontSize: 90, color: CREAM, display: 'block' }}>
          El vino,
        </Display>
        <Display style={{ fontSize: 90, color: CLAY, display: 'block', fontStyle: 'italic' }}>
          sin miedo.
        </Display>
        <p style={{
          fontFamily: '"Playfair Display", serif', fontSize: 26, fontStyle: 'italic',
          color: CREAM, opacity: 0.92, marginTop: 36, lineHeight: 1.3, maxWidth: 420,
          fontWeight: 500,
        }}>
          Nuestra casa, tu casa. Donde sea que se brinde.
        </p>
      </div>

      {/* QR parche */}
      <div style={{
        position: 'absolute', right: 48, top: 88, width: 360, height: 420,
        background: CREAM, borderRadius: 14,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: 18,
        boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
      }}>
        <img src="assets/qr-sinetiquetas.png" alt="QR @sinetiquetas.club"
          style={{ width: '100%', height: 'auto', display: 'block' }}/>
      </div>

      {/* footer */}
      <div style={{
        position: 'absolute', left: 48, right: 48, bottom: 36,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <Mono style={{ color: CREAM, opacity: 0.85, fontSize: 16 }}>
          SINETIQUETAS.CLUB
        </Mono>
        <Mono style={{ color: CREAM, opacity: 0.85, fontSize: 16 }}>
          MENDOZA · AR
        </Mono>
      </div>
    </CardFrame>
  );
}

window.Cards = {
  CardFront, CardBack,
  HAISE: {
    name: 'Haise',
    lastName: 'Gimenez',
    role: 'SOMMELIER',
    specialty: 'Especializada en enología y gastronomía.',
    email: 'consultas@sinetiquetas.club',
  },
  DAIANA: {
    name: 'Daiana',
    lastName: 'Cortez',
    role: 'GERENTE DE HOSPITALIDAD',
    specialty: 'Especializada en Sommellierie.',
    email: 'consultas@sinetiquetas.club',
  },
  WALTER: {
    name: 'Walter',
    lastName: 'Cortez',
    role: 'SPEC DEVELOPER · SDD',
    specialty: 'Turismo, taninos y deadlines.',
    email: 'consultas@sinetiquetas.club',
  },
};

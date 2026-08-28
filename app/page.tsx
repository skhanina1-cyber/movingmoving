export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🚚 MovingMoving
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
        Rubbish Clearance &amp; Furniture Removal
      </p>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.6 }}>
        Book your collection online
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: '#1a1a2e',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem' }}>🚚 MovingMoving</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
        Rubbish Clearance &amp; Furniture Removal
      </p>
      <p style={{ marginTop: '2rem', opacity: 0.6 }}>
        Book your collection online
      </p>
    </div>
  )
}

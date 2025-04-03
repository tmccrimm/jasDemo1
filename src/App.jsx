function App() {
  return (
    <div className="container">
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1A202C',
          backgroundImage: `linear-gradient(rgba(26, 32, 44, 0.85), rgba(26, 32, 44, 0.85)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%232D3748'/%3E%3Cpath d='M50 25 L75 50 L50 75 L25 50 Z' fill='%236B46C1' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header className="header">
          <h1 className="title">Jasmine AI Assistant</h1>
        </header>

        <main className="main-content">
          <div className="widget-container">
            <elevenlabs-convai agent-id="Rz4EFCg9eO4lJbJM0DSm"></elevenlabs-convai>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

import Board from "./components/Board";


function App() {
  return (
    <div className="app-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{
          color: 'white',
          fontSize: '3rem',
          textShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '0.5rem'
        }}>
          Kanban Dashboard
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
          Manage your tasks with style
        </p>
      </header>

      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;

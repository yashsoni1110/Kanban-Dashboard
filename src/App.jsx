import Board from "./components/Board";


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          Kanban Dashboard
        </h1>
        <p className="app-subtitle">
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

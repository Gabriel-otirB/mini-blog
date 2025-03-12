import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <Outlet />
      </div>
    </main>
  )
}

export default App

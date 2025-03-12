import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App

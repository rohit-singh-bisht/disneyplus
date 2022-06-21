import './App.css';
import { Header } from './layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Errorpage } from './pages/Errorpage';

function App() {
  return (
    <Router>
        <Header />
        <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

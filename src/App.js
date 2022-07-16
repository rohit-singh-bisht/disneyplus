import './App.css';
import { Header } from './layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Errorpage } from './pages/Errorpage';
import { Footer } from './layout/Footer';

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
      <Footer/>
    </Router>
  );
}

export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Work1 from './pages/Work1';
import Work2 from './pages/Work2';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work1">Work 1</Link>
          </li>
          <li>
            <Link to="/work2">Work 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
      </Routes>
    </Router>
  );
}

export default App;

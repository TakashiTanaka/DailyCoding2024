// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Work1 from './pages/Work1';
import Work2 from './pages/Work2';

const App: React.FC = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/DailyCoding2024' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
      </Routes>
    </Router>
  );
};

export default App;

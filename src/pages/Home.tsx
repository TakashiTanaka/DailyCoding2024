// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>DailyCoding2024</h1>
      <nav>
        <ul>
          <li><Link to="/work1">Work 1</Link></li>
          <li><Link to="/work2">Work 2</Link></li>
          {/* 必要に応じて他の作品ページを追加 */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;

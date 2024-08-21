// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className='text-9xl'>DailyCoding2024</h1>
      <nav className='mt-4'>
        <ul className='text-7xl grid gap-2'>
          <li className='hover:underline'><Link to="/work1">08-21</Link></li>
          <li className='hover:underline'><Link to="/work2">Work 2</Link></li>
          {/* 必要に応じて他の作品ページを追加 */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;

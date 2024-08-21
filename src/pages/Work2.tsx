// src/pages/Work2.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Work2() {
  return (
    <section>
      <h1>Work 2: My Second Art Piece</h1>
      <Link to="/">Back to Home</Link> {/* Homeへのリンクを追加 */}
    </section>
  );
}

export default Work2;

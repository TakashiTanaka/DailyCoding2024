import React from 'react';
import Sketch from './components/Sketch';
import ArtPiece from './components/ArtPiece';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-blue-500">My Portfolio</h1>
      <Sketch />
      <ArtPiece title="Sample Art" image="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;

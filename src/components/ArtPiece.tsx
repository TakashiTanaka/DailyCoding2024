import React from 'react';

interface ArtPieceProps {
  title: string;
  image: string;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ title, image }) => (
  <div className="border p-4 shadow-md rounded-lg">
    <img src={image} alt={title} className="rounded w-full" />
    <h2 className="text-xl mt-4">{title}</h2>
  </div>
);

export default ArtPiece;

import React from 'react';
import PropertyCard from './PropertyCard';

const ResultsGrid = ({ properties, favorites, onToggleFavorite, onViewDetails, onDragStart, onDragEnd }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {properties.map((prop) => (
      <PropertyCard
        key={prop.id}
        property={prop}
        isFavorite={favorites.some((f) => f.id === prop.id)}
        onToggleFavorite={() => onToggleFavorite(prop)}
        onViewDetails={() => onViewDetails(prop.id)}
        onDragStart={(e) => onDragStart(e, prop)}
        onDragEnd={onDragEnd}
      />
    ))}
  </div>
);

export default ResultsGrid;

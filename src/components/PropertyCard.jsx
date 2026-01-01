import React from 'react';
import { StarIcon } from './Icons';

const PropertyCard = ({ property, isFavorite, onToggleFavorite, onViewDetails, onDragStart, onDragEnd }) => (
  <div
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    className="group flex flex-col gap-4 cursor-pointer"
    onClick={onViewDetails}
  >
    <div className="relative overflow-hidden aspect-[3/4] rounded-[3rem] shadow-xl shadow-theme-accent/10">
      <img
        src={property.mainImage}
        alt={property.shortDescription}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-white"
      >
        <StarIcon filled={isFavorite} />
      </button>
      <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-widest border border-white/30">
        {property.type}
      </div>
    </div>
    <div className="flex flex-col gap-2 px-4">
      <div className="flex justify-between items-baseline">
        <h3 className="text-2xl font-serif text-theme-text leading-tight">{property.shortDescription}</h3>
        <p className="text-lg font-sans font-bold text-theme-text/80">£{property.price.toLocaleString()}</p>
      </div>
      <p className="text-sm text-theme-text/60 line-clamp-2 font-sans leading-relaxed">{property.longDescription || property.shortDescription}</p>
      <div className="mt-2">
        <span className="text-sm font-bold text-theme-text border-b border-theme-text pb-0.5 hover:opacity-70 transition-opacity inline-block">
          View Details
        </span>
      </div>
    </div>
  </div>
);

export default PropertyCard;

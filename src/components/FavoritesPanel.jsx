import React from 'react';
import { StarIcon, TrashIcon } from './Icons';

const FavoritesPanel = ({ favorites, isDragging, onDragStart, onDragEnd, onDrop, onRemoveDrop, onClear, onToggleFavorite }) => (
  <section
    className={`bg-theme-card/50 p-8 rounded-[2.5rem] backdrop-blur-sm transition-all ${isDragging ? 'ring-2 ring-theme-accent' : ''}`}
    onDragOver={(e) => e.preventDefault()}
    onDrop={onDrop}
  >
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-serif text-theme-text flex items-center gap-2">
        Favorites ({favorites.length})
      </h2>
      {favorites.length > 0 && (
        <button onClick={onClear} className="text-xs text-theme-text/50 hover:text-theme-accent flex items-center gap-1 uppercase tracking-widest font-bold">
          <TrashIcon />
          Clear
        </button>
      )}
    </div>

    {favorites.length === 0 ? (
      <div className="py-12 text-center border-2 border-dashed border-theme-accent/20 rounded-[2rem]">
        <p className="text-sm text-theme-text/40 font-sans">Drag properties here</p>
      </div>
    ) : (
      <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
        {favorites.map((fav) => (
          <div
            key={fav.id}
            draggable
            onDragStart={(e) => onDragStart(e, fav)}
            onDragEnd={onDragEnd}
            className="flex items-center gap-4 p-3 bg-white/40 rounded-[1.5rem] border border-white/50 group hover:bg-white/60 transition-colors"
          >
            <img src={fav.mainImage} alt="" className="w-16 h-16 rounded-2xl object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-serif font-bold truncate text-theme-text">{fav.shortDescription}</p>
              <p className="text-xs text-theme-text/60 font-sans">£{fav.price.toLocaleString()}</p>
            </div>
            <button
              onClick={() => onToggleFavorite(fav)}
              className="p-2 text-theme-text/40 hover:text-theme-accent transition-colors"
            >
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
    )}

    {isDragging && (
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onRemoveDrop}
        className="mt-4 p-4 border-2 border-dashed border-theme-accent bg-theme-accent/10 text-theme-accent rounded-2xl text-center text-sm font-medium animate-pulse"
      >
        Drop here to remove
      </div>
    )}
  </section>
);

export default FavoritesPanel;

import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { addFavorite, filterProperties, removeFavorite } from './utils';
import FavoritesPanel from './components/FavoritesPanel';
import HeaderBar from './components/HeaderBar';
import PropertyDetails from './components/PropertyDetails';
import ResultsGrid from './components/ResultsGrid';
import SearchPanel from './components/SearchPanel';

const initialCriteria = {
  type: 'any',
  minPrice: '',
  maxPrice: '',
  minBedrooms: '',
  maxBedrooms: '',
  startDate: '',
  endDate: '',
  postcodeArea: '',
};

const App = () => {
  const [properties, setProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('elite_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [isDragging, setIsDragging] = useState(false);
  const [criteria, setCriteria] = useState(initialCriteria);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}properties.json`)
      .then((response) => response.json())
      .then((data) => setProperties(data.properties))
      .catch((error) => console.error('Error loading properties:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('elite_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredProperties = useMemo(() => filterProperties(criteria, properties), [criteria, properties]);

  const toggleFavorite = (property) => {
    setFavorites((prev) => (prev.some((f) => f.id === property.id) ? removeFavorite(prev, property.id) : addFavorite(prev, property)));
  };

  const clearFavorites = () => setFavorites([]);

  const onDragStart = (e, property) => {
    e.dataTransfer.setData('property', JSON.stringify(property));
    setIsDragging(true);
  };

  const onDragEnd = () => setIsDragging(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const data = e.dataTransfer.getData('property');
    if (data) {
      const property = JSON.parse(data);
      setFavorites((prev) => addFavorite(prev, property));
    }
  };

  const onRemoveDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const data = e.dataTransfer.getData('property');
    if (data) {
      const property = JSON.parse(data);
      setFavorites((prev) => removeFavorite(prev, property.id));
    }
  };

  const selectedProperty = useMemo(() => properties.find((p) => p.id === selectedPropertyId), [selectedPropertyId, properties]);

  if (selectedPropertyId && !selectedProperty) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <p className="text-lg text-slate-600">That property could not be found.</p>
        <button
          onClick={() => setSelectedPropertyId(null)}
          className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700"
        >
          Back to search
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-theme-bg text-theme-text font-sans">
      <HeaderBar onLogoClick={() => setSelectedPropertyId(null)} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {!selectedPropertyId ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 search-grid">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <SearchPanel criteria={criteria} setCriteria={setCriteria} />
              <FavoritesPanel
                favorites={favorites}
                isDragging={isDragging}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDrop={onDrop}
                onRemoveDrop={onRemoveDrop}
                onClear={clearFavorites}
                onToggleFavorite={toggleFavorite}
              />
            </div>

            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">{filteredProperties.length} Properties Found</h3>
              </div>

              {filteredProperties.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-2xl border border-slate-100">
                  <p className="text-slate-500 mb-2">No properties match your current search.</p>
                  <button onClick={() => setCriteria(initialCriteria)} className="text-indigo-600 font-semibold hover:underline">
                    Clear all filters
                  </button>
                </div>
              ) : (
                <ResultsGrid
                  properties={filteredProperties}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onViewDetails={(id) => setSelectedPropertyId(id)}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                />
              )}
            </div>
          </div>
        ) : (
          selectedProperty && (
            <PropertyDetails
              property={selectedProperty}
              onBack={() => setSelectedPropertyId(null)}
              isFavorite={favorites.some((f) => f.id === selectedProperty.id)}
              onToggleFavorite={() => toggleFavorite(selectedProperty)}
            />
          )
        )}
      </main>

      <footer className="bg-theme-bg border-t border-theme-accent/30 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-theme-text/60 text-sm">© 2024 Elite Estates. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-theme-text/40">

          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

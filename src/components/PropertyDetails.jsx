import React, { useState } from 'react';
import { StarIcon } from './Icons';

const PropertyDetails = ({ property, onBack, isFavorite, onToggleFavorite }) => {
  const [activeTab, setActiveTab] = useState('desc');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(property.mainImage);

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-theme-text/50 hover:text-theme-text transition-colors uppercase tracking-widest"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to search
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="bg-theme-card rounded-[3rem] overflow-hidden aspect-[16/10] shadow-xl shadow-theme-accent/10">
            <img src={selectedGalleryImage} alt="Property Main" className="w-full h-full object-cover transition-opacity duration-300" />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {[property.mainImage, ...property.images].map((img, i) => (
              <button
                key={`${img}-${i}`}
                onClick={() => setSelectedGalleryImage(img)}
                className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${selectedGalleryImage === img ? 'border-theme-accent scale-95' : 'border-transparent hover:border-theme-accent/30'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <span className="px-4 py-1.5 bg-theme-card text-theme-text text-xs font-bold rounded-full border border-theme-accent/20 uppercase tracking-widest">
              {property.type} For Sale
            </span>
            <button
              onClick={onToggleFavorite}
              className={`p-3 rounded-full border transition-all ${isFavorite ? 'bg-theme-accent text-white border-theme-accent' : 'bg-white border-theme-accent/20 text-theme-text/40 hover:text-theme-accent'}`}
            >
              <StarIcon filled={isFavorite} />
            </button>
          </div>

          <div>
            <h2 className="property-title text-5xl font-serif text-theme-text mb-4 leading-tight">{property.shortDescription}</h2>
            <p className="text-3xl font-sans font-bold text-theme-text/80 mb-6">£{property.price.toLocaleString()}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-5 py-3 bg-white/60 rounded-[1.5rem] text-theme-text font-bold text-sm border border-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v9" />
                </svg>
                {property.bedrooms} Bedrooms
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white/60 rounded-[1.5rem] text-theme-text font-bold text-sm border border-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {property.postcode}
              </div>
            </div>
          </div>

          <div className="mt-4 p-8 bg-theme-card/50 border border-white/50 rounded-[2.5rem] backdrop-blur-sm">
            <p className="text-xs font-bold text-theme-text/40 uppercase tracking-widest mb-4">Location</p>
            <p className="text-theme-text font-medium flex items-center gap-2 font-serif text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-theme-accent"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="M4.93 4.93l2.83 2.83" />
                <path d="M16.24 16.24l2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="M4.93 19.07l2.83-2.83" />
                <path d="M16.24 7.76l2.83-2.83" />
              </svg>
              {property.location.address}
            </p>
            <button className="w-full mt-8 h-14 bg-theme-text hover:bg-theme-text/90 text-white font-bold rounded-[1.5rem] shadow-lg shadow-theme-text/10 transition-all active:scale-95 uppercase tracking-widest text-sm">
              Contact Agent
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-theme-card/30 rounded-[3rem] border border-white/50 overflow-hidden">
        <div className="flex border-b border-white/50">
          {['desc', 'floor', 'map'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-6 text-sm font-bold transition-colors uppercase tracking-widest ${
                activeTab === tab ? 'text-theme-text bg-white/50' : 'text-theme-text/40 hover:text-theme-text/60'
              }`}
            >
              {tab === 'desc' ? 'Description' : tab === 'floor' ? 'Floor Plan' : 'Google Map'}
            </button>
          ))}
        </div>
        <div className="p-12 min-h-[400px]">
          {activeTab === 'desc' && (
            <div className="prose prose-slate max-w-none animate-in fade-in slide-in-from-left-4 duration-300">
              <h3 className="text-2xl font-serif text-theme-text mb-6">Property Highlights</h3>
              <p className="text-theme-text/80 leading-relaxed whitespace-pre-line font-sans text-lg">{property.longDescription}</p>
            </div>
          )}
          {activeTab === 'floor' && (
            <div className="flex flex-col items-center animate-in fade-in slide-in-from-right-4 duration-300">
              <img src={property.floorPlan} alt="Floor Plan" className="max-w-full h-auto rounded-3xl shadow-lg" />
              <p className="mt-6 text-sm text-theme-text/40 italic">For illustrative purposes only. All dimensions are approximate.</p>
            </div>
          )}
          {activeTab === 'map' && (
            <div className="h-[500px] w-full bg-white/50 rounded-[2rem] flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-theme-accent/5 opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-theme-card rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce border border-theme-accent/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-theme-accent"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-theme-text font-serif font-bold text-xl">{property.location.address}</p>
                  <p className="text-xs text-theme-text/40 mt-2 font-sans">
                    Coordinates: {property.location.lat}, {property.location.lng}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${property.location.lat},${property.location.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block px-8 py-3 bg-white border border-theme-accent/20 text-theme-text font-bold rounded-xl hover:bg-theme-card transition-colors uppercase tracking-widest text-xs"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

import React from 'react';
import { HouseIcon } from './Icons';

const HeaderBar = ({ onLogoClick }) => (
  <header className="bg-theme-bg sticky top-0 z-50 pt-6 pb-2">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="cursor-pointer" onClick={onLogoClick}>
        <h1 className="text-2xl font-serif text-theme-text tracking-wide">
          Elite Estates
        </h1>
      </div>

    </div>
  </header>
);

export default HeaderBar;

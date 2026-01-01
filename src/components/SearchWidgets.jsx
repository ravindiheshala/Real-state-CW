import React from 'react';

export const WidgetContainer = ({ label, icon, children }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-xs uppercase tracking-widest font-bold text-theme-text/60 flex items-center gap-2">
      {icon}
      {label}
    </label>
    <div className="relative">
      {children}
    </div>
  </div>
);

export const SelectWidget = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full h-12 px-4 bg-white/60 border border-theme-accent/20 rounded-2xl focus:ring-2 focus:ring-theme-accent/50 focus:border-theme-accent outline-none transition-all appearance-none cursor-pointer text-theme-text font-sans"
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export const InputWidget = ({ type = 'text', placeholder, value, onChange, min }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    min={min}
    onChange={(e) => onChange(e.target.value)}
    className="w-full h-12 px-4 bg-white/60 border border-theme-accent/20 rounded-2xl focus:ring-2 focus:ring-theme-accent/50 focus:border-theme-accent outline-none transition-all text-theme-text placeholder:text-theme-text/30 font-sans"
  />
);

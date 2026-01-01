import React from 'react';
import { WidgetContainer, SelectWidget, InputWidget } from './SearchWidgets';
import { SearchIcon } from './Icons';

const SearchPanel = ({ criteria, setCriteria }) => (
  <section className="bg-theme-card/50 p-8 rounded-[2.5rem] backdrop-blur-sm">
    <h2 className="text-3xl font-serif text-theme-text mb-8">
      Find Your Home
    </h2>
    <div className="grid grid-cols-1 gap-6">
      <WidgetContainer label="Property Type">
        <SelectWidget
          value={criteria.type}
          onChange={(val) => setCriteria({ ...criteria, type: val })}
          options={[
            { label: 'Any', value: 'any' },
            { label: 'House', value: 'house' },
            { label: 'Flat', value: 'flat' },
          ]}
        />
      </WidgetContainer>

      <div className="grid grid-cols-2 gap-4">
        <WidgetContainer label="Min Price">
          <InputWidget
            type="number"
            placeholder="e.g. 100000"
            value={criteria.minPrice}
            onChange={(val) => setCriteria({ ...criteria, minPrice: val === '' ? '' : Number(val) })}
          />
        </WidgetContainer>
        <WidgetContainer label="Max Price">
          <InputWidget
            type="number"
            placeholder="e.g. 1000000"
            value={criteria.maxPrice}
            onChange={(val) => setCriteria({ ...criteria, maxPrice: val === '' ? '' : Number(val) })}
          />
        </WidgetContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <WidgetContainer label="Min Bedrooms">
          <InputWidget
            type="number"
            placeholder="Any"
            value={criteria.minBedrooms}
            onChange={(val) => setCriteria({ ...criteria, minBedrooms: val === '' ? '' : Number(val) })}
          />
        </WidgetContainer>
        <WidgetContainer label="Max Bedrooms">
          <InputWidget
            type="number"
            placeholder="Any"
            value={criteria.maxBedrooms}
            onChange={(val) => setCriteria({ ...criteria, maxBedrooms: val === '' ? '' : Number(val) })}
          />
        </WidgetContainer>
      </div>

      <WidgetContainer label="Postcode Area">
        <InputWidget
          placeholder="e.g. NW1, BR1"
          value={criteria.postcodeArea}
          onChange={(val) => setCriteria({ ...criteria, postcodeArea: val })}
        />
      </WidgetContainer>

      <div className="grid grid-cols-2 gap-4">
        <WidgetContainer label="Date From">
          <InputWidget type="date" value={criteria.startDate} onChange={(val) => setCriteria({ ...criteria, startDate: val })} />
        </WidgetContainer>
        <WidgetContainer label="Date To">
          <InputWidget type="date" value={criteria.endDate} onChange={(val) => setCriteria({ ...criteria, endDate: val })} />
        </WidgetContainer>
      </div>
    </div>
  </section>
);

export default SearchPanel;

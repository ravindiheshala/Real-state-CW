/* eslint-env jest */
/* eslint-disable no-undef */
import { filterProperties, addFavorite, removeFavorite } from '../utils';
import propertiesData from '../../public/properties.json';

const PROPERTIES = propertiesData.properties;

describe('filterProperties', () => {
  const baseCriteria = {
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    startDate: '',
    endDate: '',
    postcodeArea: '',
  };

  test('returns all properties when criteria is empty/any', () => {
    const results = filterProperties(baseCriteria, PROPERTIES);
    expect(results.length).toBe(PROPERTIES.length);
  });

  test('filters by type and minimum price together', () => {
    const criteria = { ...baseCriteria, type: 'house', minPrice: 900000 };
    const results = filterProperties(criteria, PROPERTIES);
    expect(results.every((p) => p.type === 'house' && p.price >= 900000)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
  });

  test('filters by bedroom range', () => {
    const criteria = { ...baseCriteria, minBedrooms: 2, maxBedrooms: 3 };
    const results = filterProperties(criteria, PROPERTIES);
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((p) => p.bedrooms >= 2 && p.bedrooms <= 3)).toBe(true);
  });

  test('filters by date window and postcode area', () => {
    const criteria = {
      ...baseCriteria,
      startDate: '2024-09-01',
      endDate: '2024-11-30',
      postcodeArea: 'NW1',
    };
    const results = filterProperties(criteria, PROPERTIES);
    expect(results.every((p) => {
      const date = new Date(p.dateAdded);
      return (
        p.postcode.toUpperCase().startsWith('NW1') &&
        date >= new Date('2024-09-01') &&
        date <= new Date('2024-11-30')
      );
    })).toBe(true);
  });

  test('honors maximum price filter', () => {
    const criteria = { ...baseCriteria, maxPrice: 500000 };
    const results = filterProperties(criteria, PROPERTIES);
    expect(results.every((p) => p.price <= 500000)).toBe(true);
  });
});

describe('favorites helpers', () => {
  const sample = { id: 'abc', name: 'sample' };

  test('addFavorite prevents duplicates', () => {
    const first = addFavorite([], sample);
    const second = addFavorite(first, sample);
    expect(first.length).toBe(1);
    expect(second.length).toBe(1);
  });

  test('removeFavorite deletes by id', () => {
    const list = addFavorite([], sample);
    const next = removeFavorite(list, 'abc');
    expect(next.length).toBe(0);
  });
});

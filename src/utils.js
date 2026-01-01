/**
 * Filters properties based on the provided criteria.
 * @param {Object} criteria
 * @param {Array} properties
 * @returns {Array}
 */
export const filterProperties = (criteria, properties) => {
  return properties.filter((p) => {
    if (criteria.type && criteria.type !== 'any' && p.type !== criteria.type) return false;
    if (criteria.minPrice !== '' && Number(p.price) < Number(criteria.minPrice)) return false;
    if (criteria.maxPrice !== '' && Number(p.price) > Number(criteria.maxPrice)) return false;
    if (criteria.minBedrooms !== '' && Number(p.bedrooms) < Number(criteria.minBedrooms)) return false;
    if (criteria.maxBedrooms !== '' && Number(p.bedrooms) > Number(criteria.maxBedrooms)) return false;
    if (criteria.postcodeArea && !p.postcode.toUpperCase().startsWith(criteria.postcodeArea.toUpperCase())) return false;

    const pDate = new Date(p.dateAdded);
    if (criteria.startDate && pDate < new Date(criteria.startDate)) return false;
    if (criteria.endDate && pDate > new Date(criteria.endDate)) return false;

    return true;
  });
};

export const addFavorite = (favorites, property) => {
  if (favorites.some((f) => f.id === property.id)) return favorites;
  return [...favorites, property];
};

export const removeFavorite = (favorites, propertyId) => favorites.filter((f) => f.id !== propertyId);

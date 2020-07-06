export const filterDataByFilters = (array, filters = []) => {
  const filterKeys = Object.keys(filters);

  return array.filter(item => {
      return filterKeys.every(key => {
          if (!filters[key].length) return true;
          return filters[key](item);
      });
  });
}
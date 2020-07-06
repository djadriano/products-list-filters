import { createContext, useState, useEffect } from 'react';
import { filterDataByFilters } from '@/utils/functions';

const ProductsListContext = createContext();

const ProductsListProvider = ({ items, filter, filterCriteria, children }) => {
  const [filters, setFilters] = useState(filter);
  const [products, setProducts] = useState(items);

  // When filter products
  // Set the results
  useEffect(() => {
    setProducts(filterDataByFilters(items, filterCriteria(filters)));
  }, [filters]);

  // Set new filter based on type
  // Example: Colors: Yellow
  const addFilter = (type, value) => {
    const newFilters = {...filters};

    if(newFilters[type]) newFilters[type] = value;

    setFilters(newFilters);
  };

  return (
    <ProductsListContext.Provider value={{ filters, products, addFilter }}>
      {children}
    </ProductsListContext.Provider>
  );
};

export { ProductsListContext, ProductsListProvider };

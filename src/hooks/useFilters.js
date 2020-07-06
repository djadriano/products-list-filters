import { useState, useEffect, useContext, useRef } from "react";

import { ProductsListContext } from '@/contexts/ProductsList';

function useFilters(type = '') {
  const { addFilter } = useContext(ProductsListContext);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const inputMinValue = useRef(null);
  const inputMaxValue = useRef(null);

  // When the filter is selected
  // Add the filter into ProductsPage Context
  useEffect(() => {
    addFilter(type, selectedFilters);
    window.scrollTo(0,0);
  }, [selectedFilters]);

  // Toggle Check the filters
  function toggleCheckFilter(e) {
    const filterSelected = e.target;
    const isChecked = filterSelected.checked;
    const filterValue = filterSelected.value;

    if(isChecked) {
      setSelectedFilters([...selectedFilters, filterValue]);
    } else {
      if(selectedFilters.includes(filterValue)) {
        // Remove the unchecked filter from the state
        setSelectedFilters(selectedFilters.filter(item => item !== filterValue));
      }
    }
  }

  function checkPrice(e) {
    e.preventDefault();

    const {value: min} = inputMinValue.current;
    const {value: max} = inputMaxValue.current;

    addFilter(type, [min, max]);
  }

  return { toggleCheckFilter, inputMinValue, inputMaxValue, checkPrice };
}

export default useFilters;
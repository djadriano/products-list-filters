import { useState, useContext } from "react";
import { ProductsListContext } from '@/contexts/ProductsList';
import { ITEMS_PER_PAGE } from '@/utils/constants';

function usePagination(itemsPerPage = ITEMS_PER_PAGE) {
  const { products } = useContext(ProductsListContext);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(products.length / itemsPerPage);

  // Get the products data paginated
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return products.slice(0, end);
  }

  // set next page
  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  // check if contains next page
  function hasNextPage() {
    return currentPage < maxPage;
  }

  return { next, currentData, currentPage, setCurrentPage, maxPage, hasNextPage, itemsPerPage };
}

export default usePagination;
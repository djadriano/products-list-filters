import { FILTERS as FiltersData } from '@/utils/constants';
import Filters from '@/components/Filters/Filters';
import ListProducts from '@/components/ListProducts';

import { ProductsListProvider } from '@/contexts/ProductsList';

const fetcher = url => fetch(url).then(res => res.json());

const apiURL = `https://gist.githubusercontent.com/djadriano/80a74b094c3440b2d52fcd4e3e7fcac4/raw/daba73f0127ea7069a481e53090a4575d9a754ac/products-sale.json`;
// const apiURL = `http://localhost:3000/api/sale`;

export async function getStaticProps() {
  const products = await fetcher(apiURL);

  return {
    props: {
      products: products.data.allContentfulProductPage.edges,
      filters: {
        colors: FiltersData.colors
      }
    }
  }
}

// Define the filters for the products
const pageFilters = {
  colors: []
}

// Define the filters criteria
// Receive the array of filters used in Page Template
const pageFiltersCriteria = filters => {
  return {
    colors: ({ node }) => {
      const filter = filters.colors || [];

      if (!filter.length) return true;

      return node.colorFamily &&
             node.colorFamily.some(({ name }) => filter.includes(name));
    }
  }
};

// Define the Page template
// Receive the props from getStaticProps
function SaleProductsPage({ filters, products }) {
  return (
    <ProductsListProvider
      items={products}
      filter={pageFilters}
      filterCriteria={pageFiltersCriteria}>
      <Filters {...filters} />
      <ListProducts itemsPerPage={10} />
    </ProductsListProvider>
  )
}

export default SaleProductsPage
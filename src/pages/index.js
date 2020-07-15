import { FILTERS as FiltersData } from '@/utils/constants';
import Filters from '@/components/Filters/Filters';
import ListProducts from '@/components/ListProducts';

import { ProductsListProvider } from '@/contexts/ProductsList';

const fetcher = url => fetch(url).then(res => res.json());

const apiURL = `https://gist.githubusercontent.com/djadriano/af1b89deb62a9475f891135df81db635/raw/5377dc301cb769a17ceb326d192c044161b617e5/products.json`;
// const apiURL = `http://localhost:3000/api/products`;

export async function getStaticProps() {
  const products = await fetcher(apiURL);

  return {
    props: {
      products: products.data.allContentfulProductPage.edges,
      filters: FiltersData
    }
  }
}

// Define the initial filters for the products
const pageFilters = {
  colors: [],
  style: [],
  price: []
}

// Define the filters criteria
// Receive the array of filters used in Page Template
const pageFiltersCriteria = filters => {
  return {
    style: ({ node }) => {
      const filter = filters.style || [];

      if (!filter.length) return true;

      return node.categoryTags &&
             node.categoryTags.some(tag => filter.includes(tag));
    },
    colors: ({ node }) => {
      const filter = filters.colors || [];

      if (!filter.length) return true;

      return node.colorFamily &&
             node.colorFamily.some(({ name }) => filter.includes(name));
    },
    price: ({ node }) => {
      const filter = filters.price || [];

      if (!filter.length) return true;

      return node.shopifyProductEu &&
             node.shopifyProductEu.variants.edges.some(({ node }) => parseFloat(node.price) >= parseFloat(filter[0]) && parseFloat(node.price) <= parseFloat(filter[1]));
    }
  }
};

// Define the Page template
// Receive the props from getStaticProps
function ProductsPage({ filters, products }) {
  return (
    <ProductsListProvider
      items={products}
      filter={pageFilters}
      filterCriteria={pageFiltersCriteria}>
      <Filters {...filters} />
      <ListProducts />
    </ProductsListProvider>
  )
}

export default ProductsPage
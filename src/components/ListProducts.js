import { useContext, useEffect } from 'react';
import { motion } from "framer-motion"

import { ProductsListContext } from '@/contexts/ProductsList';
import usePagination from '@/hooks/usePagination';

const ListProducts = ({ itemsPerPage }) => {
  const { products } = useContext(ProductsListContext);
  const { currentData, next, currentPage, setCurrentPage, hasNextPage, itemsPerPage: itemsPerPagination } = usePagination(itemsPerPage);
  const productsList = currentData();

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  // When get fresh list of products
  // Set to first page
  useEffect(() => {
    setCurrentPage(1);
  }, [products])

  return (
    <>
      <h1 className="list-products-title">Total of products: <b>{products.length}</b> - Page: <b>{currentPage}</b> - Items per Page: <b>{itemsPerPagination}</b></h1>

      {productsList.length && (
        <ul className="list-products">
          {productsList.map((post, i) => {
            const { thumbnailImage, name, shopifyProductEu } = post.node;

            return (
              <motion.li
                className="fs fs--small"
                key={i + name}
                initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.6 }}>
                <figure className="list-products__figure">
                  {thumbnailImage && <motion.img src={thumbnailImage.file.url} width="100" height="100" loading="lazy" />}
                </figure>
                {name} - {shopifyProductEu.variants.edges[0].node.price}
              </motion.li>
            )
          })}
        </ul>
      )}

      {hasNextPage() && (
        <footer className="list-products__footer">
          <button onClick={next} className="list-products__button">Load more products</button>
        </footer>
      )}
    </>
  )
};

export default ListProducts;
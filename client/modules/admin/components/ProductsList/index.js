import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import ProductsListView from './ProductsList';

import {
  changeProductPage,
  countProducts,
  fetchProducts,
} from '../../state/operations';

const propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  changeProductPage: PropTypes.func.isRequired,
  countProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.shape({
    page: PropTypes.number,
    perPage: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
};
const defaultProps = {
  products: [],
};

const ProductsList = ({
  fetchProducts,
  changeProductPage,
  countProducts,
  products,
  pagination,
}) => {
  useEffect(() => {
    fetchProducts({
      page: pagination.page + 1,
      perPage: pagination.perPage,
    });
  }, [fetchProducts, pagination.page, pagination.perPage]);

  useEffect(() => {
    countProducts();
  }, [countProducts]);

  return (
    <ProductsListView
      products={products}
      onPageChange={changeProductPage}
      page={pagination.page}
      perPage={pagination.perPage}
      total={pagination.total}
    />
  );
};

ProductsList.propTypes = propTypes;
ProductsList.defaultProps = defaultProps;

const mapStateToProps = ({ admin: { products, productsPagination } }) => ({
  products,
  pagination: productsPagination,
});

export default compose(
  connect(
    mapStateToProps,
    {
      changeProductPage,
      countProducts,
      fetchProducts,
    },
  ),
)(ProductsList);

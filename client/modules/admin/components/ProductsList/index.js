import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import ProductsListView from './ProductsList';

import { updatePage, updatePerPage } from '../../../location';
import { withPagingParams } from '../../../location/utils';

import { countProducts, fetchProducts } from '../../state/operations';

const propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updatePerPage: PropTypes.func.isRequired,
  countProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  perPage: PropTypes.number,
  total: PropTypes.number,
};
const defaultProps = {
  products: [],
};

const ProductsList = ({
  fetchProducts,
  updatePage,
  updatePerPage,
  countProducts,
  products,
  page,
  perPage,
  total,
}) => {
  useEffect(() => {
    fetchProducts({ perPage, page });
  }, [fetchProducts, page, perPage]);

  useEffect(() => {
    countProducts();
  }, [countProducts]);

  return (
    <ProductsListView
      products={products}
      onPageChange={updatePage}
      onPerPageChange={updatePerPage}
      page={page}
      perPage={perPage}
      total={total}
    />
  );
};

ProductsList.propTypes = propTypes;
ProductsList.defaultProps = defaultProps;

const mapStateToProps = ({ admin: { products, totalProducts } }) => ({
  products,
  total: totalProducts,
});

export default compose(
  withPagingParams,
  connect(
    mapStateToProps,
    {
      updatePage,
      updatePerPage,
      countProducts,
      fetchProducts,
    },
  ),
)(ProductsList);

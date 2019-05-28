import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ProductsListView from './ProductsList';

import { fetchProducts } from '../../state/operations';

const propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  ),
};
const defaultProps = {
  products: [],
};

const ProductsList = ({ products }) => <ProductsListView products={products} />;

ProductsList.propTypes = propTypes;
ProductsList.defaultProps = defaultProps;

export default compose(
  connect(
    null,
    {
      fetchProducts,
    },
  ),
  lifecycle({
    componentDidMount() {
      const { fetchProducts } = this.props;
      fetchProducts();
    },
  }),
)(ProductsList);

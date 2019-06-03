import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import ProductsListView from './ProductsList';

import { fetchProducts } from '../../state/operations';

const propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
};
const defaultProps = {
  products: [],
};

const ProductsList = ({ products }) => <ProductsListView products={products} />;

ProductsList.propTypes = propTypes;
ProductsList.defaultProps = defaultProps;

const mapStateToProps = ({ admin: { products } }) => ({
  products,
});

export default compose(
  connect(
    mapStateToProps,
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

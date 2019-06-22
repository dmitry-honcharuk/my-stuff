import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import hideIf from '@client/utils/hoc/hideIf';
import withRouteParams from '@client/utils/hoc/withRouteParams';

import Page, { PageActions } from '../../components/Page';
import ProductDetails from '../../components/ProductDetails';
import ProductDetailsActions from '../../components/ProductDetails/ProductDetailsActions';
import { fetchProductDetails } from '../../state/operations';

const propTypes = {
  productId: PropTypes.string.isRequired,
  fetchProductDetails: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const ProductDetailsScreen = ({ productId, product, fetchProductDetails }) => {
  useEffect(() => {
    fetchProductDetails(+productId);
  }, [fetchProductDetails, productId]);

  return (
    <Page title={`Product - ${product.name}`}>
      <PageActions clearAfter>
        <ProductDetailsActions />
      </PageActions>
      <ProductDetails product={product} />
    </Page>
  );
};

ProductDetailsScreen.propTypes = propTypes;

const mapStateToProps = ({ admin: { productDetails } }) => ({
  product: productDetails,
});

export default compose(
  withRouteParams,
  connect(
    mapStateToProps,
    {
      fetchProductDetails,
    },
  ),
  hideIf(({ product }) => !product),
)(ProductDetailsScreen);

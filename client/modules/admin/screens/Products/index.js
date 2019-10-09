import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Page, { PageActions } from '../../components/Page';
import ProductsList from '../../components/ProductsList';

const Products = () => (
  <Page title="Products">
    <PageActions>
      <Button component={Link} to="/products/new" color="secondary">
        Create
      </Button>
    </PageActions>
    <ProductsList />
  </Page>
);

export default Products;

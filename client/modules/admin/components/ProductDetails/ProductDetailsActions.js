import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ spacing }) => ({
  actions: {
    marginBottom: spacing(2),
  },
}));

const ProductDetailsActions = () => {
  const classes = useStyles();

  return (
    <div className={classes.actions}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.info('CLICK')}
      >
        Edit
      </Button>
    </div>
  );
};

export default ProductDetailsActions;

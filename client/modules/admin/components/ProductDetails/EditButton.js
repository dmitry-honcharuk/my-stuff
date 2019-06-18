import React from 'react';
import Button from '@material-ui/core/Button';

const EditButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => console.info('CLICK')}
    >
      Edit
    </Button>
  );
};

export default EditButton;

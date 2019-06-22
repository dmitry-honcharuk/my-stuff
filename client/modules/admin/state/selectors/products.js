export const getProductEditMode = ({ admin }) => admin.productEditMode;

export const getProductDetails = ({ admin }) => admin.productDetails;

export const getProductFields = productDetails => {
  const keys = ['name', 'description'];

  return Object.keys(productDetails)
    .filter(key => keys.includes(key))
    .map(key => ({
      name: key,
      value: productDetails[key],
      label: key,
    }));
};

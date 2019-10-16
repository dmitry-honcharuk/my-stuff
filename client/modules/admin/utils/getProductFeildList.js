import isNil from 'lodash/isNil';

const getProductFeildList = (product, fields = Object.keys(product)) => {
  return fields.map(key => ({
    name: key,
    value: isNil(product[key]) ? '' : product[key],
    label: key,
  }));
};

export default getProductFeildList;

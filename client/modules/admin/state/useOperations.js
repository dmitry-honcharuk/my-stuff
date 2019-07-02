import useOperation from '../utils/useOperation';

import { removeProduct } from './operations';

export const useRemoveProduct = () => useOperation(removeProduct);

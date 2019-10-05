import mongoose from 'mongoose';

import User from './User';
import Category from './Category';

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  categories: [{ type: mongoose.Types.ObjectId, ref: Category }],
});

export default mongoose.model('Product', ProductSchema);

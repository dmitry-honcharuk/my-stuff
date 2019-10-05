import mongoose from 'mongoose';

import Role from './Role';

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: mongoose.Types.ObjectId,
      ref: Role,
    },
  ],
  personalPermissions: [String],
});

export default mongoose.model('User', UserSchema);

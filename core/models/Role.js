import mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [String],
});

export default mongoose.model('Role', RoleSchema);

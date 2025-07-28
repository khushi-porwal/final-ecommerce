// models/userModel.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email address"]
  },
  password: { type: String, required: [true, "Password is required"] },
  userType: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  age: {
    type: Number,
    default: 18
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});


const User = mongoose.model('User', userSchema);
export default User;

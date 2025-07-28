// controllers/auth/auth_controller.js

import dotenv from 'dotenv';
dotenv.config();

import User from '../../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

// ===========================
// REGISTER USER
// ===========================
export const registerUser = async (req, res) => {
  try {
    const { name, age, email, password, userType } = req.body; // ✅ include userType

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' }); // 409 Conflict
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      name,
      age,
      email,
      password: hashedPassword,
      userType, // ✅ Set this in the new user
    });

    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' }); // 201 Created
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};


// ===========================
// LOGIN USER
// ===========================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        role: existingUser.userType || 'user',
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        name: existingUser.name,
        email: existingUser.email,
        age: existingUser.age,
        userType: existingUser.userType,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import avatar from "../../assets/avatar.png";
import coding from "../../assets/coding.png";
import analysis from "../../assets/analysis.png";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (form.name.trim() === "") newErrors.name = "Username is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordErrors = [];
      if (form.password.length < 8) passwordErrors.push("at least 8 characters");
      if (!/[a-z]/.test(form.password)) passwordErrors.push("one lowercase");
      if (!/[A-Z]/.test(form.password)) passwordErrors.push("one uppercase");
      if (!/\d/.test(form.password)) passwordErrors.push("one number");
      if (!/[@$!%*?&]/.test(form.password)) passwordErrors.push("one special char");

      if (passwordErrors.length > 0) {
        newErrors.password = "Password must include " + passwordErrors.join(", ");
      }
    }

    if (form.role === "") newErrors.role = "Please select a role";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorsFound = validate();

    if (Object.keys(errorsFound).length > 0) {
      setErrors(errorsFound);
      return;
    }

    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        userType: form.role,
      };

      const res = await axios.post("http://localhost:4000/api/auth/register", payload);
      toast.success(res.data.message || "Registered successfully!");
      setSubmitted(true);

      setForm({ name: "", email: "", password: "", role: "" });

      setTimeout(() => {
        navigate("/login");
      }, 2000); // delay for toast visibility
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 to-blue-200 flex justify-center items-center px-4">
      <div className="hidden md:block">
        <img src={analysis} alt="analysis" className="w-40 h-40 mt-80 rounded-full" />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">Register User</h2>

        <div className="mb-4 relative">
          <PersonIcon className="absolute top-3 left-3 text-blue-300" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Username"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-1 focus:ring-blue-200 outline-none"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
        </div>

        <div className="mb-4 relative">
          <EmailIcon className="absolute left-3 top-3 text-blue-300" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-1 focus:ring-blue-200 outline-none"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
        </div>

        <div className="mb-4 relative">
          <KeyIcon className="absolute left-3 top-3 text-blue-300" />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-1 focus:ring-blue-200 outline-none"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password}</p>}
        </div>

        <div className="mb-4 relative">
          <GroupIcon className="absolute left-3 top-3 text-blue-300" />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-1 focus:ring-blue-200 outline-none"
          >
            <option value="">Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs mt-1 ml-2">{errors.role}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 hover:bg-blue-900 text-white py-2 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          <DriveFileRenameOutlineOutlinedIcon />
          Register
        </button>

        {submitted && (
          <p className="text-sm font-medium mt-3 text-center text-green-500">
            Submitted Successfully
          </p>
        )}

        <p className="text-sm text-center mt-4">
          Have an account?
          <Link to="/login" className="text-blue-600 font-medium ml-1">Sign in Here</Link>
        </p>
      </div>

      <div className="hidden md:block">
        <img src={avatar} alt="avatar" className="w-40 h-40 mt-2 rounded-full" />
      </div>
      <div className="hidden md:block">
        <img src={coding} alt="coding" className="w-40 h-40 mt-24 rounded-full" />
      </div>

      {/* ✅ Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Register;

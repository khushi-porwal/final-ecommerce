import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import styles

import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";

import progress from "../../assets/progress.png";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorFound = validate();

    if (Object.keys(errorFound).length > 0) {
      setErrors(errorFound);
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", form);

      const token = res.data.token;
      const user = res.data.user;
      const role = user.userType;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.userType);

      setSubmitted(true);
      toast.success(res.data.message || "Login successful");

      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      }, 2000); // Delay for toast display

    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 to-blue-200 flex justify-center">
      <img
        src={progress}
        alt="progress"
        className="w-100 h-100 absolute left-120 top-50 pointer-events-none"
      />

      <div className="bg-white p-8 rounded-2xl shadow-[-10px_0px_10px_rgba(0,0,0,0.3)] w-80 mt-50">
        <h2 className="text-xl font-semibold text-center mb-6">Sign In</h2>

        <div className="mb-6 relative">
          <EmailIcon className="absolute top-3 left-3 text-blue-300" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-200"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-2 ml-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6 relative">
          <KeyIcon className="absolute left-3 top-3 text-blue-300" />
          <input
            className="w-full pr-4 pl-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-200"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-2 ml-1">{errors.password}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 hover:bg-blue-900 text-white py-2 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          <LoginIcon />
          Sign In
        </button>

        {submitted && (
          <p className="text-sm text-green-500 text-center mt-2">
            Logged in successfully
          </p>
        )}

        <p className="text-sm text-center mt-4">
          Don't have an account yet?
          <Link to="/register" className="text-blue-600 font-medium ml-1">
            Sign up here
          </Link>
        </p>
      </div>

      {/* ✅ Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;

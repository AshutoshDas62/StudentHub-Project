import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://studenthub-backend-s4nw.onrender.com//src/pages/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.msg);
        navigate("/login");
      } else {
        alert("❌ " + data.msg);
      }

      
    } catch (error) {
      console.error(error);
      alert("❌ Cannot connect to backend");
    }
    console.log("Saving to:", FILE);
  };

  return (
    <div className="
  min-h-screen flex items-center justify-center px-4
  bg-gradient-to-br from-blue-100 via-white to-gray-200
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
  transition-colors duration-300
">

  <div className="
    w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-md
    bg-white/80 dark:bg-gray-900/80
    border border-gray-200 dark:border-gray-700
  ">

    {/* Header */}
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold flex justify-center gap-2
        text-gray-800 dark:text-white">
        📘 StudentHub
      </h1>

      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
        A Unified Platform for Productivity, Learning & Careers
      </p>
    </div>

    {/* Title */}
    <h2 className="text-xl font-semibold text-center mb-4
      text-gray-700 dark:text-white">
      Create Your Account
    </h2>

    {/* Features */}
    <ul className="text-sm mb-6 space-y-1
      text-gray-600 dark:text-gray-400">
      <li>🟢 Track Study Time & Stay Focused</li>
      <li>🔵 Access Study Resources & Materials</li>
      <li>🟠 Find Internships & Career Opportunities</li>
    </ul>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Name */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="
          w-full p-3 rounded-lg border
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-white
          border-gray-300 dark:border-gray-700
          focus:ring-2 focus:ring-blue-500
        "
      />

      {/* Email */}
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="
          w-full p-3 rounded-lg border
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-white
          border-gray-300 dark:border-gray-700
          focus:ring-2 focus:ring-blue-500
        "
      />

      {/* Password */}
      <input
        type={show ? "text" : "password"}
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="
          w-full p-3 rounded-lg border
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-white
          border-gray-300 dark:border-gray-700
          focus:ring-2 focus:ring-blue-500
        "
      />

      {/* Confirm Password */}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name="confirm"
          value={form.confirm}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="
            w-full p-3 rounded-lg border
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-white
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-blue-500
          "
        />

        <span
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3 cursor-pointer
            text-gray-500 dark:text-gray-400"
        >
          👁️
        </span>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full py-3 rounded-lg font-semibold text-white
          bg-green-600 hover:bg-green-700 transition
        "
      >
        Register
      </button>
    </form>

    {/* Login link */}
    <p className="text-center text-sm mt-6
      text-gray-600 dark:text-gray-400">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Login here
      </Link>
    </p>

    {/* Footer */}
    <p className="text-center text-xs text-gray-400 mt-6">
      © 2024 StudentHub. All rights reserved.
    </p>

  </div>
</div>
  );
}
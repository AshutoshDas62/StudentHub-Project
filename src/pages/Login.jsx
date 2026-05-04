import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("✅ Login Successful");
        navigate("/");
      } else {
        alert("❌ " + data.msg);
      }

    } catch (error) {
      console.error(error);
      alert("❌ Cannot connect to backend");
    }
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

    {/* Logo */}
    <div className="text-center mb-6">
      <h1 className="
        text-2xl font-bold flex justify-center gap-2
        text-gray-800 dark:text-white
      ">
        📘 StudentHub
      </h1>

      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
        A Unified Platform for Productivity, Learning & Careers
      </p>
    </div>

    {/* Heading */}
    <h2 className="
      text-xl font-semibold text-center mb-6
      text-gray-700 dark:text-white
    ">
      Login to StudentHub
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}
      <div>
        <label className="text-sm text-gray-600 dark:text-gray-300">
          📧 Email Address
        </label>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="
            w-full mt-1 p-3 rounded-lg border
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-white
            border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      {/* Password */}
      <div>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <label>🔒 Password</label>
          <span className="text-blue-500 hover:underline cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="
            w-full mt-1 p-3 rounded-lg border
            bg-white dark:bg-gray-800
            text-gray-800 dark:text-white
            border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-blue-500 to-blue-700
          hover:opacity-90 transition
        "
      >
        Login
      </button>
    </form>

    {/* Register */}
    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
      Don’t have an account?{" "}
      <Link
        to="/register"
        className="text-green-600 dark:text-green-400 font-medium hover:underline"
      >
        Register here
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
"use client";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 mt-[100px] w-full max-w-[636px]"
    >
      {/* Personal Info */}
      <h2 className="text-lg font-[poppins] font-[600] mb-8">
        Personal Information
      </h2>

      {/* First Name */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
        <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
          First name <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="First Name"
          className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
        />
      </div>

      {/* Last Name */}
      <div className="mb-[33px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
        <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
          Last name <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
          className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
        />
      </div>

      {/* Newsletter */}
      <div className="flex items-center gap-2 mb-[68px] w-full">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          className="w-4 h-4 border-gray-300 rounded cursor-pointer"
        />
        <label
          htmlFor="newsletter"
          className="text-sm font-[poppins] text-[#828282] ml-1 cursor-pointer"
        >
          Sign Up for Newsletter
        </label>
      </div>

      {/* Email & Password */}
      <h2 className="text-lg font-[poppins] font-[600] mb-[29px]">
        Email & Password
      </h2>

      {/* Email */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
        <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
          Email <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@email.com"
          className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
        />
      </div>

      {/* Password */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
        <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
          Password <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
          className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-[79px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
        <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
          Confirm Password <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirm Password"
          className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full mb-[179px]">
        <button
          type="submit"
          className="w-full sm:w-auto bg-[#7DB800] text-white font-[poppins] px-4 py-3.5 hover:bg-green-600 cursor-pointer"
        >
          Create an Account
        </button>
        <Link href="/">
          {" "}
          <button
            type="button"
            className="w-full sm:w-auto text-gray-500 hover:text-gray-700 font-[poppins] font-bold cursor-pointer"
          >
            Back
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

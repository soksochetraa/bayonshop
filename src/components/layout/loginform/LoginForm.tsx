"use client";
import Link from "next/link";
import React, { useState } from "react";

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    // Step 2 - Shipping Address
    street: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
    // Step 3 - Preferences
    preferredCategories: [] as string[],
    communication: {
      email: false,
      sms: false,
    },
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.communication) {
      setFormData({
        ...formData,
        communication: {
          ...formData.communication,
          [name]: checked,
        },
      });
    } else if (type === "checkbox" && name === "preferredCategories") {
      const newCategories = checked
        ? [...formData.preferredCategories, value]
        : formData.preferredCategories.filter((c) => c !== value);
      setFormData({ ...formData, preferredCategories: newCategories });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("You must accept the terms and conditions.");
      return;
    }
    console.log("Complete Form Submitted:", formData);
  };

  return (
    <form
      className="mx-auto p-6 mt-[100px] w-full max-w-[636px]"
      onSubmit={handleSubmit}
    >
      {/* Step Indicator */}
      <div className="mb-8 text-center font-[poppins] font-[600]">
        Step {currentStep} of 3
      </div>

      {/* Step 1: Personal Info */}
      {currentStep === 1 && (
        <>
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

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleNext}
              className="bg-[#7DB800] text-white font-[poppins] px-4 py-3.5 hover:bg-green-600 cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 2: Shipping Address */}
      {currentStep === 2 && (
        <>
          <h2 className="text-lg font-[poppins] font-[600] mb-8">
            Shipping Address
          </h2>

          {/* Street Address */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              Street Address <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              placeholder="Street Address"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          {/* Apartment */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              Apartment / Suite
            </label>
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              placeholder="Apartment / Suite (optional)"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          {/* City */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              City <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="City"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          {/* State */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              State / Province <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="State / Province"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          {/* Postal Code */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              Postal Code <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="Postal Code"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          {/* Country */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              Country <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="Country"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          {/* Phone */}
          <div className="mb-[79px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-[35px] w-full">
            <label className="text-[16px] sm:w-[143px] font-[poppins] text-[#3F3F3F]">
              Phone Number <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full border border-[#A2A2A2] p-3 text-[14px] focus:outline-0 focus:border-[#212121]"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="text-gray-500 hover:text-gray-700 font-[poppins] font-bold cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-[#7DB800] text-white font-[poppins] px-4 py-3.5 hover:bg-green-600 cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 3: Preferences */}
      {currentStep === 3 && (
        <>
          <h2 className="text-lg font-[poppins] font-[600] mb-8">
            Preferences & Terms
          </h2>

          {/* Preferred Categories */}
          <div className="mb-6">
            <span className="text-[16px] font-[poppins] text-[#3F3F3F]">
              Preferred Categories
            </span>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Electronics", "Clothing", "Books", "Sports"].map(
                (category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="preferredCategories"
                      value={category}
                      checked={formData.preferredCategories.includes(category)}
                      onChange={handleChange}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm font-[poppins] text-[#828282]">
                      {category}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="mb-6">
            <span className="text-[16px] font-[poppins] text-[#3F3F3F]">
              Communication Preferences
            </span>
            <div className="flex flex-wrap gap-4 mt-2">
              {["email", "sms"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer capitalize"
                >
                  <input
                    type="checkbox"
                    name={method}
                    checked={
                      formData.communication[
                        method as keyof typeof formData.communication
                      ]
                    }
                    onChange={handleChange}
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <span className="text-sm font-[poppins] text-[#828282]">
                    {method}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="mb-[79px] flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-sm font-[poppins] text-[#828282] ml-1 cursor-pointer"
            >
              I accept the Terms & Conditions{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="text-gray-500 hover:text-gray-700 font-[poppins] font-bold cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-[#7DB800] text-white font-[poppins] px-4 py-3.5 hover:bg-green-600 cursor-pointer"
            >
              Create Account
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default SignupForm;

import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = getDatabase(app);

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    admissionNumber: "",
    department: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    gender: false,
    admissionNumber: false,
    department: false
  });

  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        validationErrors[key] = "This field is required";
      }
    });

    if (formData.email && !emailReg.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      // Save data to Firebase
      await set(ref(db, `registrations/${formData.name}`), {
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        admissionNumber: formData.admissionNumber,
        department: formData.department
      });

      // Show success toast
      toast.success("Registration successful! Data uploaded.", {
        position: "top-center",
        autoClose: 3000,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        gender: "",
        admissionNumber: "",
        department: ""
      });
    } catch (error) {
      // Show error toast
      toast.error("Error uploading data: " + error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <ToastContainer />
      
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#025067] to-[#025067]/80 opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#025067] mb-1">Register</h2>
              <p className="text-gray-600 mb-8">Please fill your information below</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent transition`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">
                      <span className="mr-1">*</span>This field is required
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent transition`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">
                      <span className="mr-1">*</span>{errors.email}
                    </p>
                  )}
                </div>

                {/* Gender Selection */}
                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        id="Male"
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-[#025067] border-gray-300 focus:ring-[#025067]"
                      />
                      <label htmlFor="Male" className="ml-2 text-gray-700">
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Female"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-[#025067] border-gray-300 focus:ring-[#025067]"
                      />
                      <label htmlFor="Female" className="ml-2 text-gray-700">
                        Female
                      </label>
                    </div>
                  </div>
                  {errors.gender && (
                    <p className="mt-1 text-red-500 text-sm">
                      <span className="mr-1">*</span>Please select a gender
                    </p>
                  )}
                </div>

                {/* Admission Number Input */}
                <div>
                  <input
                    type="text"
                    name="admissionNumber"
                    placeholder="Admission Number"
                    value={formData.admissionNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.admissionNumber ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent transition`}
                    required
                  />
                  {errors.admissionNumber && (
                    <p className="mt-1 text-red-500 text-sm">
                      <span className="mr-1">*</span>This field is required
                    </p>
                  )}
                </div>

                {/* Department Dropdown */}
                <div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.department ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#025067] focus:border-transparent bg-white transition`}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Law">Law</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Business Administration">BCA</option>
                  </select>
                  {errors.department && (
                    <p className="mt-1 text-red-500 text-sm">
                      <span className="mr-1">*</span>This field is required
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#025067] hover:bg-[#025067]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025067]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#025067]">
          <div className="w-full h-full flex items-center justify-center p-12">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-[#025067]/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img 
                  src="global-futures[1] copy.jpg" 
                  alt="Registration" 
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x800?text=Registration+Image';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to your CSS for the blob animation
const styleTag = document.createElement('style');
styleTag.textContent = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
`;
document.head.appendChild(styleTag);

export default RegisterForm;
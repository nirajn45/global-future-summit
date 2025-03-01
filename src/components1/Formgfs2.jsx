import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { app } from "./firebaseConfig22";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from '../assets/SRegi.jpg';

const db = getDatabase(app);

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = "This field is required";
      }
    });

    if (formData.email && !emailReg.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
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
      await set(ref(db, registrations/${formData.name}), {
        Name: formData.name,
        Role: formData.role,
        Email: formData.email,
        Password: formData.password
      });

      toast.success("Registration successful! Data uploaded.", {
        position: "top-center",
        autoClose: 3000,
      });

      setFormData({ name: "", role: "", email: "", password: "" });
    } catch (error) {
      toast.error("Error uploading data: " + error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 w-full flex flex-col justify-center">
      <ToastContainer />
      {/* Name Field */}
      <div className="mb-6">
        <label className="block mb-2 font-normal">Full Name</label>
        <input
          type="text"
          name="name"
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <small className="text-red-500">{errors.name}</small>}
      </div>
      {/* Role Field */}
      <div className="mb-6">
        <label className="block mb-2 font-normal">Select Role</label>
        <select
          name="role"
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Choose an option</option>
          <option value="industrial_lead">GDG Panelist</option>
          <option value="hr_panelist">HR Panelist</option>
          <option value="industrial_panelist">Industrial Panelist</option>
        </select>
        {errors.role && <small className="text-red-500">{errors.role}</small>}
      </div>
      {/* Email Field */}
      <div className="mb-6">
        <label className="block mb-2 font-normal">Email Address</label>
        <input
          type="email"
          name="email"
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <small className="text-red-500">{errors.email}</small>}
      </div>
      {/* Password Field */}
      <div className="mb-6">
        <label className="block mb-2 font-normal">Password</label>
        <input
          type="password"
          name="password"
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <small className="text-red-500">{errors.password}</small>}
      </div>
      {/* Submit Button */}
      <button className="bg-[#025067] text-white py-3 px-6 rounded w-full text-lg" onClick={handleSubmit}>Register</button>
    </form>
  );
};

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen py-14 md:py-24 bg-white text-black mt-20 font-[Poppins]">
      <div className="container px-4 mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl items-center">
          {/* Image Section */}
          <div className="flex justify-center w-full h-auto">
            <img
              src={Register}
              alt="Register Illustration"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
          {/* Form Section */}
          <div className="flex justify-center w-full h-full">
            <div className="w-full max-w-md h-auto flex items-center">
              <div className="w-full">
                <h2 className="text-black text-3xl font-bold mb-6 text-center">
                  Join Us As <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">Speaker</span>
                </h2>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
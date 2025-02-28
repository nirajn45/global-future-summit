import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Register from "../assets/register.svg"; // Ensure the correct path

const SocialLoginButton = () => (
  <Fragment>
    <button className="bg-[#025067] text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4">
      <FontAwesomeIcon icon={faFacebook} className="mr-2 text-white" />
      <span className="text-center">Continue with Facebook</span>
    </button>
    <button className="bg-[#025067] text-white py-3 px-6 rounded w-full flex items-center justify-center mt-4">
      <FontAwesomeIcon icon={faGoogle} className="mr-2 text-white" />
      <span className="text-center">Continue with Google</span>
    </button>
  </Fragment>
);

const RegisterForm = () => {
  const [validated, setValidated] = useState(false);
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
  };

  return (
    <form
      noValidate
      validated={validated.toString()}
      onSubmit={handleSubmit}
      className="bg-white p-8  w-full flex flex-col justify-center"
    >
      <div className="mb-6">
        <label className="block mb-2 font-normal" htmlFor="role">
          Select Role
        </label>
        <select
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Choose an option</option>
          <option value="industrial_lead">Industrial Lead</option>
          <option value="hr_panelist">HR Panelist</option>
          <option value="industrial_panelist">Industrial Panelist</option>
          <option value="Participant">Participant</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-normal" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          id="email"
          placeholder="Enter Email Address"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-normal" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="w-full bg-gray-100 min-h-[50px] px-4 p-2 rounded-lg border border-gray-300 focus:border-[#025067]"
          id="password"
          placeholder="Enter Password"
          required
        />
      </div>
      <button className="bg-[#025067] text-white py-3 px-6 rounded w-full text-lg">
        Register
      </button>
      <div className="relative my-8">
        <hr className="border-t border-gray-300" />
        <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
          Or
        </span>
      </div>
      <SocialLoginButton />
    </form>
  );
};

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen py-14 md:py-24 bg-white text-black mt-20">
      <div className="container px-4 mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl items-center">
          {/* Image Section - Using <img> to show full image */}
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
                <h2 className="text-4xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b7797] to-[#16a3cc]">
            Register
            </span></h2> Your Account
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

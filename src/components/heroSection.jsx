import React from "react";
import { Building2 } from "lucide-react";

const StatCard = ({ number, label, dark = false }) => (
  <div
    className={`p-6 rounded-xl transform transition-all duration-300 hover:scale-105 ${
      dark ? "bg-[#025067] text-white" : "bg-gray-200"
    }`}
  >
    <h3 className="text-3xl font-bold mb-2">{number}</h3>
    <p className="text-sm opacity-80">{label}</p>
  </div>
);

const ConstructionLanding = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-screen mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <img
              src="Test\src\assets\global-summit-logo-png[2].png"
              alt="Global Summit Logo"
              className="h-8 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-[#025067] transition-colors"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#025067] transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#025067] transition-colors"
            >
              About
            </a>
            <button className="bg-[#025067] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Contact Us
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-8">
          <div className="relative rounded-2xl overflow-hidden">
            <video
              src="https://cdn.pixabay.com/video/2023/04/15/158968-818026239_large.mp4"
              className="w-full h-[450px] object-cover"
              
              autoPlay
              muted
              loop
            ></video>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end p-8">
              <div className="max-w-2xl text-white">
                <span className="inline-block backdrop-blur-lg px-4 py-1 rounded-full bg-white/20 text-sm mb-4">
                  FEATURED PROJECT
                </span>
                <h2 className="text-4xl font-bold mb-4">
                  Redefining Modern Architecture
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Leading the construction industry with innovative designs and
                  sustainable practices
                </p>
                <button className="bg-white text-[#025067] px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <StatCard number="34+" label="COMPLETED PROJECTS" />
          <StatCard number="49K" label="SQUARE METERS BUILT" />
          <StatCard number="$256M" label="PORTFOLIO VALUE" dark />
        </section>

        {/* CTA Section */}
        <section className="bg-[#025067] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next construction project and bring your
            vision to life
          </p>
          <button className="bg-white text-[#025067] px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default ConstructionLanding;

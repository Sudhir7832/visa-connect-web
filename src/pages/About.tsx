import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Target, Award, Check, Clock, Globe, ShieldCheck, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div 
        className="bg-cover bg-center py-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1469474968028-56623f02e42e)`,
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-xl text-white">Your trusted partner in visa and online services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-600 mb-8">
           <i>Visa & Online Services </i> is a dynamic and customer-focused visa consultancy firm that specializes
           in providing efficient and reliable visa-related services. Established in January 2024, our 
           company is a sole proprietorship based in New Delhi. We aim to simplify the often complex visa 
           process, offering our clients personalized, professional assistance to secure travel documentation 
           and fulfill their international travel needs with ease.
            <br />
           With a highly skilled team of experts, we ensure timely and accurate processing, tailored to the 
           specific requirements of each client. At <i> Visa & Online Services </i>, our mission is to provide 
           seamless visa solutions while upholding the highest standards of customer service and integrity.
          </p>

          {/* Values with distinct background colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="text-center p-6 rounded-lg bg-[#8B5CF6] text-white shadow-lg transform hover:scale-105 transition-transform">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-100">
                Dedicated professionals with years of experience
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#D946EF] text-white shadow-lg transform hover:scale-105 transition-transform">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-100">
                Simplifying the visa application process
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#0EA5E9] text-white shadow-lg transform hover:scale-105 transition-transform">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-100">
                Committed to excellence and client satisfaction
              </p>
            </div>
          </div>

          {/* Why Choose Us - Enhanced Section with Logical Colors */}
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div className="flex items-start space-x-3">
              <div className="bg-[#0EA5E9]/10 p-2 rounded-full">
                <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Expert Guidance</h3>
                <p>Professional consultation throughout the visa application process with detailed documentation support.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-[#F97316]/10 p-2 rounded-full">
                <HeartHandshake className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Personalized Service</h3>
                <p>Custom-tailored solutions based on your specific travel needs, visa type, and destination requirements.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-[#8B5CF6]/10 p-2 rounded-full">
                <Check className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">High Success Rate</h3>
                <p>Proven track record with excellent approval rates for various visa categories and countries.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-[#D946EF]/10 p-2 rounded-full">
                <Clock className="w-5 h-5 text-[#D946EF]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Time-Efficient Processing</h3>
                <p>Streamlined procedures that save you time and minimize delays in your visa application.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-[#0EA5E9]/10 p-2 rounded-full">
                <Globe className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Global Expertise</h3>
                <p>Extensive knowledge of passport and visa requirements for countries worldwide.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-[#F97316]/10 p-2 rounded-full">
                <Users className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Transparent Communication</h3>
                <p>Clear updates on your application status and honest guidance throughout the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

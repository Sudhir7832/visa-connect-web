import { Link } from "react-router-dom";
import { ArrowRight, Globe, FileCheck, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-secondary" />,
      title: "Visa Applications",
      description: "Expert assistance with visa applications for any country",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-secondary" />,
      title: "Document Verification",
      description: "Professional verification of all required documents",
    },
    {
      icon: <Clock className="w-12 h-12 text-secondary" />,
      title: "Fast Processing",
      description: "Quick and efficient processing of your applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Visa & Immigration Services
            </h1>
            <p className="text-xl mb-8">
              Expert guidance for all your visa and immigration needs
            </p>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-md inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a consultation</p>
          <Link
            to="/contact"
            className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-md inline-flex items-center group"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
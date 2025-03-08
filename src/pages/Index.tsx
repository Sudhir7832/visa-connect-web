
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileCheck, Shield, Plane, Building2, FileSignature } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12 text-secondary" />,
      title: "Visa Consultation",
      description: "Professional guidance for all types of visa applications",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-secondary" />,
      title: "Passport Services",
      description: "Assistance with passport applications and renewals",
      image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f"
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage solutions",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
    },
    {
      icon: <Plane className="w-12 h-12 text-secondary" />,
      title: "Ticket Booking",
      description: "Flight reservations and ticket booking services",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
    },
    {
      icon: <Building2 className="w-12 h-12 text-secondary" />,
      title: "Hotel Booking",
      description: "Worldwide hotel and accommodation reservations",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      icon: <FileSignature className="w-12 h-12 text-secondary" />,
      title: "Documents Attestation",
      description: "Professional document attestation services",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05)`,
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Professional Visa & Passport Services
            </h1>
            <p className="text-xl mb-8 text-white drop-shadow-lg">
              Expert guidance for all your visa and passport needs
            </p>
            <Link
              to="/contact"
              className="bg-[#F97316] hover:bg-[#FB923C] text-white px-8 py-3 rounded-md inline-flex items-center group"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
              <div className="relative p-8 text-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="relative text-white py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a consultation</p>
          <Link
            to="/contact"
            className="bg-[#0EA5E9] hover:bg-[#38BDF8] text-white px-8 py-3 rounded-md inline-flex items-center group"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="917982249043" />
    </div>
  );
};

export default Index;

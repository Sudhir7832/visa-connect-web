import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Target, Award } from "lucide-react";

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
          <p className="text-xl text-white">Your trusted partner in visa and immigration services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-600 mb-8">
            With years of experience in visa and immigration services, we have helped thousands
            of clients achieve their dreams of traveling, studying, and working abroad. Our
            team of experts is dedicated to providing professional guidance and support
            throughout your visa application process.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Dedicated professionals with years of experience
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Simplifying the visa application process
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">
                Committed to excellence and client satisfaction
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Professional guidance throughout the visa application process
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Personalized service tailored to your specific needs
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              High success rate in visa approvals
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              Transparent communication and regular updates
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

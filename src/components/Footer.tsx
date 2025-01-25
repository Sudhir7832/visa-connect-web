import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">V&O Services</h3>
            <p className="text-gray-300">
              Professional visa and passport services for a seamless experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>Email: Visa@vaoservices | Amit@vaoservices.in</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Business Ave, Suite 100</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} V&O Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

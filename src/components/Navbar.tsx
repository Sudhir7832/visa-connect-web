import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://placehold.co/40x40"
              alt="VisaServices Logo"
              className="w-10 h-10 rounded"
            />
            <span className="text-2xl font-bold text-primary">VisaServices</span>
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-secondary font-semibold"
                  : "text-gray-600 hover:text-secondary"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-secondary font-semibold"
                  : "text-gray-600 hover:text-secondary"
              } transition-colors duration-200`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-secondary font-semibold"
                  : "text-gray-600 hover:text-secondary"
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
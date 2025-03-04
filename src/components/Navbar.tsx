
import { Link, useLocation } from "react-router-dom";
import { Menu, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const NavLinks = () => (
    <>
      <Link
        to="/"
        className={`${
          isActive("/")
            ? "text-[#F97316] font-semibold"
            : "text-white hover:text-[#F97316]"
        } transition-colors duration-200`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${
          isActive("/about")
            ? "text-[#F97316] font-semibold"
            : "text-white hover:text-[#F97316]"
        } transition-colors duration-200`}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`${
          isActive("/contact")
            ? "text-[#F97316] font-semibold"
            : "text-white hover:text-[#F97316]"
        } transition-colors duration-200`}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="bg-[#1A1F2C] shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/f0103f9e-42d3-4e85-9041-dddbf0c91050.png"
              alt="V&O Services Logo"
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-white">Visa & Online Services</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1A1F2C] border-l-[#2A2F3C]">
                <div className="flex flex-col space-y-6 mt-6">
                  <NavLinks />
                  {/* Payment button in hamburger menu */}
                  <Link
                    to="/payment"
                    className={`${
                      isActive("/payment")
                        ? "text-[#F97316] font-semibold"
                        : "text-white hover:text-[#F97316]"
                    } transition-colors duration-200 flex items-center gap-2`}
                  >
                    <CreditCard className="h-5 w-5" />
                    Make Payment
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

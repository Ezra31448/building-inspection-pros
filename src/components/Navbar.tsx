
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-primary">
            BuildingInspectPro
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-primary hover:text-accent transition-colors">
              Services
            </a>
            <a href="#process" className="text-primary hover:text-accent transition-colors">
              Process
            </a>
            <a href="#about" className="text-primary hover:text-accent transition-colors">
              About
            </a>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Schedule Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#services"
                className="text-primary hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="text-primary hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#about"
                className="text-primary hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Inspection
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

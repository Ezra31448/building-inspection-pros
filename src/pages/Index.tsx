
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Expertise } from "../components/Expertise";
import { Testimonials } from "../components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Testimonials />
      <footer className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Your Trusted Partner in Building Inspections</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

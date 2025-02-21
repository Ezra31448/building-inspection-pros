
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Shield, Building2, CheckCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-accent/10 text-accent rounded-full px-4 py-2 mb-6">
              Certified Building Inspections
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Professional Building Inspections & R.1 Certification
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ensure your building meets all safety and compliance standards with our comprehensive
              inspection services. Get your R.1 Certificate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Schedule Inspection
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="Building Inspection"
                className="rounded-2xl shadow-lg relative z-10"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: Shield,
              title: "Certified Experts",
              description: "Licensed and experienced building inspectors",
            },
            {
              icon: Building2,
              title: "Comprehensive Service",
              description: "Thorough inspection of all building systems",
            },
            {
              icon: CheckCircle,
              title: "Fast Certification",
              description: "Quick turnaround for R.1 certificates",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

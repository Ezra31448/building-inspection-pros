
import { motion } from 'framer-motion';
import { FileCheck, Shield, Zap, AlertTriangle } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "R.1 Certificate Inspection",
      description: "Comprehensive building inspection for R.1 certification compliance.",
    },
    {
      icon: Shield,
      title: "Structural Assessment",
      description: "Detailed evaluation of building structural integrity and safety.",
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Complete inspection of electrical systems and safety measures.",
    },
    {
      icon: AlertTriangle,
      title: "Safety Compliance",
      description: "Verification of building safety standards and regulations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Inspection Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive building inspection services to ensure your property meets all
            safety and compliance requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

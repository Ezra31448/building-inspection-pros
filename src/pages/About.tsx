
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Safety First Approach",
    "Professional Excellence",
    "Regulatory Compliance",
    "Customer Satisfaction"
  ];

  const differentiators = [
    {
      title: "Experienced Team",
      description: "Our inspectors have over 20 years of combined experience"
    },
    {
      title: "Fast Turnaround",
      description: "Inspection reports delivered within 48 hours"
    },
    {
      title: "Comprehensive Service",
      description: "Complete building inspection and certification solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Company Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About BuildingInspectPro</h1>
                <p className="text-gray-600 mb-4">
                  BuildingInspectPro has been Thailand's leading building inspection company since 2000. 
                  We provide comprehensive inspection services ensuring safety and compliance for all types of buildings.
                </p>
                <p className="text-gray-600">
                  Our team of certified professionals brings decades of experience in building inspection, 
                  structural assessment, and safety compliance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112c4e56a1"
                  alt="Inspectors at work"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our mission is to ensure the safety and compliance of every building we inspect, 
                providing peace of mind to property owners and occupants.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-6 rounded-lg text-center"
                >
                  <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, FileText, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "Initial Consultation",
      description: "Schedule a consultation to discuss your inspection needs"
    },
    {
      icon: ClipboardCheck,
      title: "On-Site Inspection",
      description: "Thorough inspection of your property by certified professionals"
    },
    {
      icon: FileText,
      title: "Report & Recommendations",
      description: "Detailed report with findings and improvement suggestions"
    },
    {
      icon: Award,
      title: "R.1 Certificate",
      description: "Issuance of R.1 certificate upon meeting requirements"
    }
  ];

  const faqs = [
    {
      question: "How long does the inspection process take?",
      answer: "The on-site inspection typically takes 1-2 days, with the report delivered within 48 hours."
    },
    {
      question: "What is included in the R.1 certificate?",
      answer: "The R.1 certificate covers structural integrity, electrical systems, fire safety, and overall building compliance."
    },
    {
      question: "How often should I get my building inspected?",
      answer: "We recommend annual inspections to maintain compliance and ensure safety standards are met."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Process Steps */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined inspection process ensures thorough evaluation while making it easy for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;

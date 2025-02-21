
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
          alt="Building Inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="min-h-screen flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl"
          >
            Certified Building Inspections for Safety & Compliance
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl"
          >
            Professional building inspection services ensuring your property meets all safety and regulatory requirements
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              Schedule an Inspection
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-2" />
              <span className="text-sm">Certified Engineers</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 mb-2" />
              <span className="text-sm">Council Approved</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-2" />
              <span className="text-sm">R.1 Certified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

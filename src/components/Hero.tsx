
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
              บริการตรวจสอบอาคารที่ได้รับการรับรอง
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              บริการตรวจสอบอาคารมืออาชีพ และใบรับรอง R.1
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              มั่นใจได้ว่าอาคารของคุณตรงตามมาตรฐานความปลอดภัยและข้อกำหนดทั้งหมด 
              รับใบรับรอง R.1 ด้วยความมั่นใจ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                นัดตรวจสอบอาคาร
              </Button>
              <Button size="lg" variant="outline">
                ดูรายละเอียดเพิ่มเติม
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
                alt="การตรวจสอบอาคาร"
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
              title: "ผู้เชี่ยวชาญที่ได้รับการรับรอง",
              description: "ผู้ตรวจสอบอาคารที่มีใบอนุญาตและประสบการณ์",
            },
            {
              icon: Building2,
              title: "บริการครบวงจร",
              description: "ตรวจสอบระบบอาคารอย่างละเอียดครบถ้วน",
            },
            {
              icon: CheckCircle,
              title: "ใบรับรองรวดเร็ว",
              description: "ออกใบรับรอง R.1 ได้อย่างรวดเร็ว",
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

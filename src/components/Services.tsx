
import { motion } from 'framer-motion';
import { FileCheck, Shield, Zap, AlertTriangle } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "ตรวจสอบเพื่อใบรับรอง R.1",
      description: "ตรวจสอบอาคารอย่างครบถ้วนเพื่อการรับรองมาตรฐาน R.1",
    },
    {
      icon: Shield,
      title: "ประเมินโครงสร้าง",
      description: "ตรวจสอบความมั่นคงและความปลอดภัยของโครงสร้างอาคารอย่างละเอียด",
    },
    {
      icon: Zap,
      title: "ระบบไฟฟ้า",
      description: "ตรวจสอบระบบไฟฟ้าและมาตรการความปลอดภัยอย่างครบถ้วน",
    },
    {
      icon: AlertTriangle,
      title: "การปฏิบัติตามมาตรฐานความปลอดภัย",
      description: "ตรวจสอบมาตรฐานและข้อกำหนดด้านความปลอดภัยของอาคาร",
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
            บริการตรวจสอบอาคารของเรา
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            เราให้บริการตรวจสอบอาคารอย่างครบวงจร เพื่อให้มั่นใจว่าอาคารของคุณ
            ตรงตามข้อกำหนดด้านความปลอดภัยทั้งหมด
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


import { motion } from 'framer-motion';

export const Expertise = () => {
  const expertiseItems = [
    {
      title: "Thermal Imaging",
      description: "Detecting hidden issues with state-of-the-art thermal imaging technology.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece"
    },
    {
      title: "Structural Analysis",
      description: "Comprehensive analysis for ensuring structural integrity and safety.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },
    {
      title: "Safety Compliance",
      description: "Ensuring your building meets all safety and regulatory standards.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-purple-100 rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

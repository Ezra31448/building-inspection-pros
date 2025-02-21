
export const Testimonials = () => {
  const testimonials = [
    {
      quote: "ThaiInspect helped us identify potential issues in our new office building. Their service is thorough and professional.",
      author: "- Chalita S., Bangkok"
    },
    {
      quote: "The team was knowledgeable and provided detailed reports that were easy to understand.",
      author: "- Sudu K., Chiang Mai"
    },
    {
      quote: "ThaiInspect's expertise in safety compliance ensured our project met all national standards.",
      author: "- Anon P., Phuket"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <p className="text-purple-700 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

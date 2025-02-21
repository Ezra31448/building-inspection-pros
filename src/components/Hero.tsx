
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
          alt="Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to ThaiInspect
          </h1>
          <p className="text-xl mb-8">
            Your Trusted Partner in Building Inspections Across Thailand
          </p>
          <Button
            variant="default"
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

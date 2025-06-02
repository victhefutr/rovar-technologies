import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Brown",
    company: "TechNova Inc.",
    role: "CTO",
    testimonial: "The team at Rovar Technologies has been instrumental in building our AI capabilities. Their training programs helped our developers get up to speed quickly with machine learning techniques.",
    rating: 5,
    image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 2,
    name: "Jennifer Lee",
    company: "DataFlow Systems",
    role: "HR Director",
    testimonial: "We've hired multiple developers through Rovar's outsourcing program and have been consistently impressed with their skills and professionalism.",
    rating: 5,
    image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 3,
    name: "Thomas Garcia",
    company: "SecureNet",
    role: "Security Lead",
    testimonial: "The cybersecurity training our team received was comprehensive and practical. We've significantly improved our security posture thanks to Rovar Technologies.",
    rating: 4,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 4,
    name: "Sophia Williams",
    company: "CloudPulse",
    role: "Engineering Manager",
    testimonial: "Rovar helped us transition our entire infrastructure to the cloud with their expert DevOps training and consulting. The process was smooth and our team gained valuable skills.",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 5,
    name: "Daniel Park",
    company: "InnoVision",
    role: "Product Manager",
    testimonial: "The software engineers we hired through Rovar's talent acquisition service integrated seamlessly with our team and started contributing valuable code from day one.",
    rating: 4,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=500"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index} 
          className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setDirection('right');
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setDirection('left');
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        next();
      } else if (diff < -50) {
        prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      next();
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6"></div>
          <p className="text-gray-400">
            Hear from the organizations we've helped with our training, outsourcing, and onboarding solutions.
          </p>
        </div>

        <div className="relative">
          <div 
            className="relative overflow-hidden py-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 h-full">
                    <div className="flex items-center mb-6">
                      <div className="relative mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full w-5 h-5 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                        <div className="mt-1">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 italic text-lg mb-4">"{testimonial.testimonial}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ${
                  activeIndex === index ? 'bg-emerald-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
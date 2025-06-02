import React from 'react';
import { Brain, Code, Shield, Database, Users, BookOpen } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 group">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning",
      description: "Develop cutting-edge AI solutions and train professionals in ML techniques, algorithms, and frameworks."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Engineering",
      description: "Comprehensive training in modern programming languages, frameworks, and best practices for building robust applications."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      description: "Expert training in security protocols, threat detection, and defensive strategies to protect digital assets."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "DevOps",
      description: "Training in CI/CD pipelines, infrastructure as code, and cloud services to optimize development workflows."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "IT Outsourcing",
      description: "Connect with our pool of vetted tech experts for short-term projects or long-term partnerships."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Tech Onboarding",
      description: "Comprehensive onboarding programs to help new tech talent integrate seamlessly into your organization."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6"></div>
          <p className="text-gray-400">
            We offer a comprehensive suite of IT training, outsourcing, and onboarding services to meet the evolving needs of the technology sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
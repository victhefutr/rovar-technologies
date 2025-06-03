import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home, Bot, FileText } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  category: string;
}

const projects: Project[] = [
  {
    id: "flag-it",
    title: "Flag IT",
    description: "An incident reporting system where people can report issues in the environment from crime to damages or hazards using geolocation.",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <MapPin className="h-6 w-6" />,
    category: "Mobile App"
  },
  {
    id: "Proptera",
    title: "Proptera",
    description: "A real estate app where users can find houses to rent by directly liaising with housing agents, promoting transparency in the process.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <Home className="h-6 w-6" />,
    category: "Web Platform"
  },
  {
    id: "astro-boy",
    title: "Astro Boy",
    description: "A chat application that leverages OpenAI assistants to build intelligent app assistants for various use cases.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <Bot className="h-6 w-6" />,
    category: "AI Solution"
  },
  {
    id: "research",
    title: "Research Publications",
    description: "Our team regularly contributes to academic research, with papers published in major AI and computer science conferences.",
    image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: <FileText className="h-6 w-6" />,
    category: "Research"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="group relative overflow-hidden rounded-lg bg-gray-800 h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70"></div>

        <div className="absolute top-4 left-4 bg-emerald-500/90 text-white text-xs font-medium px-2.5 py-1 rounded">
          {project.category}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center space-x-2 mb-3">
          <div className="bg-emerald-500/10 text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center">
            {project.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>

        <p className="text-gray-400 text-sm flex-grow">{project.description}</p>

        <div className="mt-4 inline-flex items-center text-emerald-400 font-medium text-sm">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

const ProjectsSection: React.FC<{ homepage?: boolean }> = ({ homepage }) => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6"></div>
          <p className="text-gray-400">
            Explore our innovative projects and research contributions that showcase our expertise in various technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {homepage && (
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent text-white font-medium transition duration-300 border border-emerald-500/50 hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

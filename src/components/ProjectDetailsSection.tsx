import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  demoLink?: string;
  codeLink?: string;
}

const projectDetails: Record<string, ProjectDetail> = {
  "flag-it": {
    id: "flag-it",
    title: "Flag IT",
    description: "An incident reporting system where people can report issues in the environment from crime to damages or hazards using geolocation.",
    fullDescription: "Flag IT is a comprehensive incident reporting platform designed to empower citizens to report environmental issues, safety hazards, and criminal activities in real-time. By leveraging geolocation technology, the app precisely records incident locations, allowing authorities to respond swiftly and efficiently.",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: [
      "React Native for cross-platform mobile development",
      "Node.js backend with Express.js",
      "MongoDB for flexible data storage",
      "Google Maps API for geolocation services",
      "Firebase for real-time notifications",
      "JWT for secure authentication"
    ],
    challenges: [
      "Ensuring accurate geolocation tracking even in areas with poor GPS signal",
      "Creating an efficient incident categorization system for proper routing",
      "Managing privacy concerns while collecting necessary incident data",
      "Developing an offline mode for areas with limited connectivity"
    ],
    solutions: [
      "Implemented a hybrid location system using GPS, cell towers, and WiFi triangulation",
      "Created an AI-assisted categorization algorithm to properly classify reports",
      "Developed a strict data privacy system with optional anonymity",
      "Built a local storage solution that syncs when connectivity is restored"
    ],
    outcomes: [
      "Increased incident reporting by 48% in pilot cities",
      "Reduced average response time by 23 minutes",
      "Improved data collection for urban planning and public safety initiatives",
      "Created a more engaged citizen community focused on environmental stewardship"
    ],
    demoLink: "#",
    codeLink: "#"
  },
  "Homify": {
    id: "Homify",
    title: "Homify",
    description: "A real estate app where users can find houses to rent by directly liaising with housing agents, promoting transparency in the process.",
    fullDescription: "Housify revolutionizes the rental market by removing the opacity often associated with real estate transactions. Our platform connects prospective tenants directly with housing agents, providing real-time updates on property status, application progress, and any pending issues. This transparency helps build trust and streamlines the rental process.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: [
      "React.js with Next.js for the frontend",
      "TypeScript for type safety",
      "Node.js and Express for the backend",
      "PostgreSQL for data storage",
      "Redis for caching",
      "AWS S3 for image storage",
      "WebSockets for real-time communication"
    ],
    challenges: [
      "Creating a reliable verification system for legitimate housing agents",
      "Developing real-time tracking of application status",
      "Building an intuitive interface for both tenants and agents",
      "Implementing secure payment gateways for deposits and rent"
    ],
    solutions: [
      "Developed a multi-step verification process including license checks and reviews",
      "Implemented a state machine model for application tracking with webhooks",
      "Conducted extensive UX research with both tenants and agents",
      "Integrated multiple payment providers with fraud detection"
    ],
    outcomes: [
      "Reduced rental process time by an average of 7 days",
      "Increased tenant satisfaction ratings by 37%",
      "Helped agents increase their client portfolio by 28%",
      "Created a more transparent rental marketplace"
    ],
    demoLink: "https://homify-theta.vercel.app/",
    codeLink: "https://github.com/Samtegg/Homify"
  },
  "astro-boy": {
    id: "astro-boy",
    title: "Astro Boy",
    description: "A chat application that leverages OpenAI assistants to build intelligent app assistants for various use cases.",
    fullDescription: "Astro Boy is a groundbreaking platform that harnesses the power of OpenAI's advanced language models to create customized, intelligent assistants for businesses and individuals. These AI companions can be tailored for specific domains, from customer service and education to personal productivity and specialized technical support.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: [
      "React for frontend development",
      "Python with FastAPI for backend services",
      "OpenAI API integration",
      "Vector databases for semantic search",
      "WebSockets for real-time chat functionality",
      "Docker for containerization",
      "Kubernetes for orchestration"
    ],
    challenges: [
      "Ensuring AI responses are accurate and contextually appropriate",
      "Managing conversation history efficiently",
      "Developing a system for continuous learning and improvement",
      "Creating a simple interface for non-technical users to train assistants"
    ],
    solutions: [
      "Implemented context-aware processing with memory management",
      "Created a hybrid storage solution with tiered access patterns",
      "Developed feedback loops with human review for critical responses",
      "Built a no-code interface for assistant training and customization"
    ],
    outcomes: [
      "Reduced customer service response time by 74%",
      "Increased query resolution rate by 42%",
      "Enabled 24/7 support for previously time-limited services",
      "Created new revenue streams through assistant customization"
    ],
    demoLink: "#",
    codeLink: "https://github.com/victhefutr/gym-buddy"
  },
  "research": {
    id: "research",
    title: "Research Publications",
    description: "Our team regularly contributes to academic research, with papers published in major AI and computer science conferences.",
    fullDescription: "At Rovar Technologies, we believe in pushing the boundaries of technological innovation through rigorous academic research. Our team of scientists and engineers actively contributes to the global knowledge base by publishing cutting-edge papers in prestigious journals and presenting at international conferences. Our research spans machine learning, computer vision, natural language processing, and software engineering methodologies.",
    image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    technologies: [
      "PyTorch and TensorFlow for deep learning research",
      "CUDA for GPU acceleration",
      "High-performance computing clusters",
      "R and Python for statistical analysis",
      "LaTeX for academic publication"
    ],
    challenges: [
      "Balancing academic research with commercial applications",
      "Scaling experimental models for production environments",
      "Ensuring research reproducibility and validation",
      "Making complex research accessible to broader audiences"
    ],
    solutions: [
      "Developed a research-to-product pipeline with specific transitional steps",
      "Created scalable versions of research models with performance optimization",
      "Implemented rigorous documentation and open-source code releases",
      "Produced accompanying blog posts and videos explaining research findings"
    ],
    outcomes: [
      "Published 14 papers in top-tier conferences including NeurIPS, CVPR, and ICML",
      "Received 3 research grants for continued investigation",
      "Contributed to 5 open-source projects stemming from research",
      "Established collaborations with 3 major universities"
    ],
    demoLink: "#",
    codeLink: "#"
  }
};

interface ProjectDetailsSectionProps {
  projectId: string;
}

const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({ projectId }) => {
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Project Not Found</h2>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back to portfolio link */}
        <div className="mb-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero section */}
        <div className="relative rounded-xl overflow-hidden mb-16 bg-gray-800">
          <div className="h-80 md:h-96 lg:h-[500px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl">{project.description}</p>

            {(project.demoLink || project.codeLink) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    View Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}

                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent text-white font-medium transition duration-300 border border-emerald-500/50 hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    View Source Code
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Project details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">About the Project</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">{project.fullDescription}</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
            <ul className="space-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span className="text-gray-300">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Challenges and Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Challenges</h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-red-500/10 text-red-400 w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Solutions</h3>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-emerald-500/10 text-emerald-400 w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{solution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-gray-800 p-8 rounded-xl mb-16">
          <h3 className="text-xl font-semibold text-white mb-6">Outcomes & Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.map((outcome, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <div className="text-emerald-400 font-bold text-3xl mb-3">{`0${index + 1}`}</div>
                <p className="text-gray-300">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Interested in This Project?</h3>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium transition duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Contact Us for More Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsSection;

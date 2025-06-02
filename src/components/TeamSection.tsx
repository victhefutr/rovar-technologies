import React, { useState } from 'react';
import { Github as GitHub, Linkedin } from 'lucide-react';
import owolabi from '../images/owolabi.jpeg';
import simon from '../images/simon.jpeg';
import jesse from '../images/jesse.jpeg';
import victor from '../images/victor.jpg';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Victor Nweze",
    role: "CEO & Founder",
    image: victor,
    bio: "Alex has over 15 years of experience in the tech industry and founded Rovar Technologies with a vision to bridge the talent gap in the IT sector.",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: 2,
    name: "Simon Osime",
    role: "Lead Software Engineer",
    image: simon,
    bio: "Simon leads our technical strategy and oversees all training programs. His background in Software Engineering and Architecture has shaped our curriculum.",
    github: "https://github.com/Samtegg",
    linkedin: "https://www.linkedin.com/in/simon-osime-19aaa5180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 3,
    name: "Charles Collins Davies",
    role: "Design Lead",
    image: owolabi,
    bio: "Charles brings creativity and innovation to our design process, ensuring a user-first approach in every project.",
    github: "https://www.behance.net/charlescollins24",
    linkedin: "https://www.linkedin.com/in/collinsdavies-charles"
  },
  {
    id: 4,
    name: "Jesse Pepple",
    role: "UI/UX Engineer",
    image: jesse,
    bio: "Jesse is a  passionate UX/UI Designer and Mobile Application Developer with a strong focus on creating user-centered digital experiences.",
    github: "https://www.jesseportfolio.co.uk",
    linkedin: "https://www.linkedin.com/in/jesse-pepple-690336241/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-gray-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
        <p className="text-emerald-400 text-sm mb-3">{member.role}</p>

        <div className="flex space-x-3 mb-3">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label={`${member.name}'s GitHub`}
            >
              <GitHub className="h-5 w-5" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-300 text-sm">{member.bio}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC<{ homepage?: boolean }> = ({ homepage }) => {
  const displayMembers = homepage ? teamMembers.slice(0, 4) : teamMembers;

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expert Team</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6"></div>
          <p className="text-gray-400">
            Meet the talented professionals behind Rovar Technologies who are passionate about innovation and education in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

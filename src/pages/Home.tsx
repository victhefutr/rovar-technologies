import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection homepage />
      <TeamSection homepage />
      <TestimonialsSection />
      <ContactForm />
    </>
  );
};

export default Home;
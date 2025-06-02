import React from 'react';
import { Check, Award, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 bg-gray-900">
      {/* Hero Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Rovar Technologies</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-green-300 mb-8"></div>
              <p className="text-gray-300 text-lg mb-8">
                Rovar Technologies is a premier tech training, outsourcing, and onboarding company dedicated to bridging the gap between talent and opportunity in the tech industry. We empower individuals with cutting-edge skills and connect companies with exceptional tech professionals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-emerald-500/10 rounded-full mr-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300">Comprehensive training in Machine Learning, Computer Vision, Software Engineering, DevOps, and Cybersecurity</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-emerald-500/10 rounded-full mr-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300">IT outsourcing solutions with vetted professionals for short and long-term contracts</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 bg-emerald-500/10 rounded-full mr-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-gray-300">Seamless onboarding programs to integrate tech talent into your organization</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-green-300 mb-6"></div>
              <p className="text-gray-300">
                To transform the tech industry by providing world-class training, connecting companies with exceptional talent, and fostering innovation through continuous learning and adaptation.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-green-300 mb-6"></div>
              <p className="text-gray-300">
                To be the global leader in tech education and talent solutions, creating pathways to success for individuals and organizations in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Story</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">The Beginning</h3>
              <p className="text-gray-300">
                Founded in 2018 by a team of tech industry veterans who recognized the growing gap between traditional education and industry needs. What began as a small training program quickly expanded as demand grew.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Evolution</h3>
              <p className="text-gray-300">
                By 2020, we expanded our services to include IT outsourcing and talent placement, creating a complete ecosystem that serves both individuals seeking career advancement and companies needing skilled professionals.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Today</h3>
              <p className="text-gray-300">
                Now a global operation with training centers in multiple countries, we've helped launch thousands of careers and partnered with hundreds of companies to build their tech teams and develop innovative solutions.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Throughout our journey, our commitment to quality education, ethical business practices, and technology innovation has remained unwavering. We continue to evolve our programs to meet the changing demands of the tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Rovar Technologies</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6"></div>
            <p className="text-gray-400">
              What sets us apart in the competitive landscape of tech education and outsourcing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Industry-Leading Curriculum</h3>
              <p className="text-gray-300">
                Our training programs are developed in collaboration with industry experts and regularly updated to reflect the latest technologies and methodologies.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300">
                With a 92% job placement rate and client retention rate of 88%, our results speak for themselves. We measure our success by your success.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Global Network</h3>
              <p className="text-gray-300">
                Access to our worldwide network of professionals, mentors, and partner companies creates opportunities that extend beyond typical training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5,000+</div>
              <p className="text-emerald-400 uppercase text-sm tracking-wider">Professionals Trained</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">250+</div>
              <p className="text-emerald-400 uppercase text-sm tracking-wider">Partner Companies</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15</div>
              <p className="text-emerald-400 uppercase text-sm tracking-wider">Countries Served</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">92%</div>
              <p className="text-emerald-400 uppercase text-sm tracking-wider">Job Placement Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Instagram, Twitter, Linkedin, Github as GitHub, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Cpu className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300">
                Rovar Technologies
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Empowering the next generation of tech professionals through expert training,
              outsourcing, and onboarding solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/rovar_technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/rovar_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/rovar-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/victhefutr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Machine Learning
              </li>
              <li className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Computer Vision
              </li>
              <li className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Software Engineering
              </li>
              <li className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                DevOps
              </li>
              <li className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Cybersecurity Training
              </li>
              <li className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                IT Outsourcing
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 mt-0.5" />
                <span className="text-gray-400 text-sm">info@rovartechnologies.com</span>
              </li>
              <li className="text-gray-400 text-sm mt-2">
                <Cpu className="h-5 w-5 text-emerald-400 inline-block mr-1" />
                 +447848399742
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Rovar Technologies. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy-policy" className="text-gray-500 hover:text-emerald-400 text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-500 hover:text-emerald-400 text-xs">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-500 hover:text-emerald-400 text-xs">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

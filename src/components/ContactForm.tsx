import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let’s Connect</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            We're always happy to hear from you. Whether it's a business inquiry, a tech question, or just a hello —
            feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-start space-x-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-1">Email Us</h4>
              <a href="mailto:info@rovartechnologies.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              info@rovartech.onmicrosoft.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-1">Call Us</h4>
              <a href="tel:+15551234567" className="text-gray-400 hover:text-emerald-400 transition-colors">
                +447848399742
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-1">Visit Us</h4>
              <p className="text-gray-400">
                We are a technology company <br />
                based in the UK, with a global reach.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Rovar Technologies. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

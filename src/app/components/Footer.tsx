import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, ArrowUp, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitForm } from '../lib/submitForm';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await submitForm({ email, formType: 'newsletter' });
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } catch {
      // silently fail for newsletter
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why D2DX2', id: 'why-d2dx2' },
    { label: 'Journey', id: 'journey' },
  ];

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-1">
              <img
                src="/pngs/full_logo_noBg-removebg-preview.png"
                alt="D2DX2 Capital"
                className="h-25 w-auto object-contain drop-shadow-[0_10px_28px_rgba(37,99,235,0.12)]"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Capital-backed execution ecosystem for scalable ventures.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm group flex items-center"
                  >
                    <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Innovation Hub, Sector 15,<br />
                  Gurugram, Haryana 122001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">hello@d2dx2capital.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe for venture updates and insights.
            </p>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm font-medium"
              >
                Thanks for subscribing!
              </motion.p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center space-x-2 group disabled:opacity-70"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span className="text-sm font-semibold">Subscribe</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800/80">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} D2DX2 Capital. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

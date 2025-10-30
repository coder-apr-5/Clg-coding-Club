import React from 'react';
import { Code2, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">CodeCraft</span>
            </div>
            <p className="text-gray-400">
              Empowering the next generation of developers through community, learning, and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@codecraft.edu</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Dakshin Gobindapur, Sonarpur, Kolkata - 700145</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
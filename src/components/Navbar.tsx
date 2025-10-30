import React from 'react';
import { Sun, Moon, Code2, Trophy, Calendar, BookOpen, Users, Home, Info, MessageSquare } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'dark bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} glitch-text`}>
              CodeCraft Club
            </span>
          </div>

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                    ${activeSection === item.id
                      ? 'bg-purple-500 text-white'
                      : darkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md ${
              darkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
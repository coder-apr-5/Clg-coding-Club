import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Upcoming Events Ticker - Fixed */}
      <div className="fixed top-16 left-0 right-0 h-12 bg-white/95 dark:bg-gray-800/95 z-40 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="relative overflow-hidden h-full">
          <div className="flex items-center h-full animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                {events.map((event, index) => (
                  <div key={`${i}-${index}`} className="flex items-center gap-2">
                    <span className="text-purple-600 dark:text-purple-400">•</span>
                    <span className="text-gray-900 dark:text-gray-100">{event.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <main className="mt-8">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block text-purple-600 dark:text-purple-400 font-bold">
              Welcome to CodeCraft
            </span>
            <span className="block text-purple-500 xl:inline">
              Where Code Meets Creativity
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-900 dark:text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Join our vibrant community of passionate coders, innovators, and problem solvers.
            Together, we build, learn, and grow in the world of technology.
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center gap-4">
            <button className="px-8 py-3 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors flex items-center">
              Join Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-3 rounded-md text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              Learn More
            </button>
          </div>
        </main>

        {/* Vision & Mission */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-1 rounded-2xl shadow-xl">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                To become the leading platform for nurturing tech talent and fostering innovation in the collegiate tech community.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-1 rounded-2xl shadow-xl">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                To empower students through hands-on learning experiences, collaborative projects, and industry connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const events = [
  { title: 'Annual Hackathon 2024' },
  { title: 'Web Dev Workshop' },
  { title: 'AI/ML Study Group' },
  { title: 'Tech Talk: Blockchain' }
];

export default Hero;
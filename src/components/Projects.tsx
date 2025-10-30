import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Smart Campus Navigator',
    description: 'An AI-powered mobile app helping students navigate campus facilities and services efficiently.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    tech: ['React Native', 'TensorFlow', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 156,
    forks: 45
  },
  {
    id: 2,
    title: 'StudyBuddy AI',
    description: 'A collaborative learning platform that uses AI to match students with study partners and resources.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
    tech: ['Python', 'FastAPI', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 234,
    forks: 89
  },
  {
    id: 3,
    title: 'EcoTrack',
    description: 'IoT-based system for monitoring and optimizing energy usage across campus buildings.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
    tech: ['Arduino', 'MQTT', 'Vue.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 189,
    forks: 67
  },
  {
    id: 4,
    title: 'Virtual Lab Assistant',
    description: 'AR-based application providing interactive guidance for laboratory experiments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    tech: ['Unity', 'C#', 'ARKit'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 145,
    forks: 34
  }
];

const Projects = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            Our Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Innovative solutions created by our talented members
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6 text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    {project.forks}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
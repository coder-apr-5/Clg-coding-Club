import React from 'react';
import { Code2, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Learn & Grow',
      description: 'Develop your coding skills through workshops, hackathons, and peer programming sessions.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a vibrant community of passionate developers and tech enthusiasts.'
    },
    {
      icon: Target,
      title: 'Industry Focus',
      description: 'Get exposure to real-world projects and industry-standard practices.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Transform your ideas into reality with cutting-edge technologies.'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            About CodeCraft
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Empowering the next generation of developers
          </p>
        </div>

        <div className="mt-12">
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-400">
            <p className="lead">
              CodeCraft is more than just a college coding club - it's a community of passionate developers, 
              innovators, and problem solvers who come together to learn, create, and grow in the world of technology.
            </p>
            
            <p>
              Founded in 2023, our mission is to provide a collaborative environment where students can develop their 
              programming skills, work on real-world projects, and connect with industry professionals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-purple-50 dark:bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">500+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">30+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
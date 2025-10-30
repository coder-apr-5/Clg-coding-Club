import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers: {
  name: string;
  role: string;
  linkedin: string;
  twitter: string;
  github?: string;
  image?: string;
}[] = [
  {
    name: 'Dr. Koushikk Bhattacharya',
    role: 'Club President',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    image: 'https://via.placeholder.com/400x300?text=Dr.+Koushikk+Bhattacharya'
  },
  {
    name: 'Rajarshi Mondal',
    role: 'IOT/Robotics Lead',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    image: 'https://via.placeholder.com/400x300?text=Rajarshi+Mondal'
  },
  {
    name: 'Sarnick Chakraborty',
    role: 'Web Dev Lead',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    image: 'https://via.placeholder.com/400x300?text=Sarnick+Chakraborty'
  },
  {
    name: 'Ashmit ',
    role: 'AI & ML Lead',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    image: 'https://via.placeholder.com/400x300?text=Ashmit'
  },
  {
    name: 'Rudranil Dutta',
    role: 'DSA Lead',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    image: 'https://via.placeholder.com/400x300?text=Rudranil+Dutta'
  },
  {
    name: 'Subhakash ',
    role: 'Digital Marteking Lead',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    image: 'https://via.placeholder.com/400x300?text=Subhakash'
  }
];

const Team = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold glitch-text dark:text-white">
            Meet the Team
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-500 dark:text-purple-400">
                  {member.role}
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={member.github}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
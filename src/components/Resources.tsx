import { Video, Code, FileText, Link as LinkIcon, Download } from 'lucide-react';

const resources = [
  {
    category: 'Learning Paths',
    items: [
      {
        title: 'Web Development Fundamentals',
        description: 'Complete guide to HTML, CSS, and JavaScript basics',
        icon: Code,
        link: '#'
      },
      {
        title: 'Mobile App Development',
        description: 'Learn to build iOS and Android applications',
        icon: Code,
        link: '#'
      }
    ]
  },
  {
    category: 'Video Tutorials',
    items: [
      {
        title: 'React.js Crash Course',
        description: 'Build modern web applications with React',
        icon: Video,
        link: '#'
      },
      {
        title: 'Python for Beginners',
        description: 'Introduction to Python programming',
        icon: Video,
        link: '#'
      }
    ]
  },
  {
    category: 'Documentation',
    items: [
      {
        title: 'API Guidelines',
        description: 'Best practices for RESTful API design',
        icon: FileText,
        link: '#'
      },
      {
        title: 'Code Style Guide',
        description: 'Coding standards and conventions',
        icon: FileText,
        link: '#'
      }
    ]
  },
  {
    category: 'External Resources',
    items: [
      {
        title: 'GitHub Student Pack',
        description: 'Free developer tools for students',
        icon: LinkIcon,
        link: '#'
      },
      {
        title: 'AWS Education',
        description: 'Cloud computing resources',
        icon: LinkIcon,
        link: '#'
      }
    ]
  }
];

const Resources = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            Learning Resources
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Curated materials to help you excel in programming
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {resources.map((section, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {section.category}
              </h3>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                        <a
                          href={item.link}
                          className="mt-2 inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                        >
                          Learn more
                          <Download className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 dark:bg-gray-800/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need More Resources?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join our Discord community to access more learning materials and get help from fellow developers.
          </p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300">
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
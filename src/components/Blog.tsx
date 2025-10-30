import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Web Development in 2024',
    excerpt: 'A comprehensive guide to modern web development tools and frameworks.',
    author: 'Alex Chen',
    date: 'March 1, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Machine Learning: From Theory to Practice',
    excerpt: 'Learn how to implement machine learning algorithms in real-world applications.',
    author: 'Sarah Johnson',
    date: 'February 28, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80',
    category: 'Machine Learning'
  },
  {
    id: 3,
    title: 'The Future of Mobile Development',
    excerpt: 'Exploring emerging trends and technologies in mobile app development.',
    author: 'Michael Park',
    date: 'February 25, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&q=80',
    category: 'Mobile Development'
  },
  {
    id: 4,
    title: 'Cybersecurity Best Practices for Developers',
    excerpt: 'Essential security practices every developer should know.',
    author: 'Emily Rodriguez',
    date: 'February 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
    category: 'Security'
  }
];

const Blog = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold glitch-text dark:text-white">
            Latest Articles
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Insights and tutorials from our community
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <button className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
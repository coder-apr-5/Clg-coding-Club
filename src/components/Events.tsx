import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Annual Hackathon 2024',
    date: 'March 15-17, 2024',
    time: '48 Hours',
    location: 'Main Campus, Tech Building',
    description: 'Join us for our biggest hackathon of the year! Build innovative projects, win prizes, and network with industry professionals.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
    attendees: 200,
    category: 'Hackathon'
  },
  {
    id: 2,
    title: 'Web Development Workshop',
    date: 'March 22, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Room 301, CS Department',
    description: 'Learn modern web development techniques using React and Next.js. Perfect for beginners and intermediate developers.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
    attendees: 50,
    category: 'Workshop'
  },
  {
    id: 3,
    title: 'AI/ML Study Group',
    date: 'Weekly - Every Thursday',
    time: '5:00 PM - 7:00 PM',
    location: 'Virtual Meeting',
    description: 'Deep dive into artificial intelligence and machine learning concepts with hands-on projects and discussions.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80',
    attendees: 30,
    category: 'Study Group'
  },
  {
    id: 4,
    title: 'Tech Talk: Blockchain',
    date: 'March 29, 2024',
    time: '3:00 PM - 5:00 PM',
    location: 'Auditorium',
    description: 'Industry experts share insights about blockchain technology and its applications in modern software development.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
    attendees: 150,
    category: 'Tech Talk'
  }
];

const Events = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-purple-600 text-white px-6 py-3 rounded-lg inline-block">
            Upcoming Events
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Join us for exciting coding events and workshops
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="w-5 h-5 mr-2" />
                    {event.attendees} expected attendees
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
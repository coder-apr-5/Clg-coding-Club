import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

const leaderboardData = {
  'Web Development': [
    { rank: 1, name: 'Name 1', points: 2500, achievements: 15 },
    { rank: 2, name: 'Name 2', points: 2350, achievements: 14 },
    { rank: 3, name: 'Name 3', points: 2200, achievements: 13 },
    { rank: 4, name: 'Name 4', points: 2100, achievements: 12 },
    { rank: 5, name: 'Name 5', points: 2000, achievements: 11 }
  ],
  'IOT': [
    { rank: 1, name: 'Name 3', points: 2400, achievements: 16 },
    { rank: 2, name: 'Name 4', points: 2250, achievements: 13 },
    { rank: 3, name: 'Name 1', points: 2150, achievements: 12 },
    { rank: 4, name: 'Name 2', points: 2050, achievements: 11 },
    { rank: 5, name: 'Name 5', points: 1950, achievements: 10 }
  ],
  'Robotics': [
    { rank: 1, name: 'Name 4', points: 2300, achievements: 14 },
    { rank: 2, name: 'Name 7', points: 2200, achievements: 13 },
    { rank: 3, name: 'Name 6', points: 2100, achievements: 12 },
    { rank: 4, name: 'Name 8', points: 2000, achievements: 11 },
    { rank: 5, name: 'Name 3', points: 1900, achievements: 10 }
  ],
  'DSA': [
    { rank: 1, name: 'Name 5', points: 2600, achievements: 17 },
    { rank: 2, name: 'Name 10', points: 2450, achievements: 15 },
    { rank: 3, name: 'Name 9', points: 2300, achievements: 14 },
    { rank: 4, name: 'Name 2', points: 2200, achievements: 13 },
    { rank: 5, name: 'Name 12', points: 2100, achievements: 12 }
  ],
  'Digital Marketing': [
    { rank: 1, name: 'Name 11', points: 2200, achievements: 12 },
    { rank: 2, name: 'Name 7', points: 2100, achievements: 11 },
    { rank: 3, name: 'Name 14', points: 2000, achievements: 10 },
    { rank: 4, name: 'Name 13', points: 1900, achievements: 9 },
    { rank: 5, name: 'Name 15', points: 1800, achievements: 8 }
  ]
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Web Development');
  const domains = Object.keys(leaderboardData);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold glitch-text dark:text-white">
            Top Performers
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Our most active and accomplished members across different domains
          </p>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveTab(domain)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === domain
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="bg-purple-600 text-white p-4">
            <h3 className="text-xl font-bold text-center">{activeTab} - Top 5</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Points
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Achievements
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {leaderboardData[activeTab as keyof typeof leaderboardData].map((user) => (
                  <tr key={user.rank} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {user.rank <= 3 && (
                          <Trophy className={`w-5 h-5 mr-2 ${
                            user.rank === 1 ? 'text-yellow-400' :
                            user.rank === 2 ? 'text-gray-400' :
                            'text-orange-400'
                          }`} />
                        )}
                        <span className={`text-sm font-medium ${
                          user.rank <= 3 ? 'text-purple-500 dark:text-purple-400' : 'text-gray-900 dark:text-gray-100'
                        }`}>
                          #{user.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {user.points} pts
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {user.achievements} achievements
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
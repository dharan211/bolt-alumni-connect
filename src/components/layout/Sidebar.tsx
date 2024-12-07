import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Calendar, Users, BookOpen } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/jobs', icon: Briefcase, label: 'Job Board' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/mentorship', icon: Users, label: 'Mentorship' },
  { to: '/directory', icon: BookOpen, label: 'Directory' }
];

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <nav className="space-y-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <Icon className="h-5 w-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
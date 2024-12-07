import React, { useState } from 'react';
import { Search, Filter, GraduationCap, Building, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import type { User } from '../types';

const SAMPLE_ALUMNI: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'alumni',
    graduationYear: 2018,
    major: 'Computer Science',
    company: 'Google',
    position: 'Senior Software Engineer'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    email: 'michael.r@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'alumni',
    graduationYear: 2015,
    major: 'Business Administration',
    company: 'Amazon',
    position: 'Product Manager'
  }
];

export const DirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    graduationYear: '',
    major: '',
    company: ''
  });

  const filteredAlumni = SAMPLE_ALUMNI.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.position?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilters = 
      (!filters.graduationYear || alumni.graduationYear?.toString() === filters.graduationYear) &&
      (!filters.major || alumni.major === filters.major) &&
      (!filters.company || alumni.company === filters.company);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Alumni Directory</h1>
        <p className="text-gray-600">Connect with alumni from your university</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              <button
                onClick={() => setFilters({ graduationYear: '', major: '', company: '' })}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Reset
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year
                </label>
                <select
                  value={filters.graduationYear}
                  onChange={(e) => setFilters({ ...filters, graduationYear: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">All Years</option>
                  {[2015, 2016, 2017, 2018, 2019, 2020].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Major
                </label>
                <select
                  value={filters.major}
                  onChange={(e) => setFilters({ ...filters, major: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">All Majors</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <select
                  value={filters.company}
                  onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">All Companies</option>
                  <option value="Google">Google</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Microsoft">Microsoft</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, company, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-4">
            {filteredAlumni.map((alumni) => (
              <div key={alumni.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={alumni.avatar}
                    alt={alumni.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{alumni.name}</h3>
                        <p className="text-gray-600">{alumni.position} at {alumni.company}</p>
                      </div>
                      <Button>Connect</Button>
                    </div>

                    <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Class of {alumni.graduationYear}
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {alumni.major}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        San Francisco Bay Area
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
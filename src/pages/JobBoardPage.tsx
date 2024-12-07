import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
}

const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Full-time',
    postedDate: '2 days ago',
    description: 'We are looking for a Software Engineer to join our team...'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Redmond, WA',
    type: 'Full-time',
    postedDate: '3 days ago',
    description: 'Join our product team to help shape the future...'
  }
];

export const JobBoardPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Board</h1>
        <p className="text-gray-600">Find opportunities posted by alumni from your university</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>All Locations</option>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="space-y-4">
            {SAMPLE_JOBS.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                
                <div className="flex items-center space-x-6 text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.postedDate}
                  </div>
                </div>
                
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
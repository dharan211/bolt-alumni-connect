import React from 'react';
import { Feed } from '../components/feed/Feed';

export const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-8 py-8">
      <div className="col-span-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">Active Alumni</p>
              <p className="text-2xl font-bold text-blue-600">2,543</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-600">Job Opportunities</p>
              <p className="text-2xl font-bold text-blue-600">156</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Upcoming Events</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-6">
        <Feed />
      </div>
      
      <div className="col-span-3">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-medium">Tech Career Fair</p>
              <p className="text-sm text-gray-600">March 15, 2024</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-medium">Alumni Networking Night</p>
              <p className="text-sm text-gray-600">March 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
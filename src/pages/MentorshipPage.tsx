import React from 'react';
import { Star, Book, Coffee } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface Mentor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  company: string;
  expertise: string[];
  availability: string;
  bio: string;
}

const SAMPLE_MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    title: 'Senior Research Scientist',
    company: 'Tesla',
    expertise: ['Machine Learning', 'Computer Vision', 'Robotics'],
    availability: 'Available for 2 mentees',
    bio: 'Passionate about helping students break into the tech industry...'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    title: 'Engineering Manager',
    company: 'Amazon',
    expertise: ['Software Architecture', 'Team Leadership', 'Career Development'],
    availability: 'Available for 1 mentee',
    bio: 'Experienced engineering leader helping students navigate their career path...'
  }
];

export const MentorshipPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mentorship Program</h1>
        <p className="text-gray-600">Connect with experienced alumni mentors in your field</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="font-semibold mb-4">Areas of Expertise</h2>
            <div className="space-y-2">
              {['Software Development', 'Data Science', 'Product Management', 'UX Design'].map((area) => (
                <label key={area} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span>{area}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-semibold mb-4">Availability</h2>
            <div className="space-y-2">
              {['Currently Available', 'Weekly Meetings', 'Monthly Meetings'].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="space-y-6">
            {SAMPLE_MENTORS.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-gray-600">{mentor.title} at {mentor.company}</p>
                      </div>
                      <Button>Request Mentorship</Button>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <p className="mt-4 text-gray-600">{mentor.bio}</p>
                    
                    <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        4.9/5 Rating
                      </div>
                      <div className="flex items-center">
                        <Book className="h-4 w-4 mr-2" />
                        15 Students Mentored
                      </div>
                      <div className="flex items-center">
                        <Coffee className="h-4 w-4 mr-2" />
                        {mentor.availability}
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
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  description: string;
  type: 'networking' | 'workshop' | 'career_fair';
}

const SAMPLE_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Tech Career Fair 2024',
    date: 'March 15, 2024',
    location: 'University Main Hall',
    attendees: 250,
    description: 'Annual career fair featuring top tech companies...',
    type: 'career_fair'
  },
  {
    id: '2',
    title: 'Alumni Networking Night',
    date: 'March 20, 2024',
    location: 'Downtown Conference Center',
    attendees: 120,
    description: 'Join us for an evening of networking...',
    type: 'networking'
  }
];

export const EventsPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Events</h1>
        <p className="text-gray-600">Connect with alumni and students at our upcoming events</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-semibold mb-4">Event Types</h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>Networking Events</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>Career Fairs</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-600" />
                <span>Workshops</span>
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="space-y-6">
            {SAMPLE_EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-500 text-sm mt-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                  <Button>Register</Button>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
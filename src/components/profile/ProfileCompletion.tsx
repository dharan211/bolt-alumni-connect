import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ProfileStep {
  id: string;
  label: string;
  completed: boolean;
}

const PROFILE_STEPS: ProfileStep[] = [
  { id: '1', label: 'Basic Information', completed: true },
  { id: '2', label: 'Education Details', completed: true },
  { id: '3', label: 'Work Experience', completed: false },
  { id: '4', label: 'Skills & Interests', completed: false },
  { id: '5', label: 'Profile Picture', completed: true }
];

export const ProfileCompletion: React.FC = () => {
  const completedSteps = PROFILE_STEPS.filter(step => step.completed).length;
  const completionPercentage = (completedSteps / PROFILE_STEPS.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Profile Completion</h2>
        <span className="text-sm font-medium text-blue-600">
          {completionPercentage}% Complete
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 rounded-full h-2 transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      <div className="space-y-3">
        {PROFILE_STEPS.map((step) => (
          <div key={step.id} className="flex items-center space-x-3">
            {step.completed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400" />
            )}
            <span className={step.completed ? 'text-gray-900' : 'text-gray-500'}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
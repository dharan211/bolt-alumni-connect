import React from 'react';
import { PostCard } from './PostCard';
import type { Post } from '../../types';

const SAMPLE_POSTS: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah.chen@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      role: 'alumni',
      company: 'Google',
      position: 'Senior Software Engineer'
    },
    content: 'Excited to announce that we\'re hiring software engineers! If any current students are interested in internship opportunities, feel free to reach out.',
    timestamp: new Date().toISOString(),
    type: 'opportunity'
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      role: 'student',
      graduationYear: 2024,
      major: 'Computer Science'
    },
    content: 'Looking for advice on transitioning from academic projects to industry work. Any tips from alumni working in tech?',
    timestamp: new Date().toISOString(),
    type: 'question'
  }
];

export const Feed: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      {SAMPLE_POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'alumni';
  graduationYear?: number;
  major?: string;
  company?: string;
  position?: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  type: 'opportunity' | 'question' | 'event';
}
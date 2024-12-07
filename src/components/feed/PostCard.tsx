import React from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';
import type { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{post.author.name}</h3>
          <p className="text-gray-600 text-sm">
            {post.author.role === 'alumni' ? `${post.author.position} at ${post.author.company}` : `Class of ${post.author.graduationYear}`}
          </p>
        </div>
      </div>
      
      <p className="text-gray-800 mb-4">{post.content}</p>
      
      <div className="flex items-center space-x-6 text-gray-600">
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <Heart className="h-5 w-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <MessageCircle className="h-5 w-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-600">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};
import React from 'react';
import { MessageSquareText } from 'lucide-react';
import { useChatbotStore } from '../../store/chatbotStore';

export const ChatbotButton: React.FC = () => {
  const toggleChat = useChatbotStore((state) => state.toggleChat);

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
      aria-label="Open AI Assistant"
    >
      <MessageSquareText className="h-6 w-6" />
    </button>
  );
};
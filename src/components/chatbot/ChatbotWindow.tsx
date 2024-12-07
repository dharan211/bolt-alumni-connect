import React, { useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { useChatbotStore } from '../../store/chatbotStore';
import { marked } from 'marked';
import { CHATBOT_RESPONSES } from '../../utils/chatbotResponses';

const INITIAL_MESSAGE = `Hi! I'm your AI assistant. I can help you with:
- Finding relevant alumni connections
- Career advice and guidance
- Information about university programs
- Job and internship opportunities
- Upcoming events and networking

What would you like to know?`;

export const ChatbotWindow: React.FC = () => {
  const { messages, isOpen, addMessage, toggleChat } = useChatbotStore();
  const [input, setInput] = React.useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length === 0) {
      addMessage(INITIAL_MESSAGE, 'bot');
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage(input, 'user');
    const userQuestion = input;
    setInput('');

    setTimeout(() => {
      const response = generateResponse(userQuestion);
      addMessage(response, 'bot');
    }, 1000);
  };

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Find matching response based on keywords
    const matchingResponse = CHATBOT_RESPONSES.find(response =>
      response.keywords.some(keyword => lowerQuestion.includes(keyword))
    );

    if (matchingResponse) {
      return matchingResponse.response;
    }

    // Default response if no keywords match
    return `I'd be happy to help! Could you please specify what you're looking for? I can assist with:
- Finding mentors and career guidance
- Exploring job and internship opportunities
- Discovering networking events
- Optimizing your profile visibility
- Connecting with fellow alumni`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 left-4 w-96 h-[32rem] bg-white rounded-lg shadow-xl flex flex-col">
      <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
        <h3 className="font-semibold">AI Assistant</h3>
        <button
          onClick={toggleChat}
          className="p-1 hover:bg-blue-700 rounded-full transition-colors duration-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div
                className="prose prose-sm"
                dangerouslySetInnerHTML={{
                  __html: marked(message.content, { breaks: true }),
                }}
              />
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
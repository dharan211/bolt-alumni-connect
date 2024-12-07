import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { User } from '../../types';

interface Message {
  id: string;
  sender: User;
  receiver: User;
  content: string;
  timestamp: string;
  read: boolean;
}

export const MessageCenter: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages] = React.useState<Message[]>([]);
  const [selectedChat, setSelectedChat] = React.useState<User | null>(null);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[32rem] bg-white rounded-lg shadow-xl flex flex-col">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Messages</h3>
          </div>

          <div className="flex-1 flex">
            <div className="w-1/3 border-r overflow-y-auto">
              {messages.length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-sm">
                  No conversations yet
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className="p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedChat(message.sender)}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={message.sender.avatar}
                        alt={message.sender.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{message.sender.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex-1 flex flex-col">
              {selectedChat ? (
                <>
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedChat.avatar}
                        alt={selectedChat.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="font-medium">{selectedChat.name}</p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4">
                    {/* Messages will be displayed here */}
                  </div>

                  <div className="p-4 border-t">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
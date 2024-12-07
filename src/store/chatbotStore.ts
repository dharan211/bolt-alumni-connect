import { create } from 'zustand';

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatbotState {
  messages: ChatMessage[];
  isOpen: boolean;
  addMessage: (content: string, type: 'user' | 'bot') => void;
  toggleChat: () => void;
  clearChat: () => void;
}

export const useChatbotStore = create<ChatbotState>((set) => ({
  messages: [],
  isOpen: false,
  addMessage: (content, type) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substr(2, 9),
          type,
          content,
          timestamp: new Date(),
        },
      ],
    })),
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  clearChat: () => set({ messages: [] }),
}));
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MessageCenter } from './components/messages/MessageCenter';
import { ChatbotButton } from './components/chatbot/ChatbotButton';
import { ChatbotWindow } from './components/chatbot/ChatbotWindow';
import { HomePage } from './pages/HomePage';
import { JobBoardPage } from './pages/JobBoardPage';
import { EventsPage } from './pages/EventsPage';
import { MentorshipPage } from './pages/MentorshipPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 py-8">
            <div className="col-span-3">
              <Sidebar />
            </div>
            <div className="col-span-9">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobBoardPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/mentorship" element={<MentorshipPage />} />
                <Route path="/directory" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </main>
        <MessageCenter />
        <ChatbotButton />
        <ChatbotWindow />
      </div>
    </Router>
  );
}

export default App;
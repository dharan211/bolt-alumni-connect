interface ChatbotResponse {
  keywords: string[];
  response: string;
}

export const CHATBOT_RESPONSES: ChatbotResponse[] = [
  {
    keywords: ['mentor', 'guidance', 'advice'],
    response: `I can help you connect with alumni mentors! Here's what you can do:
- Browse our mentorship directory with 200+ experienced alumni
- Filter mentors by industry, expertise, or location
- Schedule 1-on-1 virtual coffee chats
- Join group mentorship sessions

Would you like me to show you some recommended mentors based on your interests?`
  },
  {
    keywords: ['job', 'career', 'internship', 'opportunity'],
    response: `I can help you explore career opportunities! Here's what's available:
- 150+ active job postings from alumni companies
- 45 internship positions for current students
- 25 entry-level roles perfect for recent graduates
- Virtual career fairs and recruitment events

Would you like me to help you filter these opportunities based on your preferences?`
  },
  {
    keywords: ['event', 'network', 'meetup'],
    response: `We have several exciting events coming up:
1. Tech Career Fair (March 15, 2024)
   - 50+ companies attending
   - On-site interviews available
   
2. Alumni Networking Night (March 20, 2024)
   - Industry roundtables
   - Speed networking sessions
   
3. Startup Founders Panel (April 5, 2024)
   - Q&A with successful alumni entrepreneurs
   - Networking reception

Would you like to register for any of these events?`
  },
  {
    keywords: ['profile', 'visibility', 'connection'],
    response: `I can help you improve your profile visibility! Here are some tips:
- Complete your profile (currently at 60%)
- Add your recent achievements and experiences
- Join industry-specific alumni groups
- Share your expertise and insights

Would you like me to guide you through profile optimization?`
  }
];
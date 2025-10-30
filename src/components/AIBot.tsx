import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How can I join CodeCraft Club?",
    answer: "You can join CodeCraft Club by attending our weekly meetings every Thursday at 5:00 PM in Room 301, Tech Building. You can also reach out to us via email at contact@codecraft.edu or join our Discord community!"
  },
  {
    question: "What events do you organize?",
    answer: "We organize various events including our Annual Hackathon, Web Development Workshops, AI/ML Study Groups, Tech Talks, and coding competitions. Check our Events section for upcoming activities!"
  },
  {
    question: "Do I need prior coding experience?",
    answer: "Not at all! CodeCraft welcomes members of all skill levels. We have beginner-friendly workshops and study groups to help you get started, as well as advanced projects for experienced coders."
  },
  {
    question: "What programming languages do you focus on?",
    answer: "We cover a wide range of technologies including Web Development (HTML, CSS, JavaScript, React), Python, Java, C++, Mobile Development, AI/ML, IoT, Robotics, and more!"
  },
  {
    question: "Are there any membership fees?",
    answer: "CodeCraft Club membership is completely free! We believe in making coding education accessible to all students."
  },
  {
    question: "How can I participate in hackathons?",
    answer: "Our Annual Hackathon is open to all skill levels! You can register through our Events page or contact us directly. We also help members participate in external hackathons."
  },
  {
    question: "Do you offer mentorship programs?",
    answer: "Yes! We have senior members and industry professionals who mentor newcomers. You can get paired with a mentor based on your interests and goals."
  },
  {
    question: "What resources do you provide?",
    answer: "We offer learning materials, documentation, video tutorials, access to development tools, and connections to industry resources like GitHub Student Pack and AWS Education credits."
  },
  {
    question: "How can I contribute to club projects?",
    answer: "You can contribute to our ongoing projects by joining our GitHub organization, attending project meetings, or proposing your own project ideas to the team!"
  },
  {
    question: "Do you help with internships and job placements?",
    answer: "Absolutely! We have connections with tech companies and regularly host career guidance sessions. Our alumni network also helps current members with internship and job opportunities."
  }
];

const AIBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm CodeBot, your AI assistant. I'm here to help answer questions about CodeCraft Club. Click on any question below or type your own!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleQuestionClick = (faq: FAQ) => {
    // Add user question
    const userMessage: Message = {
      id: messages.length + 1,
      text: faq.question,
      isBot: false,
      timestamp: new Date()
    };

    // Add bot response
    const botMessage: Message = {
      id: messages.length + 2,
      text: faq.answer,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    // Simple keyword matching for responses
    let botResponse = "I'm sorry, I don't have a specific answer for that question. Please contact us at contact@codecraft.edu or join our Discord community for more detailed assistance!";
    
    const lowerInput = inputText.toLowerCase();
    const matchedFAQ = faqs.find(faq => 
      faq.question.toLowerCase().includes(lowerInput) || 
      lowerInput.includes(faq.question.toLowerCase().split(' ')[0]) ||
      (lowerInput.includes('join') && faq.question.includes('join')) ||
      (lowerInput.includes('event') && faq.question.includes('events')) ||
      (lowerInput.includes('experience') && faq.question.includes('experience')) ||
      (lowerInput.includes('language') && faq.question.includes('languages')) ||
      (lowerInput.includes('fee') && faq.question.includes('fees')) ||
      (lowerInput.includes('hackathon') && faq.question.includes('hackathons')) ||
      (lowerInput.includes('mentor') && faq.question.includes('mentorship')) ||
      (lowerInput.includes('resource') && faq.question.includes('resources')) ||
      (lowerInput.includes('project') && faq.question.includes('projects')) ||
      (lowerInput.includes('job') && faq.question.includes('job'))
    );

    if (matchedFAQ) {
      botResponse = matchedFAQ.answer;
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">CodeBot</h3>
                <p className="text-xs opacity-90">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-purple-700 p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isBot ? 'bg-purple-100 dark:bg-purple-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
                    {message.isBot ? (
                      <Bot className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                    ) : (
                      <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${message.isBot ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' : 'bg-purple-600 text-white'}`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Quick Questions */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {faqs.slice(0, 3).map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(faq)}
                  className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                >
                  {faq.question.length > 25 ? faq.question.substring(0, 25) + '...' : faq.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIBot;
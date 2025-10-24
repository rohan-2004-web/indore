'use client'

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'नमस्ते! मैं Saumya Kapoor की AI सहायक हूं। मैं आपकी कैसे मदद कर सकती हूं? 🌟\n\nHello! I\'m Saumya Kapoor\'s AI assistant. How can I help you today? 🌟',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response Logic - Simulated LLM
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Service inquiries
    if (lowerMessage.includes('service') || lowerMessage.includes('सेवा')) {
      return 'हम निम्नलिखित प्रीमियम सेवाएं प्रदान करते हैं:\n\n✅ VIP Escort Service\n✅ Celebrity Escorts\n✅ College Girl Escorts\n✅ Independent Escorts\n✅ Housewife Escorts\n✅ Event Companions\n\nसभी सेवाएं 24/7 उपलब्ध हैं। अधिक जानकारी के लिए कॉल करें: +91-9372662471';
    }
    
    // Booking inquiries
    if (lowerMessage.includes('book') || lowerMessage.includes('booking') || lowerMessage.includes('बुकिंग')) {
      return '📞 Instant Booking के लिए:\n\n✅ Call: +91-9372662471\n✅ WhatsApp: +91-9372662471\n\n⚡ Same-day service available\n🔒 100% discreet और safe\n💯 Verified profiles\n\nहम 24/7 उपलब्ध हैं!';
    }
    
    // Location inquiries
    if (lowerMessage.includes('location') || lowerMessage.includes('area') || lowerMessage.includes('जगह') || lowerMessage.includes('क्षेत्र')) {
      return '📍 हम Indore के सभी प्रमुख क्षेत्रों में उपलब्ध हैं:\n\n• Vijay Nagar\n• AB Road\n• Palasia\n• Scheme 78\n• MG Road\n• Saket\n• Ring Road\n• Airport Road\n• Bhawar Kuan\n• Rajwada\n\n🏨 Hotel visits और home service भी available!';
    }
    
    // Pricing inquiries
    if (lowerMessage.includes('price') || lowerMessage.includes('rate') || lowerMessage.includes('cost') || lowerMessage.includes('कीमत') || lowerMessage.includes('दाम')) {
      return '💰 हमारी pricing transparent है:\n\n• VIP Escorts: Premium rates\n• College Girls: Budget-friendly\n• Celebrity Escorts: Exclusive rates\n• Independent Escorts: Flexible rates\n\n📞 Exact pricing के लिए कॉल करें: +91-9372662471\n\nNo hidden charges! 💯';
    }
    
    // Safety/Privacy inquiries
    if (lowerMessage.includes('safe') || lowerMessage.includes('privacy') || lowerMessage.includes('discreet') || lowerMessage.includes('सुरक्षा') || lowerMessage.includes('गोपनीय')) {
      return '🔒 Your Privacy is Our Priority!\n\n✅ 100% Confidential Service\n✅ Verified और Safe Escorts\n✅ Secure Booking Process\n✅ Anonymous Meetings\n✅ Data Protection\n\nहम complete discretion की गारंटी देते हैं। आपकी privacy हमारे लिए सबसे महत्वपूर्ण है।';
    }
    
    // Availability
    if (lowerMessage.includes('available') || lowerMessage.includes('timing') || lowerMessage.includes('उपलब्ध') || lowerMessage.includes('समय')) {
      return '⏰ 24/7 Service Available!\n\n🌙 Midnight Service ✅\n☀️ Day Service ✅\n🌆 Evening Service ✅\n⚡ Instant Booking ✅\n\nकभी भी कॉल करें: +91-9372662471\n\nहम हमेशा आपकी सेवा के लिए तैयार हैं!';
    }
    
    // Contact inquiries
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('whatsapp') || lowerMessage.includes('संपर्क')) {
      return '📞 Contact Us:\n\n✅ Phone: +91-9372662471\n✅ WhatsApp: +91-9372662471\n📧 Email: booking@saumyakapoor.in\n🌐 Website: saumyakapoor.in\n\n⚡ Instant response guaranteed!\n🔒 100% confidential\n\nअभी कॉल करें!';
    }
    
    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('नमस्ते')) {
      return 'Hello! Welcome to Saumya Kapoor Premium Escort Service! 🌟\n\nमैं आपकी कैसे मदद कर सकती हूं?\n\n• Services के बारे में जानना चाहते हैं?\n• Booking करना चाहते हैं?\n• Location के बारे में पूछना है?\n• Pricing जानना चाहते हैं?\n\nबस पूछिए, मैं यहां हूं! 😊';
    }
    
    // Default response
    return 'मैं आपकी मदद करने के लिए यहां हूं! 😊\n\nमुझसे पूछ सकते हैं:\n\n💼 Services के बारे में\n📞 Booking के बारे में\n📍 Locations के बारे में\n💰 Pricing के बारे में\n🔒 Privacy & Safety के बारे में\n⏰ Availability के बारे में\n\nया direct कॉल करें: +91-9372662471';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse = await generateAIResponse(input);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const quickQuestions = [
    '📋 Services क्या हैं?',
    '📞 Booking कैसे करें?',
    '📍 Locations कौन से हैं?',
    '💰 Pricing क्या है?',
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Open AI Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            AI
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-pink-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-xs text-pink-100">Always online • Instant replies</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-pink-50 to-purple-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'bg-white text-gray-800 shadow-md border border-pink-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-pink-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-md border border-pink-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-white border-t border-pink-100">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(q)}
                    className="text-xs bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t-2 border-pink-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

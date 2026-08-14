import React, { useState } from 'react';
import { X, Send, Sparkles, Paperclip, Bot, User, RefreshCw, Copy, Check, Cpu } from 'lucide-react';
import { VectorEngineGatewayClient } from '../../services/vectorEngineGatewayClient';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; content: string }>>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am VectorEngine AI, your intelligent business operating assistant. How can I help you build, brand, or grow today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now().toString(), role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await VectorEngineGatewayClient.sendMessage({ prompt: userMsg.content, task: 'aiAssistant' });
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: response.content }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Sorry, I encountered an error connecting to VectorEngine AI.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#080808]/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg bg-[#0D0D0D] border-l border-[#292929] flex flex-col h-full shadow-2xl animate-slideLeft">
        {/* Header */}
        <div className="p-4 border-b border-[#292929] flex items-center justify-between bg-[#151515]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#F5F5F5]">VectorEngine AI Assistant</h3>
              <p className="text-[10px] text-[#10B981]">Online • v4.2 Model</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1C1C1C] hover:bg-[#292929] text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                  m.role === 'user'
                    ? 'bg-[#10B981] text-[#080808] font-medium rounded-tr-none'
                    : 'bg-[#151515] border border-[#292929] text-[#F5F5F5] rounded-tl-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{m.content}</p>
                {m.role === 'assistant' && (
                  <div className="mt-3 flex items-center gap-2 pt-2 border-t border-[#292929]/50 text-[10px] text-[#A3A3A3]">
                    <button
                      onClick={() => copyToClipboard(m.content, m.id)}
                      className="flex items-center gap-1 hover:text-[#F5F5F5] transition-colors cursor-pointer"
                    >
                      {copiedId === m.id ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === m.id ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}
              </div>
              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-[#292929] flex items-center justify-center text-[#F5F5F5] shrink-0 mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 items-center text-[#A3A3A3] text-xs py-2">
              <Bot className="w-4 h-4 text-[#10B981] animate-spin" />
              <span>VectorEngine AI is thinking...</span>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-[#292929] bg-[#151515]">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-[#1C1C1C] hover:bg-[#292929] text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
              title="Attach File"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI anything about your business..."
              className="flex-1 bg-[#080808] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#10B981]"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080808] flex items-center justify-center transition-all disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

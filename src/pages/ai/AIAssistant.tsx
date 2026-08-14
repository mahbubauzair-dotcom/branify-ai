import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Sparkles,
  Send,
  Plus,
  Search,
  Bot,
  User,
  Copy,
  Check,
  RefreshCw,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';
import { mockConversations } from '../../services/vectorEngine';
import {
  VectorEngineGatewayClient,
  CuratedModelInfo
} from '../../services/vectorEngineGatewayClient';

export const AIAssistant: React.FC = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [activeConvId, setActiveConvId] = useState(mockConversations[0]?.id || 'conv-1');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [curatedModels, setCuratedModels] = useState<CuratedModelInfo[]>([]);
  const [selectedModelId, setSelectedModelId] = useState<string>('claude-3-7-sonnet-20250219');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load curated recommended models on mount
  useEffect(() => {
    async function loadModels() {
      try {
        const discovery = await VectorEngineGatewayClient.getDiscovery();
        if (discovery.recommendedModels && discovery.recommendedModels.length > 0) {
          setCuratedModels(discovery.recommendedModels);
          // Set default model from task routing or default primary
          const defaultModel = discovery.routingConfig?.aiAssistant || discovery.recommendedModels[0]?.id;
          if (defaultModel) {
            setSelectedModelId(defaultModel);
          }
        }
      } catch (err) {
        console.error('Failed to load discovery in AIAssistant:', err);
      }
    }
    loadModels();
  }, []);

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedConvs = conversations.map((c) => {
      if (c.id === activeConv.id) {
        return { ...c, messages: [...c.messages, userMsg], updatedAt: 'Just now' };
      }
      return c;
    });

    setConversations(updatedConvs);
    setInput('');
    setIsLoading(true);

    try {
      const response = await VectorEngineGatewayClient.sendMessage({
        prompt: userMsg.content,
        model: selectedModelId,
        task: 'aiAssistant'
      });

      const aiMsg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: response.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setConversations((prev) =>
        prev.map((c) => {
          if (c.id === activeConv.id) {
            return { ...c, messages: [...c.messages, aiMsg] };
          }
          return c;
        })
      );
    } catch {
      // error handled
    } finally {
      setIsLoading(false);
    }
  };

  const createNewChat = () => {
    const newId = `conv-${Date.now()}`;
    const newConv = {
      id: newId,
      title: 'New AI Consultation',
      updatedAt: 'Just now',
      messages: [
        {
          id: '1',
          role: 'assistant' as const,
          content: 'Hello! I am VectorEngine AI. What business strategy, website, or automation workflow shall we build today?',
          timestamp: 'Just now'
        }
      ]
    };
    setConversations([newConv, ...conversations]);
    setActiveConvId(newId);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex overflow-hidden">
      {/* Conversations Sidebar */}
      <div className="w-80 bg-[#0D0D0D] border-r border-[#292929] flex flex-col shrink-0">
        <div className="p-4 border-b border-[#292929] space-y-3">
          <Button
            variant="primary"
            className="w-full justify-center bg-[#D4AF37] hover:bg-[#E5C158] text-[#080808] font-bold"
            icon={<Plus className="w-4 h-4" />}
            onClick={createNewChat}
          >
            New Conversation
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#737373]" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-9 pr-4 py-2 text-xs text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-1 text-[10px] font-bold text-[#737373] uppercase tracking-wider">
            Recent Consultations
          </div>
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConvId(conv.id)}
              className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer ${
                conv.id === activeConvId
                  ? 'bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5F5F5]'
                  : 'hover:bg-[#151515] text-[#A3A3A3] border border-transparent'
              }`}
            >
              <div className="text-xs font-semibold truncate mb-1">{conv.title}</div>
              <div className="flex items-center justify-between text-[10px] text-[#737373]">
                <span>{conv.updatedAt}</span>
                <span>{conv.messages.length} msgs</span>
              </div>
            </button>
          ))}
        </div>

        {/* Gateway Status Footer */}
        <div className="p-4 border-t border-[#292929] bg-[#151515] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#A3A3A3] flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" /> VectorEngine Gateway
            </span>
            <span className="text-[#10B981] font-bold text-[11px]">Connected</span>
          </div>
          <div className="text-[10px] text-[#737373] font-mono truncate">
            Model: {selectedModelId}
          </div>
        </div>
      </div>

      {/* Main Chat Workspace */}
      <div className="flex-1 flex flex-col bg-[#080808]">
        {/* Chat Header */}
        <div className="h-16 px-6 border-b border-[#292929] flex items-center justify-between bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#F5F5F5]">{activeConv?.title}</h2>
              <p className="text-[10px] text-[#A3A3A3]">VectorEngine Central AI Gateway</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#737373] hidden sm:inline">Engine:</span>
              <select
                value={selectedModelId}
                onChange={(e) => setSelectedModelId(e.target.value)}
                className="bg-[#151515] border border-[#292929] rounded-xl px-3 py-1.5 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] font-mono cursor-pointer max-w-[260px]"
              >
                {curatedModels.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.provider.split('/')[0].trim()})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {activeConv?.messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-4 max-w-3xl mx-auto ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`rounded-2xl p-5 text-sm ${
                  m.role === 'user'
                    ? 'bg-[#D4AF37] text-[#080808] font-medium rounded-tr-none'
                    : 'bg-[#151515] border border-[#292929] text-[#F5F5F5] rounded-tl-none w-full'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{m.content}</p>
                <div className="mt-3 flex items-center justify-between pt-3 border-t border-[#292929]/50 text-xs text-[#A3A3A3]">
                  <span>{m.timestamp}</span>
                  {m.role === 'assistant' && (
                    <button
                      onClick={() => copyToClipboard(m.content, m.id)}
                      className="hover:text-[#F5F5F5] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedId === m.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 max-w-3xl mx-auto items-center text-xs text-[#737373]">
              <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <RefreshCw className="w-4 h-4 animate-spin" />
              </div>
              <span>VectorEngine routing inference through {selectedModelId}...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#292929] bg-[#0D0D0D]">
          <form onSubmit={handleSend} className="max-w-3xl mx-auto flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask VectorEngine AI to analyze businesses, generate layouts, or write code..."
              disabled={isLoading}
              className="flex-1 bg-[#151515] border border-[#292929] rounded-2xl px-5 py-3.5 text-sm text-[#F5F5F5] placeholder-[#737373] focus:outline-none focus:border-[#D4AF37]"
            />
            <Button
              type="submit"
              variant="champagne"
              disabled={!input.trim() || isLoading}
              className="h-12 w-12 rounded-2xl p-0 flex items-center justify-center shrink-0 font-bold"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import {
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  Layers,
  ChevronRight,
  Code2,
  Brain,
  Eye,
  FileText,
  Gauge,
  Sliders,
  Play,
  Copy,
  Check,
  Globe,
  Settings2,
  Maximize2,
  X
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import {
  VectorEngineGatewayClient,
  CuratedModelInfo,
  VectorEngineRawModelSummary,
  TaskRoutingConfig,
  TASK_DEFINITIONS,
  CapabilityCategory,
  ModelDiscoveryResponse
} from '../../services/vectorEngineGatewayClient';

export const AdminAIModels: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [curatedModels, setCuratedModels] = useState<CuratedModelInfo[]>([]);
  const [allModels, setAllModels] = useState<VectorEngineRawModelSummary[]>([]);
  const [totalRawCount, setTotalRawCount] = useState<number>(0);
  const [routing, setRouting] = useState<TaskRoutingConfig | null>(null);
  const [gatewayStatus, setGatewayStatus] = useState<'Operational' | 'Degraded' | 'Offline'>('Operational');
  const [gatewayBaseUrl, setGatewayBaseUrl] = useState<string>('https://api.vectorengine.ai');

  // UI Filters for Curated Section
  const [selectedCategory, setSelectedCategory] = useState<CapabilityCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'models' | 'routing'>('models');

  // Advanced Browser Modal State
  const [isAdvancedModalOpen, setIsAdvancedModalOpen] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState('');
  const [advancedTypeFilter, setAdvancedTypeFilter] = useState('ALL');
  const [advancedPage, setAdvancedPage] = useState(1);
  const [selectedRawModel, setSelectedRawModel] = useState<VectorEngineRawModelSummary | null>(null);

  // Live Inference Test Modal State
  const [testingModel, setTestingModel] = useState<CuratedModelInfo | null>(null);
  const [testPrompt, setTestPrompt] = useState('Explain the architectural advantages of headless commerce for local retail.');
  const [testResponse, setTestResponse] = useState<string | null>(null);
  const [testLoading, setTestLoading] = useState(false);
  const [testLatency, setTestLatency] = useState<number | null>(null);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
    showToast(`Copied ${text} to clipboard`);
  };

  const loadDiscoveryData = async (force = false) => {
    if (force) setRefreshing(true);
    try {
      const data: ModelDiscoveryResponse = await VectorEngineGatewayClient.getDiscovery(force);
      setCuratedModels(data.recommendedModels || []);
      setAllModels(data.allModels || []);
      setTotalRawCount(data.totalCount || 566);
      setRouting(data.routingConfig);
      setGatewayStatus(data.gatewayStatus || 'Operational');
      setGatewayBaseUrl(data.gatewayBaseUrl || 'https://api.vectorengine.ai');
    } catch (err) {
      console.error('Error loading VectorEngine discovery:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadDiscoveryData();
  }, []);

  // Filter curated models
  const filteredCuratedModels = useMemo(() => {
    return curatedModels.filter((model) => {
      // Category filter
      if (selectedCategory !== 'ALL' && !model.categories.includes(selectedCategory)) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          model.name.toLowerCase().includes(q) ||
          model.id.toLowerCase().includes(q) ||
          model.provider.toLowerCase().includes(q) ||
          model.roleSlot.toLowerCase().includes(q) ||
          model.recommendedUse.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [curatedModels, selectedCategory, searchQuery]);

  // Filter advanced raw models
  const filteredAllModels = useMemo(() => {
    return allModels.filter((m) => {
      if (advancedTypeFilter !== 'ALL') {
        if (advancedTypeFilter === 'text' && m.model_type !== '文本' && !m.endpoints?.includes('openai')) return false;
        if (advancedTypeFilter === 'vision' && m.model_type !== '图像' && !m.id.includes('vl') && !m.id.includes('vision') && !m.id.includes('image')) return false;
      }
      if (advancedSearch.trim()) {
        const q = advancedSearch.toLowerCase();
        return (
          m.id.toLowerCase().includes(q) ||
          (m.description && m.description.toLowerCase().includes(q)) ||
          (m.owned_by && m.owned_by.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [allModels, advancedSearch, advancedTypeFilter]);

  const ADVANCED_PAGE_SIZE = 15;
  const paginatedAllModels = useMemo(() => {
    const start = (advancedPage - 1) * ADVANCED_PAGE_SIZE;
    return filteredAllModels.slice(start, start + ADVANCED_PAGE_SIZE);
  }, [filteredAllModels, advancedPage]);

  const totalAdvancedPages = Math.ceil(filteredAllModels.length / ADVANCED_PAGE_SIZE) || 1;

  // Handle task route modification
  const handleUpdateRoute = async (taskKey: keyof TaskRoutingConfig, modelId: string) => {
    if (!routing) return;
    const newRouting = { ...routing, [taskKey]: modelId };
    setRouting(newRouting);
    await VectorEngineGatewayClient.updateRouting({ [taskKey]: modelId });
    showToast(`Task route for ${taskKey} updated to ${modelId}`);
  };

  // Run live test inference
  const handleRunTestInference = async () => {
    if (!testingModel || !testPrompt.trim() || testLoading) return;
    setTestLoading(true);
    setTestResponse(null);
    setTestLatency(null);

    const startTime = Date.now();
    try {
      const res = await VectorEngineGatewayClient.sendMessage({
        prompt: testPrompt,
        model: testingModel.id,
        temperature: 0.7
      });
      const elapsed = Date.now() - startTime;
      setTestLatency(elapsed);
      setTestResponse(res.content);
    } catch (err: any) {
      setTestResponse(`Inference error: ${err.message}`);
    } finally {
      setTestLoading(false);
    }
  };

  const getCategoryBadgeColor = (cat: CapabilityCategory) => {
    switch (cat) {
      case 'RECOMMENDED':
        return 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30';
      case 'CODING':
        return 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/30';
      case 'REASONING':
        return 'bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/30';
      case 'FAST':
        return 'bg-[#10B981]/10 text-[#34D399] border-[#10B981]/30';
      case 'VISION':
        return 'bg-[#EC4899]/10 text-[#F472B6] border-[#EC4899]/30';
      case 'LONG CONTEXT':
        return 'bg-[#F59E0B]/10 text-[#FBBF24] border-[#F59E0B]/30';
      case 'COST EFFICIENT':
        return 'bg-[#14B8A6]/10 text-[#2DD4BF] border-[#14B8A6]/30';
      default:
        return 'bg-[#292929] text-[#A3A3A3] border-[#383838]';
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#10B981] text-[#080808] font-bold text-xs shadow-2xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <Cpu className="w-4 h-4" />
            <span>VECTORENGINE CENTRAL AI GATEWAY</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">
            Curated AI Models & Routing
          </h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Centralized inference gateway dynamically orchestrating top-performing VectorEngine models across BRANIFY features.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => loadDiscoveryData(true)}
            disabled={refreshing}
            className="px-3 py-2 rounded-xl bg-[#151515] border border-[#292929] hover:border-[#383838] text-xs text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center gap-2 transition-colors cursor-pointer"
            title="Refresh discovery from VectorEngine"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-[#D4AF37]' : ''}`} />
            <span>{refreshing ? 'Discovering...' : 'Sync Gateway'}</span>
          </button>

          <Button
            variant="champagne"
            size="sm"
            onClick={() => setIsAdvancedModalOpen(true)}
            className="flex items-center gap-2 text-xs font-bold"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View All VectorEngine Models ({totalRawCount || 566})</span>
          </Button>
        </div>
      </div>

      {/* Gateway Architecture Info Banner */}
      <Card className="p-5 border-[#292929] bg-gradient-to-r from-[#141414] via-[#0D0D0D] to-[#141414] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Gateway {gatewayStatus}</span>
            </div>
            <span className="text-xs font-mono text-[#737373]">•</span>
            <span className="text-xs text-[#A3A3A3] font-mono">{gatewayBaseUrl}</span>
            <span className="text-xs font-mono text-[#737373]">•</span>
            <Badge variant="champagne">Server-Isolated (Zero Key Exposure)</Badge>
          </div>
          <p className="text-xs text-[#A3A3A3] max-w-3xl leading-relaxed">
            VectorEngine serves as the central intelligent router for all BRANIFY AI operations. Real model discovery polls all 566+ active engines, curated into the top 10–15 models for code generation, deep business reasoning, website building, and multimodal tasks.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-[#080808] border border-[#292929] text-center min-w-[100px]">
            <div className="text-[#737373] text-[10px]">Discovered</div>
            <div className="font-bold text-[#F5F5F5] text-sm mt-0.5">{totalRawCount || 566} Models</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#080808] border border-[#292929] text-center min-w-[100px]">
            <div className="text-[#737373] text-[10px]">Curated Matrix</div>
            <div className="font-bold text-[#D4AF37] text-sm mt-0.5">{curatedModels.length} Top Models</div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#080808] border border-[#292929] text-center min-w-[100px]">
            <div className="text-[#737373] text-[10px]">Active Routes</div>
            <div className="font-bold text-[#10B981] text-sm mt-0.5">11 Tasks</div>
          </div>
        </div>
      </Card>

      {/* Main Tabs Navigation */}
      <div className="flex items-center justify-between border-b border-[#292929] pb-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('models')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'models'
                ? 'bg-[#D4AF37] text-[#080808] shadow-md shadow-[#D4AF37]/10'
                : 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#151515]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Recommended Models ({curatedModels.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('routing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'routing'
                ? 'bg-[#D4AF37] text-[#080808] shadow-md shadow-[#D4AF37]/10'
                : 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#151515]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>BRANIFY Task Routing Matrix (11 Roles)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: CURATED RECOMMENDED MODELS */}
      {activeTab === 'models' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Category Filter Chips & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  'ALL',
                  'RECOMMENDED',
                  'CODING',
                  'REASONING',
                  'FAST',
                  'VISION',
                  'LONG CONTEXT',
                  'COST EFFICIENT'
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#F5F5F5] text-[#080808]'
                      : 'bg-[#151515] text-[#737373] hover:text-[#A3A3A3] hover:bg-[#1C1C1C] border border-[#292929]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search curated models by ID, name, role..."
                className="w-full bg-[#151515] border border-[#292929] rounded-xl pl-9 pr-3 py-1.5 text-xs text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Curated Models Grid */}
          {loading ? (
            <div className="p-12 text-center text-xs text-[#737373] flex flex-col items-center gap-3">
              <RefreshCw className="w-6 h-6 animate-spin text-[#D4AF37]" />
              <span>Discovering real models from VectorEngine Gateway...</span>
            </div>
          ) : filteredCuratedModels.length === 0 ? (
            <Card className="p-8 text-center border-[#292929] text-xs text-[#737373]">
              No curated models match your filter. Try adjusting your search or category selection.
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCuratedModels.map((model) => (
                <Card
                  key={model.id}
                  className={`p-6 flex flex-col justify-between border-[#292929] transition-all hover:border-[#383838] relative ${
                    model.isDefault ? 'border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5 bg-[#121212]' : ''
                  }`}
                >
                  <div>
                    {/* Top Row: Provider, Availability Status, Default Badge */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                          {model.provider}
                        </span>
                        <h3 className="text-base font-extrabold text-[#F5F5F5] mt-0.5 leading-snug">
                          {model.name}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span>{model.availabilityStatus}</span>
                        </div>
                        {model.isDefault && (
                          <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold">
                            Default Primary
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Model ID copyable badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <code className="text-[11px] font-mono text-[#A3A3A3] bg-[#080808] px-2 py-0.5 rounded border border-[#242424] truncate max-w-[240px]">
                        {model.id}
                      </code>
                      <button
                        onClick={() => copyToClipboard(model.id)}
                        className="text-[#737373] hover:text-[#D4AF37] transition-colors p-1 cursor-pointer"
                        title="Copy exact Model ID"
                      >
                        {copiedId === model.id ? (
                          <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Role / Recommended Use Banner */}
                    <div className="mb-3 p-2.5 rounded-lg bg-[#0A0A0A] border border-[#242424] space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#D4AF37] font-mono uppercase">
                        <Sparkles className="w-3 h-3" />
                        <span>{model.roleSlot}</span>
                      </div>
                      <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
                        {model.recommendedUse}
                      </p>
                    </div>

                    {/* Capability Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {model.categories.map((cat) => (
                        <span
                          key={cat}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getCategoryBadgeColor(
                            cat
                          )}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Technical Metric Indicators (Latency, Context, Cost) */}
                    <div className="space-y-2 text-xs py-3 border-t border-[#242424] font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-[#737373] flex items-center gap-1">
                          <Gauge className="w-3 h-3 text-[#A3A3A3]" /> Speed / Latency:
                        </span>
                        <span className={`font-semibold ${model.speedLatency === 'Not available' ? 'text-[#737373]' : 'text-[#10B981]'}`}>
                          {model.speedLatency}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[#737373] flex items-center gap-1">
                          <FileText className="w-3 h-3 text-[#A3A3A3]" /> Context Size:
                        </span>
                        <span className={`font-semibold ${model.contextSize === 'Not available' ? 'text-[#737373]' : 'text-[#F5F5F5]'}`}>
                          {model.contextSize}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[#737373] flex items-center gap-1">
                          <Coins className="w-3 h-3 text-[#A3A3A3]" /> Cost Information:
                        </span>
                        <span className={`font-semibold ${model.costInfo === 'Not available' ? 'text-[#737373]' : 'text-[#D4AF37]'}`}>
                          {model.costInfo}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action: Test Inference */}
                  <div className="pt-4 border-t border-[#242424] flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        setTestingModel(model);
                        setTestPrompt(`Generate a 3-point strategy for scaling a ${model.roleSlot.toLowerCase()} application.`);
                        setTestResponse(null);
                        setTestLatency(null);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#151515] hover:bg-[#202020] border border-[#292929] text-[#F5F5F5] hover:text-[#D4AF37] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 text-[#D4AF37]" />
                      <span>Test Inference</span>
                    </button>

                    <button
                      onClick={() => {
                        if (routing) {
                          handleUpdateRoute('aiAssistant', model.id);
                        }
                      }}
                      className="text-[#737373] hover:text-[#D4AF37] text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      Route as Assistant Default →
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: BRANIFY DEFAULT ROUTING MATRIX */}
      {activeTab === 'routing' && (
        <div className="space-y-6 animate-fadeIn">
          <Card className="p-6 border-[#292929] bg-[#0E0E0E]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-bold text-[#F5F5F5] flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#D4AF37]" />
                  <span>BRANIFY Automated Task Routing Matrix</span>
                </h2>
                <p className="text-xs text-[#A3A3A3] mt-1">
                  Configure which curated VectorEngine model handles each core BRANIFY business capability. Requests automatically route through the assigned engine with failover redundancy.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadDiscoveryData(true)}
                  className="text-xs"
                >
                  Reset Recommended Defaults
                </Button>
              </div>
            </div>

            {/* Routing Table List */}
            <div className="divide-y divide-[#242424] border border-[#242424] rounded-xl overflow-hidden bg-[#121212]">
              {TASK_DEFINITIONS.map((task) => {
                const assignedModelId = routing ? routing[task.key] : 'claude-3-7-sonnet-20250219';
                const assignedModel = curatedModels.find((m) => m.id === assignedModelId);

                return (
                  <div
                    key={task.key}
                    className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#151515] transition-colors"
                  >
                    {/* Task Info */}
                    <div className="space-y-1 md:max-w-md">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-[#F5F5F5]">{task.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080808] border border-[#292929] text-[#D4AF37]">
                          {task.recommendedRole}
                        </span>
                      </div>
                      <p className="text-xs text-[#737373]">{task.description}</p>
                    </div>

                    {/* Routing Selector */}
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-start md:items-end">
                        <label className="text-[10px] font-mono text-[#737373] mb-1">
                          Assigned VectorEngine Model:
                        </label>
                        <select
                          value={assignedModelId}
                          onChange={(e) => handleUpdateRoute(task.key, e.target.value)}
                          className="bg-[#080808] border border-[#292929] text-xs text-[#F5F5F5] rounded-lg px-3 py-2 focus:outline-none focus:border-[#D4AF37] font-mono max-w-[280px]"
                        >
                          {curatedModels.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.name} ({m.provider.split('/')[0].trim()})
                            </option>
                          ))}
                        </select>
                      </div>

                      {assignedModel && (
                        <button
                          onClick={() => {
                            setTestingModel(assignedModel);
                            setTestPrompt(`Testing ${task.title} routing workflow.`);
                            setTestResponse(null);
                            setTestLatency(null);
                          }}
                          className="p-2 rounded-lg bg-[#181818] border border-[#292929] hover:border-[#D4AF37] text-[#A3A3A3] hover:text-[#D4AF37] transition-colors cursor-pointer shrink-0 mt-4 md:mt-0"
                          title="Test inference for this task route"
                        >
                          <Play className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {/* ADVANCED MODAL: VIEW ALL VECTORENGINE MODELS */}
      {isAdvancedModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-5xl bg-[#121212] border border-[#292929] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#292929] flex items-center justify-between bg-[#151515]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                  <Layers className="w-4 h-4" />
                  <span>ALL VECTORENGINE DISCOVERED ENGINES</span>
                </div>
                <h2 className="text-xl font-extrabold text-[#F5F5F5] mt-1">
                  VectorEngine Full Model Discovery ({filteredAllModels.length} of {totalRawCount || 566} Models)
                </h2>
              </div>
              <button
                onClick={() => setIsAdvancedModalOpen(false)}
                className="p-2 rounded-xl text-[#737373] hover:text-[#F5F5F5] hover:bg-[#202020] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Search & Filters */}
            <div className="p-4 border-b border-[#242424] bg-[#0E0E0E] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={advancedSearch}
                  onChange={(e) => {
                    setAdvancedSearch(e.target.value);
                    setAdvancedPage(1);
                  }}
                  placeholder="Filter all 566 models by ID (e.g. claude, qwen, deepseek, gpt, o1, grok)..."
                  className="w-full bg-[#181818] border border-[#292929] rounded-xl pl-10 pr-4 py-2 text-xs text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <select
                  value={advancedTypeFilter}
                  onChange={(e) => {
                    setAdvancedTypeFilter(e.target.value);
                    setAdvancedPage(1);
                  }}
                  className="bg-[#181818] border border-[#292929] text-xs text-[#A3A3A3] rounded-xl px-3 py-2 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="ALL">All Modalities</option>
                  <option value="text">Text & Chat Models</option>
                  <option value="vision">Vision & Multimodal</option>
                </select>
              </div>
            </div>

            {/* Modal Body: Models Table */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {paginatedAllModels.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#737373]">
                  No models matched "{advancedSearch}". Try searching for 'claude', 'qwen', 'gpt', or 'deepseek'.
                </div>
              ) : (
                <div className="space-y-2">
                  {paginatedAllModels.map((m) => (
                    <div
                      key={m.id}
                      className="p-3.5 rounded-xl bg-[#151515] border border-[#242424] hover:border-[#383838] transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono font-bold text-[#F5F5F5] bg-[#0A0A0A] px-2 py-0.5 rounded border border-[#242424]">
                            {m.id}
                          </code>
                          <span className="text-[10px] font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10">
                            {m.owned_by}
                          </span>
                          {m.model_type && (
                            <span className="text-[10px] font-mono text-[#A3A3A3] px-2 py-0.5 rounded bg-[#202020]">
                              {m.model_type}
                            </span>
                          )}
                        </div>

                        {m.description && (
                          <p className="text-xs text-[#737373] line-clamp-1 max-w-2xl">
                            {m.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => copyToClipboard(m.id)}
                          className="px-2.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-[#292929] hover:border-[#D4AF37] text-[#A3A3A3] hover:text-[#D4AF37] text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copy ID</span>
                        </button>

                        <button
                          onClick={() => setSelectedRawModel(m)}
                          className="px-2.5 py-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-[#F5F5F5] text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>Inspect</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer & Pagination */}
            <div className="p-4 border-t border-[#292929] bg-[#151515] flex items-center justify-between text-xs text-[#A3A3A3]">
              <div>
                Showing page <span className="font-bold text-[#F5F5F5]">{advancedPage}</span> of{' '}
                <span className="font-bold text-[#F5F5F5]">{totalAdvancedPages}</span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={advancedPage <= 1}
                  onClick={() => setAdvancedPage((p) => Math.max(1, p - 1))}
                  className="text-xs"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={advancedPage >= totalAdvancedPages}
                  onClick={() => setAdvancedPage((p) => Math.min(totalAdvancedPages, p + 1))}
                  className="text-xs"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RAW MODEL INSPECT MODAL */}
      {selectedRawModel && (
        <div className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-[#141414] border border-[#292929] rounded-2xl p-6 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#292929] pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-bold text-[#F5F5F5] font-mono">{selectedRawModel.id}</h3>
              </div>
              <button
                onClick={() => setSelectedRawModel(null)}
                className="text-[#737373] hover:text-[#F5F5F5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#737373] block mb-1">Description:</span>
                <p className="p-3 rounded-lg bg-[#0A0A0A] border border-[#242424] text-[#A3A3A3] whitespace-pre-wrap leading-relaxed">
                  {selectedRawModel.description || 'No description provided by VectorEngine API.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#242424]">
                  <span className="text-[#737373] text-[10px] block">Provider / Owner</span>
                  <span className="text-[#F5F5F5] font-bold mt-0.5 block">{selectedRawModel.owned_by}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#242424]">
                  <span className="text-[#737373] text-[10px] block">Model Type</span>
                  <span className="text-[#10B981] font-bold mt-0.5 block">{selectedRawModel.model_type || '文本'}</span>
                </div>
              </div>

              {selectedRawModel.endpoints && selectedRawModel.endpoints.length > 0 && (
                <div>
                  <span className="text-[#737373] block mb-1">Supported Endpoints:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedRawModel.endpoints.map((ep) => (
                      <span key={ep} className="px-2 py-0.5 rounded bg-[#202020] text-[#D4AF37] font-mono text-[10px]">
                        {ep}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#292929] flex justify-end">
              <Button
                variant="champagne"
                size="sm"
                onClick={() => {
                  copyToClipboard(selectedRawModel.id);
                  setSelectedRawModel(null);
                }}
              >
                Copy ID & Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* LIVE INFERENCE TEST MODAL */}
      {testingModel && (
        <div className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#141414] border border-[#292929] rounded-2xl p-6 shadow-2xl space-y-4 animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#292929] pb-3">
              <div>
                <div className="text-[10px] font-mono text-[#D4AF37] uppercase">
                  LIVE INFERENCE GATEWAY RUNNER
                </div>
                <h3 className="text-base font-bold text-[#F5F5F5]">{testingModel.name}</h3>
                <code className="text-[11px] font-mono text-[#737373]">{testingModel.id}</code>
              </div>
              <button
                onClick={() => setTestingModel(null)}
                className="text-[#737373] hover:text-[#F5F5F5] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prompt Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#A3A3A3]">Test Prompt:</label>
              <textarea
                value={testPrompt}
                onChange={(e) => setTestPrompt(e.target.value)}
                rows={3}
                className="w-full bg-[#0A0A0A] border border-[#292929] rounded-xl p-3 text-xs text-[#F5F5F5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Enter prompt to execute on VectorEngine..."
              />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-[#737373] font-mono">
                {testLatency !== null && (
                  <span className="text-[#10B981] font-bold">Roundtrip Latency: {testLatency}ms</span>
                )}
              </div>

              <Button
                variant="champagne"
                size="sm"
                onClick={handleRunTestInference}
                disabled={testLoading || !testPrompt.trim()}
                className="flex items-center gap-2"
              >
                {testLoading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Inference...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Send Query</span>
                  </>
                )}
              </Button>
            </div>

            {/* Response Area */}
            {testResponse && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-[#D4AF37] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> VectorEngine Stream Output:
                </label>
                <div className="p-4 rounded-xl bg-[#080808] border border-[#242424] text-xs text-[#F5F5F5] font-sans leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                  {testResponse}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

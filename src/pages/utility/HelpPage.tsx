import React from 'react';
import { Card } from '../../components/common/Card';
import { HelpCircle, BookOpen, Sparkles, MessageSquare } from 'lucide-react';

export const HelpPage: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto animate-fadeIn">
      <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <h1 className="text-2xl font-extrabold text-[#F5F5F5]">Help & Documentation</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">Learn how to build, brand, and grow your business with BRANIFY AI.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hoverEffect className="space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#F5F5F5]">Getting Started Guide</h3>
          <p className="text-xs text-[#A3A3A3]">Learn how to use VectorEngine AI to generate high-converting websites and web apps in minutes.</p>
        </Card>

        <Card hoverEffect className="space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#F5F5F5]">AI Lead Generation</h3>
          <p className="text-xs text-[#A3A3A3]">Master local business lead scraping, opportunity scoring, and automated outreach.</p>
        </Card>
      </div>
    </div>
  );
};

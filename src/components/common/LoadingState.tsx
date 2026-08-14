import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading BRANIFY AI...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-center">
      <div className="w-12 h-12 rounded-full border-2 border-[#10B981] border-t-transparent animate-spin mb-4" />
      <p className="text-sm font-medium text-[#A3A3A3] animate-pulse">{message}</p>
    </div>
  );
};

import React, { ReactNode } from 'react';

interface SettingsGroupProps {
  title: string;
  children: ReactNode;
}

const SettingsGroup = ({ title, children }: SettingsGroupProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default SettingsGroup;
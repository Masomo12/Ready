import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AlertProps {
  alert: {
    type: string;
    severity: string;
    location: string;
    description: string;
    time: string;
    icon: LucideIcon;
    color: string;
  };
}

const severityColors = {
  High: 'bg-red-100 text-red-800',
  Critical: 'bg-red-100 text-red-800',
  Moderate: 'bg-yellow-100 text-yellow-800',
};

const AlertCard = ({ alert }: AlertProps) => {
  const Icon = alert.icon;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${alert.color === 'blue' ? 'bg-blue-100' : alert.color === 'red' ? 'bg-red-100' : 'bg-amber-100'}`}>
              <Icon className={`h-5 w-5 ${alert.color === 'blue' ? 'text-blue-600' : alert.color === 'red' ? 'text-red-600' : 'text-amber-600'}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{alert.type}</h3>
              <p className="text-sm text-gray-600">{alert.location}</p>
            </div>
          </div>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${severityColors[alert.severity as keyof typeof severityColors]}`}>
            {alert.severity}
          </span>
        </div>
        <p className="mt-4 text-gray-700">{alert.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{alert.time}</span>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
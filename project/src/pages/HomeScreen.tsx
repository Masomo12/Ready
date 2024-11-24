import React, { useState } from 'react';
import { Bell, AlertTriangle, Droplets, Flame } from 'lucide-react';
import Map from '../components/Map';
import AlertCard from '../components/AlertCard';
import NotificationSettings from '../components/NotificationSettings';

const MOCK_ALERTS = [
  {
    type: 'Flash Flood Warning',
    severity: 'High',
    location: 'Nairobi River Basin',
    description: 'Heavy rainfall causing rapid flooding. Seek higher ground immediately.',
    time: '10 minutes ago',
    icon: Droplets,
    color: 'blue'
  },
  {
    type: 'Forest Fire Alert',
    severity: 'Critical',
    location: 'Mount Kenya Region',
    description: 'Large forest fire spreading rapidly. Evacuation orders in effect.',
    time: '25 minutes ago',
    icon: Flame,
    color: 'red'
  },
  {
    type: 'Drought Warning',
    severity: 'Moderate',
    location: 'Northern Kenya',
    description: 'Prolonged drought conditions affecting water supplies.',
    time: '1 hour ago',
    icon: AlertTriangle,
    color: 'amber'
  }
];

const HomeScreen = () => {
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">READY: Disaster Alerts</h1>
            <button
              onClick={() => setShowNotificationSettings(true)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <Map />

      {/* Alerts Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Active Alerts</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Refresh
          </button>
        </div>

        <div className="space-y-4">
          {MOCK_ALERTS.map((alert, index) => (
            <AlertCard key={index} alert={alert} />
          ))}
        </div>
      </div>

      {/* Notification Settings Modal */}
      <NotificationSettings
        open={showNotificationSettings}
        onClose={() => setShowNotificationSettings(false)}
      />
    </div>
  );
};

export default HomeScreen;
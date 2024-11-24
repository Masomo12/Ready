import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NotificationSettingsProps {
  open: boolean;
  onClose: () => void;
}

const NotificationSettings = ({ open, onClose }: NotificationSettingsProps) => {
  const [settings, setSettings] = useState({
    floods: true,
    fires: true,
    earthquakes: true,
    storms: true,
    droughts: false,
    tsunamis: true,
    radius: '50',
    email: true,
    push: true,
    sms: false,
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Types</h3>
            <div className="space-y-3">
              {Object.entries({
                floods: 'Floods',
                fires: 'Fires',
                earthquakes: 'Earthquakes',
                storms: 'Severe Storms',
                droughts: 'Droughts',
                tsunamis: 'Tsunamis',
              }).map(([key, label]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings[key as keyof typeof settings] as boolean}
                    onChange={(e) =>
                      setSettings((prev) => ({ ...prev, [key]: e.target.checked }))
                    }
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Radius</h3>
            <input
              type="range"
              min="10"
              max="100"
              value={settings.radius}
              onChange={(e) =>
                setSettings((prev) => ({ ...prev, radius: e.target.value }))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>10 miles</span>
              <span>{settings.radius} miles</span>
              <span>100 miles</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Methods</h3>
            <div className="space-y-3">
              {Object.entries({
                email: 'Email Notifications',
                push: 'Push Notifications',
                sms: 'SMS Notifications',
              }).map(([key, label]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings[key as keyof typeof settings] as boolean}
                    onChange={(e) =>
                      setSettings((prev) => ({ ...prev, [key]: e.target.checked }))
                    }
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
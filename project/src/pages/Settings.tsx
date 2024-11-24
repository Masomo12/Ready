import React, { useState } from 'react';
import { Bell, Globe, Shield, ChevronRight, Moon, Volume2 } from 'lucide-react';
import NotificationSettings from '../components/NotificationSettings';
import SettingsGroup from '../components/SettingsGroup';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'sw', name: 'Swahili' },
  { code: 'so', name: 'Somali' },
  { code: 'am', name: 'Amharic' }
];

const Settings = () => {
  const [notificationModal, setNotificationModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600 mb-8">Customize your READY experience</p>

        <div className="space-y-6">
          <SettingsGroup title="Notifications">
            <button
              onClick={() => setNotificationModal(true)}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bell className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">Notification Settings</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </SettingsGroup>

          <SettingsGroup title="Language & Region">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Globe className="h-5 w-5 text-green-600" />
              </div>
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="flex-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </SettingsGroup>

          <SettingsGroup title="Appearance & Sound">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Moon className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Dark Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Volume2 className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700">Alert Sounds</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </SettingsGroup>

          <SettingsGroup title="Privacy & Security">
            <a
              href="/privacy-policy"
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-gray-700">Privacy Policy</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </a>
          </SettingsGroup>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>READY: Disaster Alerts v1.0.0</p>
            <p className="mt-1">© 2024 READY. All rights reserved.</p>
          </div>
        </div>

        <NotificationSettings
          open={notificationModal}
          onClose={() => setNotificationModal(false)}
        />
      </div>
    </div>
  );
};

export default Settings;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, MessageSquare, Settings as SettingsIcon, Shield } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <Link
          to="/"
          className={`flex flex-col items-center p-2 ${
            location.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/resources"
          className={`flex flex-col items-center p-2 ${
            location.pathname === '/resources' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          <Menu className="h-6 w-6" />
          <span className="text-xs mt-1">Resources</span>
        </Link>
        <Link
          to="/femicide-prevention"
          className={`flex flex-col items-center p-2 ${
            location.pathname === '/femicide-prevention' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
          }`}
        >
          <Shield className="h-6 w-6" />
          <span className="text-xs mt-1">Safety</span>
        </Link>
        <Link
          to="/communication"
          className={`flex flex-col items-center p-2 ${
            location.pathname === '/communication' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Messages</span>
        </Link>
        <Link
          to="/settings"
          className={`flex flex-col items-center p-2 ${
            location.pathname === '/settings' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          <SettingsIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
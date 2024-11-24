import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Image as ImageIcon, Send, MessageSquare, Filter } from 'lucide-react';
import MessageComposer from '../components/MessageComposer';
import MessageList from '../components/MessageList';
import { Message } from '../types';

const OfflineCommunication = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'location'>('recent');
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  useEffect(() => {
    // Load messages from IndexedDB
    const loadMessages = async () => {
      const db = await openDB();
      const storedMessages = await db.getAll('messages');
      setMessages(storedMessages);
    };
    loadMessages();
  }, []);

  const handlePost = async (message: Message) => {
    const db = await openDB();
    await db.add('messages', message);
    setMessages(prev => [message, ...prev]);
    setIsComposerOpen(false);
  };

  const sortedMessages = [...messages].sort((a, b) => {
    if (sortBy === 'recent') {
      return b.timestamp - a.timestamp;
    }
    // Simple distance-based sorting (in a real app, use proper geolocation)
    return (Number(a.location?.split(',')[0]) || 0) - (Number(b.location?.split(',')[0]) || 0);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Offline Communication</h1>
          <p className="mt-2 text-gray-600">Stay connected with your community, even offline</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setSortBy('recent')}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    sortBy === 'recent' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  <span>Recent</span>
                </button>
                <button
                  onClick={() => setSortBy('location')}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    sortBy === 'location' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Location</span>
                </button>
              </div>
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${navigator.onLine ? 'bg-green-500' : 'bg-red-500'}`} />
                {navigator.onLine ? 'Online' : 'Offline'}
              </div>
            </div>
          </div>
        </div>

        {/* Message List */}
        <MessageList messages={sortedMessages} />

        {/* Compose Button */}
        <button
          onClick={() => setIsComposerOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare className="h-6 w-6" />
        </button>

        {/* Message Composer Modal */}
        {isComposerOpen && (
          <MessageComposer onPost={handlePost} onClose={() => setIsComposerOpen(false)} />
        )}
      </div>
    </div>
  );
};

// IndexedDB setup
const openDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('offlineMessages', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('messages')) {
        db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
};

export default OfflineCommunication;
import React from 'react';
import { MessageSquare, MapPin, Clock } from 'lucide-react';
import { Message } from '../types';

interface Props {
  messages: Message[];
}

const MessageList = ({ messages }: Props) => {
  if (messages.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="h-12 w-12 mx-auto text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">No messages yet</h3>
        <p className="mt-2 text-gray-600">Be the first to post a message in your area</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{message.author}</h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(message.timestamp).toLocaleString()}
                  </div>
                  {message.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Nearby</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <p className="mt-3 text-gray-700">{message.text}</p>
            
            {message.image && (
              <div className="mt-3">
                <img
                  src={message.image}
                  alt="Message attachment"
                  className="rounded-lg max-h-96 w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
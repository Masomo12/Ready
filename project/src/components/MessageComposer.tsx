import React, { useState, useRef } from 'react';
import { X, Image as ImageIcon, MapPin, Send } from 'lucide-react';
import { Message } from '../types';

interface Props {
  onPost: (message: Message) => void;
  onClose: () => void;
}

const MessageComposer = ({ onPost, onClose }: Props) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!text.trim()) return;

    const message: Message = {
      id: Date.now(),
      text,
      image,
      timestamp: Date.now(),
      location: '0,0', // In a real app, use the Geolocation API
      author: 'Anonymous', // In a real app, use actual user data
    };

    onPost(message);
    setText('');
    setImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50">
      <div className="bg-white w-full sm:w-[500px] sm:rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">New Message</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening in your area?"
            className="w-full h-32 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {image && (
            <div className="relative mt-4">
              <img
                src={image}
                alt="Selected"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
              >
                <ImageIcon className="h-5 w-5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <MapPin className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!text.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Post Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComposer;
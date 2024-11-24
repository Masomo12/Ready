import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  // Simulated disaster zones in Kenya
  const disasterZones = [
    { id: 1, lat: '25%', long: '45%', type: 'flood' },
    { id: 2, lat: '35%', long: '55%', type: 'drought' },
    { id: 3, lat: '45%', long: '35%', type: 'fire' },
  ];

  return (
    <div className="relative h-[400px] bg-gray-100">
      <img
        src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=1600&h=900"
        alt="Map of Kenya"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      
      {/* Disaster zone indicators */}
      {disasterZones.map((zone) => (
        <div
          key={zone.id}
          className="absolute"
          style={{ top: zone.lat, left: zone.long }}
        >
          <div className={`
            w-4 h-4 rounded-full animate-ping absolute
            ${zone.type === 'flood' ? 'bg-blue-500' : 
              zone.type === 'drought' ? 'bg-amber-500' : 'bg-red-500'}
            opacity-75
          `}></div>
          <div className={`
            w-4 h-4 rounded-full relative
            ${zone.type === 'flood' ? 'bg-blue-500' : 
              zone.type === 'drought' ? 'bg-amber-500' : 'bg-red-500'}
          `}></div>
        </div>
      ))}

      {/* Current location indicator */}
      <div className="absolute top-[30%] left-[40%]">
        <div className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
          <MapPin className="h-4 w-4 text-blue-600" />
        </div>
      </div>

      {/* Map overlay info */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900">3 Active Alerts in Kenya</p>
        <p className="text-sm text-gray-600">Within 50 km radius of Nairobi</p>
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-900 mb-2">Alert Types</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-700">Floods</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-xs text-gray-700">Droughts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs text-gray-700">Fires</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
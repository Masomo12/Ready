import React from 'react';
import { MapPin, Shield, AlertTriangle } from 'lucide-react';

const SafetyMap = () => {
  const safeZones = [
    { id: 1, type: 'police', name: 'Central Police Station', lat: '30%', long: '45%' },
    { id: 2, type: 'shelter', name: "Women's Safe House", lat: '40%', long: '55%' },
    { id: 3, type: 'hospital', name: 'Emergency Care Center', lat: '35%', long: '50%' },
  ];

  const hotspots = [
    { id: 1, risk: 'high', lat: '45%', long: '40%' },
    { id: 2, risk: 'medium', lat: '50%', long: '45%' },
  ];

  return (
    <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=1600&h=900"
        alt="Safety Map"
        className="w-full h-full object-cover"
      />
      
      {/* Safe Zones */}
      {safeZones.map((zone) => (
        <div
          key={zone.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: zone.lat, left: zone.long }}
        >
          <div className="p-2 bg-green-100 rounded-full shadow-lg">
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded text-xs shadow">
            {zone.name}
          </div>
        </div>
      ))}

      {/* Risk Hotspots */}
      {hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: hotspot.lat, left: hotspot.long }}
        >
          <div className={`p-2 rounded-full shadow-lg ${
            hotspot.risk === 'high' ? 'bg-red-100' : 'bg-yellow-100'
          }`}>
            <AlertTriangle className={`h-5 w-5 ${
              hotspot.risk === 'high' ? 'text-red-600' : 'text-yellow-600'
            }`} />
          </div>
        </div>
      ))}

      {/* Current Location */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
          <MapPin className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span>Safe Zones</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <span>Risk Areas</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span>Your Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMap;
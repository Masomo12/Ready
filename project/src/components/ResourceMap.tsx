import React from 'react';
import { MapPin, HomeIcon, Stethoscope, Droplets } from 'lucide-react';

interface Resource {
  id: string;
  type: 'shelter' | 'medical' | 'supplies';
  name: string;
  address: string;
  distance: string;
  status: 'open' | 'full' | 'limited';
  capacity?: string;
  lat: string;
  long: string;
}

const ResourceMap = ({ selectedType, resources }: { selectedType: string | null, resources: Resource[] }) => {
  return (
    <div className="relative h-[600px] bg-gray-100">
      <img
        src="https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&q=80&w=2000&h=1200"
        alt="Map of Kenya"
        className="w-full h-full object-cover"
      />
      
      {/* Resource Markers */}
      {resources
        .filter(resource => !selectedType || resource.type === selectedType)
        .map((resource) => (
          <div
            key={resource.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ top: resource.lat, left: resource.long }}
          >
            <div className="relative group">
              <div className={`
                p-2 rounded-full shadow-lg
                ${resource.type === 'shelter' ? 'bg-green-100' : 
                  resource.type === 'medical' ? 'bg-red-100' : 'bg-blue-100'}
              `}>
                {resource.type === 'shelter' && <HomeIcon className="h-5 w-5 text-green-600" />}
                {resource.type === 'medical' && <Stethoscope className="h-5 w-5 text-red-600" />}
                {resource.type === 'supplies' && <Droplets className="h-5 w-5 text-blue-600" />}
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48">
                <div className="bg-white rounded-lg shadow-lg p-3 text-sm">
                  <p className="font-semibold text-gray-900">{resource.name}</p>
                  <p className="text-gray-600 text-xs mt-1">{resource.address}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${resource.status === 'open' ? 'bg-green-100 text-green-800' :
                        resource.status === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}
                    `}>
                      {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500">{resource.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Current Location */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 rounded-full bg-blue-600 shadow-lg flex items-center justify-center animate-pulse">
          <MapPin className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Resource Types</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-green-100 rounded-full">
              <HomeIcon className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-sm text-gray-700">Shelters</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-red-100 rounded-full">
              <Stethoscope className="h-4 w-4 text-red-600" />
            </div>
            <span className="text-sm text-gray-700">Medical Centers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-blue-100 rounded-full">
              <Droplets className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm text-gray-700">Supply Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceMap;
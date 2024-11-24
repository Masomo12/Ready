import React from 'react';
import { HomeIcon, Stethoscope, Droplets, Navigation2 } from 'lucide-react';

interface Resource {
  id: string;
  type: 'shelter' | 'medical' | 'supplies';
  name: string;
  address: string;
  distance: string;
  status: 'open' | 'full' | 'limited';
  capacity?: string;
}

const ResourceList = ({ resources }: { resources: Resource[] }) => {
  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className={`
              p-3 rounded-full
              ${resource.type === 'shelter' ? 'bg-green-100' : 
                resource.type === 'medical' ? 'bg-red-100' : 'bg-blue-100'}
            `}>
              {resource.type === 'shelter' && <HomeIcon className="h-6 w-6 text-green-600" />}
              {resource.type === 'medical' && <Stethoscope className="h-6 w-6 text-red-600" />}
              {resource.type === 'supplies' && <Droplets className="h-6 w-6 text-blue-600" />}
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                  <p className="text-gray-600">{resource.address}</p>
                </div>
                <span className={`
                  px-2.5 py-1 rounded-full text-xs font-medium
                  ${resource.status === 'open' ? 'bg-green-100 text-green-800' :
                    resource.status === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}
                `}>
                  {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <Navigation2 className="h-4 w-4 mr-1" />
                  <span className="text-sm">{resource.distance}</span>
                </div>
                
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
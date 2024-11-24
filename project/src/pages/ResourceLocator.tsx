import React, { useState } from 'react';
import { Search, Navigation2 } from 'lucide-react';
import ResourceMap from '../components/ResourceMap';
import ResourceList from '../components/ResourceList';

const MOCK_RESOURCES = [
  {
    id: '1',
    type: 'shelter',
    name: 'Nyayo Stadium Emergency Shelter',
    address: 'Nyayo Stadium, Nairobi',
    distance: '1.2 km away',
    status: 'open',
    capacity: '120/200',
    lat: '45%',
    long: '48%',
  },
  {
    id: '2',
    type: 'medical',
    name: 'Kenyatta National Hospital',
    address: 'Hospital Rd, Nairobi',
    distance: '2.5 km away',
    status: 'limited',
    lat: '52%',
    long: '45%',
  },
  {
    id: '3',
    type: 'supplies',
    name: 'Red Cross Distribution Center',
    address: 'South B, Nairobi',
    distance: '3.1 km away',
    status: 'open',
    lat: '48%',
    long: '52%',
  },
  {
    id: '4',
    type: 'shelter',
    name: 'Kasarani Indoor Arena',
    address: 'Kasarani, Nairobi',
    distance: '4.8 km away',
    status: 'full',
    capacity: '200/200',
    lat: '35%',
    long: '55%',
  },
  {
    id: '5',
    type: 'medical',
    name: 'Mama Lucy Hospital',
    address: 'Kayole, Nairobi',
    distance: '5.2 km away',
    status: 'open',
    lat: '42%',
    long: '58%',
  }
] as const;

const ResourceLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  const filteredResources = MOCK_RESOURCES.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resource & Shelter Locator</h1>
          <p className="mt-2 text-gray-600">Find nearby emergency resources and safe locations</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType(selectedType === 'shelter' ? null : 'shelter')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'shelter' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Shelters
              </button>
              <button
                onClick={() => setSelectedType(selectedType === 'medical' ? null : 'medical')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'medical' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Medical
              </button>
              <button
                onClick={() => setSelectedType(selectedType === 'supplies' ? null : 'supplies')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  selectedType === 'supplies' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Supplies
              </button>
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 ${viewMode === 'map' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Map
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                List
              </button>
            </div>
          </div>

          {/* Find Nearest Button */}
          <button
            className="mt-4 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 font-medium"
          >
            <Navigation2 className="h-5 w-5" />
            Find Nearest Resource
          </button>
        </div>

        {/* Map/List View */}
        {viewMode === 'map' ? (
          <ResourceMap selectedType={selectedType} resources={filteredResources} />
        ) : (
          <ResourceList resources={filteredResources} />
        )}
      </div>
    </div>
  );
};

export default ResourceLocator;
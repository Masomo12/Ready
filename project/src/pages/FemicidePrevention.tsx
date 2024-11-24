import React, { useState } from 'react';
import { Shield, Bell, MapPin, Phone, FileText, Book, Users, AlertTriangle } from 'lucide-react';
import SafetyMap from '../components/SafetyMap';
import EmergencyContacts from '../components/EmergencyContacts';
//import IncidentReport from '../components/IncidentReport';
import ResourceDirectory from '../components/ResourceDirectory';
import SafetyEducation from '../components/SafetyEducation';
import CommunitySupport from '../components/CommunitySupport';

const FemicidePrevention = () => {
  const [showEmergencyContacts, setShowEmergencyContacts] = useState(false);
  const [showIncidentReport, setShowIncidentReport] = useState(false);

  const triggerSOS = () => {
    // In a real app, this would trigger location sharing and alerts
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Emergency location:', position.coords);
      // Send alerts to emergency contacts
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Emergency SOS Button */}
      <div className="fixed bottom-20 right-6 z-50">
        <button
          onClick={triggerSOS}
          className="w-16 h-16 bg-red-600 rounded-full shadow-lg flex items-center justify-center animate-pulse hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          <Shield className="h-8 w-8 text-white" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Femicide Prevention & Response</h1>
          <p className="mt-2 text-gray-600">Emergency support and safety resources</p>
        </div>

        {/* Safety Map */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Community Safety Map</h2>
          <SafetyMap />
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setShowEmergencyContacts(true)}
            className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <Phone className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-blue-900">Emergency Contacts</span>
          </button>
          
          <button
            onClick={() => setShowIncidentReport(true)}
            className="p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors"
          >
            <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-purple-900">Report Incident</span>
          </button>

          <button
            onClick={() => {}} // Navigate to resources
            className="p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
          >
            <Book className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-green-900">Safety Resources</span>
          </button>
        </div>

        {/* Resource Directory */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Support Services</h2>
          <ResourceDirectory />
        </div>

        {/* Safety Education */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Safety Education</h2>
          <SafetyEducation />
        </div>

        {/* Community Support */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h2>
          <CommunitySupport />
        </div>
      </div>

      {/* Modals */}
      {showEmergencyContacts && (
        <EmergencyContacts onClose={() => setShowEmergencyContacts(false)} />
      )}
      
      {showIncidentReport && (
        <IncidentReport onClose={() => setShowIncidentReport(false)} />
      )}
    </div>
  );
};

export default FemicidePrevention;

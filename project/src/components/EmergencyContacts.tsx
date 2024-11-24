import React, { useState } from 'react';
import { X, Plus, Phone, User, Save } from 'lucide-react';

interface EmergencyContactsProps {
  onClose: () => void;
}

const EmergencyContacts = ({ onClose }: EmergencyContactsProps) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'National GBV Hotline', number: '1195', fixed: true },
    { id: 2, name: 'Police Emergency', number: '999', fixed: true },
    { id: 3, name: 'Emergency Contact 1', number: '', fixed: false },
  ]);

  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const addContact = () => {
    if (newContact.name && newContact.number) {
      setContacts([...contacts, { id: Date.now(), ...newContact, fixed: false }]);
      setNewContact({ name: '', number: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Emergency Contacts</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Existing Contacts */}
          <div className="space-y-4 mb-6">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.number}</p>
                  </div>
                </div>
                <a
                  href={`tel:${contact.number}`}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>

          {/* Add New Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Add New Contact</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Contact Name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={newContact.number}
                onChange={(e) => setNewContact({ ...newContact, number: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addContact}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Contact
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
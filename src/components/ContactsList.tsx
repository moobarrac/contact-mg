// Importing required modules and hooks
import React, { useState } from 'react';
import ContactModal from './ContactModal';

// Declaring Props interface
interface Props {
  contacts: Contact[]
  onDelete: (id: number) => void;
  onEdit: (contact: Contact) => void;
}

const ContactsList = ({ onDelete, onEdit, contacts }: Props) => {
  // Declare state to hold the currently selected contact
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Function to handle a contact being clicked
  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  // Function to handle the contact modal being closed
  const handleModalClose = () => {
    setSelectedContact(null);
  };

  // If no contacts are passed as props, display a message indicating so
  if (contacts.length === 0) {
    return (
      <div className='flex justify-center mt-20'>
        <p className="border border-gray-300 bg-gray-800 text-white rounded-md p-4 text-center">
          No contacts found<br/>Click on the 'Create contact' button
        </p>
      </div>
    );
  }

  // Otherwise, display the list of contacts
  return (
    <div className='mt-20 w-full'>
      <h3 className='text-2xl font-bold text-gray-800 mt-8 mb-4 text-center'>Contact Lists</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {contacts.map(({ id, lastName, firstName, status }: Contact) => (
          <div
            key={id}
            className="border border-gray-300 bg-gray-800 text-white rounded-md p-4 flex flex-col justify-between w-full mx-auto sm:w-auto sm:mx-0 cursor-pointer"
            onClick={() => handleContactClick({ id, lastName, firstName, status })}
          >
            <div className='text-white'>
              <h3 className="text-lg font-medium">{firstName} {lastName}</h3>
              <p className="text-gray-400">{status}</p>
            </div>
            <div className="mt-4 flex justify-between gap-8">
              <button
                onClick={() => onDelete(id)}
                className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none text-sm"
              >
                Delete
              </button>
              <button
                className="px-2 py-1 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none text-sm"
                onClick={() => onEdit({ id, lastName, firstName, status })}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedContact && (
        <ContactModal contact={selectedContact} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default ContactsList;  // export ContactsList component for use in other parts of the application

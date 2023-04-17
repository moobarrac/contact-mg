// Importing required modules and hooks
import { useAppDispatch } from '../hooks/useAppSelector';
import { addContact, updateContact } from '../store/contactsSlice';
import React, { useEffect, useState } from 'react';

// Declaring Props interface
interface Props {
  contact?: Contact | null;
  emptyContact?: () => void
}

const ContactForm = ({ contact, emptyContact }: Props) => {
  // Initializing state variables
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  // Use effect hook for setting state when the contact prop is changed
  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
      setShowForm(true);
    }
  }, [contact]);

  // Function for handling contact creation or update
  const handleCreate = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('Please enter a valid first and last name.');
      return;
    }
    
    // Updating existing contact
    if (contact && emptyContact) {
      dispatch(updateContact({
        ...contact,
        firstName,
        lastName,
        status
      }));
      emptyContact();
    }
    // Adding new contact
    else {
      dispatch(addContact({
        id: Date.now(),
        firstName,
        lastName,
        status
      }));
    }

    // Resetting state variables after update or cretion
    setShowForm(false);
    setFirstName('');
    setLastName('');
    setStatus('active');
  };

  const handleCancel = () => {
    // Resetting state variables after cancel
    setFirstName('');
    setLastName('');
    setStatus('active');
    setShowForm(false);

    // Clearing contact details from the parent component
    if (emptyContact) {
      emptyContact();
    }
  }

  // Rendering the JSX
  return (
    <div className='md:w-80 w-full'>
      {showForm ? (
        <>
          <h3 className='text-2xl font-bold text-gray-800 mt-8 mb-4 text-center'>{contact === null ? 'Create contact' : 'Edit contact'}</h3>
          <div className="border border-gray-300 bg-gray-800 text-white rounded-md p-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-400 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-400 bg-gray-900 text-white rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-400 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-400 bg-gray-900 text-white rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Status</label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                  className="form-radio h-5 w-5 text-gray-400"
                />
                <span className="ml-2 text-gray-400">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                  className="form-radio h-5 w-5 text-gray-400"
                />
                <span className="ml-2 text-gray-400">Inactive</span>
              </label>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleCancel}
                className='px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none text-sm'
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none text-sm"
              >
                {contact === null ? 'Create' : 'Save editted contact'}
              </button>
            </div>
          </div>

        </>
      ) : (
        <div
          onClick={() => setShowForm(true)}
          className="w-full text-center mt-20 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Create contact
        </div>
      )}
    </div>
  );
}

export default ContactForm;  // export ContactForm component for use in other parts of the application

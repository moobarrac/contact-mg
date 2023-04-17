// Importing required modules and hooks
import React, { useState } from 'react';
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { deleteContact } from '../store/contactsSlice';

function ContactsPage() {
  // Initializing the state variables
  const dispatch = useAppDispatch();
  const [editContact, setEditContact] = useState<Contact | null>(null);

  // Retrieving contacts from the redux store using useAppSelector hook
  const contacts = useAppSelector((state) => state.contacts.contacts);

  // Defining function to handle delete of contact
  const handleDelete = (id: number) => {
    // Dispatching the deleteContact action to the redux store
    dispatch(deleteContact(id));
  };

  // Defining function to handle edit of contact
  const handleEdit = (contact: Contact) => {
    // Setting the contact to editContact state variable
    setEditContact(contact);
  };

  // Defining function to empty the editContact state variable
  const emptyContact = () => {
    setEditContact(null);
  };

  // Rendering the JSX
  return (
    <div className="h-full flex-1">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              </div>
              <div className="block">
                <h4 className='text-white px-3 py-2 rounded-md text-sm font-medium'>Contacts page</h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-4 md:p-8 flex flex-col justify-center items-center w-full">
        <ContactForm contact={editContact} emptyContact={emptyContact} />
        <ContactsList contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default ContactsPage;  // export ContactsPage component for use in other parts of the application as default

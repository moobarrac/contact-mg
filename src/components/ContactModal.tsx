import React from "react";

// Declaring Props interface
interface Props {
  contact: Contact;
  onClose: () => void;
}

const ContactModal = ({ contact, onClose }: Props) => {
  // Rendering the JSX
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 px-4 flex justify-center items-center z-99">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-2">Name: {contact.firstName} {contact.lastName}</h2>
        <p className="text-gray-600 mb-4">Status: {contact.status}</p>
        <button onClick={onClose} className="bg-red-500 text-gray-800 rounded p-2 text-sm hover:bg-red-700">Close</button>
      </div>
    </div>
  );
};

export default ContactModal;

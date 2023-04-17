// Importing required modules
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defining the interface for the contacts state
interface ContactsState {
  contacts: Contact[];
}

// Setting up the initial state for the contacts state
const initialState: ContactsState = {
  contacts: [],
};

// Setting up the initial state for the contacts state
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // Creating a reducer for adding a contact to the state
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    // Creating a reducer for deleting a contact from the state
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    // Creating a reducer for updating a contact in the state
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

// Exporting the action creators generated by the createSlice function
export const { addContact, deleteContact, updateContact } = contactsSlice.actions;

// Exporting the reducer function generated by the createSlice function
export default contactsSlice.reducer;

// Importing the necessary modules and functions from the redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

// Creating a store by calling configureStore and passing the contactsReducer as a parameter to the 'contacts' slice of the store
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// Exporting the RootState and AppDispatch types for use in other parts of the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

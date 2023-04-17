export {}; // Export an empty object to make this file a module

declare global {
  // Define an interface for the Contact object
  interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
  }

  // Define an interface for the ContactsState object
  interface ContactsState {
    contacts: Contact[];
  }
}

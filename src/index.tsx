// Importing required modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query';

// Creating a new instance of QueryClient
const queryClient = new QueryClient();

// Creating a root element for the app to be rendered on
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// Rendering the app
root.render(
  // Wrapping the app in a QueryClientProvider and Provider to provide the store and query client to the app
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);

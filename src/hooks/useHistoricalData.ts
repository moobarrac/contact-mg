// Importing required module
import { useQuery } from 'react-query';
import { historicalData } from './api';

// This function fetches historical data from the COVID-19 history API
async function fetchHistoricalData() {
  const res = await fetch(historicalData);
  return res.json();
}

// This custom hook uses the react-query library to fetch country data and handle loading and error states
export function useHistoricalData() {
  return useQuery('casesData', fetchHistoricalData);
}

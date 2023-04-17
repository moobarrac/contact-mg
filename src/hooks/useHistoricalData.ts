// Importing required module
import { useQuery } from 'react-query';

// This function fetches historical data from the COVID-19 history API
async function fetchHistoricalData() {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return res.json();
}

// This custom hook uses the react-query library to fetch country data and handle loading and error states
export function useHistoricalData() {
  return useQuery('casesData', fetchHistoricalData);
}

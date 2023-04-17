// Importing required module
import { useQuery } from 'react-query';
import { countryData } from './api';

// This function fetches country data from the COVID-19 API

async function fetchCountryData() {
  const res = await fetch(countryData);
  return res.json();
}

// This custom hook uses the react-query library to fetch country data and handle loading and error states
export function useCountryData() {
  return useQuery('countryData', fetchCountryData);
}

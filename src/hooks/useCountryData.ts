// Importing required module
import { useQuery } from 'react-query';

// This function fetches country data from the COVID-19 API

async function fetchCountryData() {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  return res.json();
}

// This custom hook uses the react-query library to fetch country data and handle loading and error states
export function useCountryData() {
  return useQuery('countryData', fetchCountryData);
}

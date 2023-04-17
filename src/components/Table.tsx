// Importing required modules and hooks
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@material-ui/core';
import { useCountryData } from '../hooks/useCountryData';

const TableComponent = () => {
  // call custom hook to fetch data
  const { data } = useCountryData(); 
  return (
    <div>
      <Typography variant="h5" component="h2" align="center" className="mb-4">COVID-19 World Stats</Typography>
      <TableContainer component={Paper} className="p-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Cases</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((country: any, index: number) => (
              <TableRow key={country.country} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <TableCell component="th" scope="row">
                  {country.country}
                </TableCell>
                <TableCell align="right">{country.cases}</TableCell>
                <TableCell align="right">{country.recovered}</TableCell>
                <TableCell align="right">{country.deaths}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;  // export TableComponent component for use in other parts of the application as default

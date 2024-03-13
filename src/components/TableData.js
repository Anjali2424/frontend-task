import React, { useState } from 'react';

const TableData = ({ searchResults }) => {
    console.log('results', searchResults);


    return (
        <main className="table-container">
          <table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Country</th>
              </tr>
          </thead>
          {searchResults.map((result, index) => (
              <tr key={result.id}>
                  <td>{index + 1}</td>
                  <td>{result.name}</td>
                  <td>
                  {result.country} &nbsp;
                      {result.countryCode && (
                          <img 
                          src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
                           alt={result.country}
                           width= '20px'
                           height='15px' />
                      )}
                  </td>
              </tr>
          ))}
      </table>  
        
        </main>
    );
};

export default TableData;
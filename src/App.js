import React from 'react';
import data from './data.json';

// put a JSON file on the page
// import data from './data.json';

// console.log(data);

const App = () => {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};


export default App;


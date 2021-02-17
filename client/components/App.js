import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js';
import Results from './Results.js';

function App() {
  return (
    <div className="main">
      <Search />
      <Results />
    </div>
  )
}

export default App;

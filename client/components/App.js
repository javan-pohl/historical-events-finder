import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js';
import List from './List.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function fetchResults() {
    // will need to reconfigure to include searchterm but let's test first
    let query = `http://localhost:3000/posts?date=-300`
    axios.get(query)
      .then(data => {
        console.log('search results: ', data);
        setSearchResults(data);
      })
      .catch(err => console.log('fetch error: ', err));
  }
  function handleSearchChange(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit button pressed')
    fetchResults();
  }
  function renderPage() {
    if(searchResults.length) {
      return (
        <React.Fragment>
          <Search
          value={searchTerm}
          onChange={handleSearchChange}
          onSubmit={handleSubmit}
          />
          <List
            list={searchResults}
          />
        </React.Fragment>
      )
    } else {
      return (
        <Search
          value={searchTerm}
          onChange={handleSearchChange}
          onSubmit={handleSubmit}      
        />
      )
    }
  }
  return (
    <div className="main">
      {renderPage()}
    </div>
  )
}

export default App;

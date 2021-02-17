import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js';
import List from './List.js';

function App() {
  const [page, setPage] = useState(1);
  const [ready, setReady] = useState(false);
  const [perPage, setPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function fetchResults() {
    // will need to reconfigure to include searchterm but let's test first
    // let query = `http://localhost:3000/posts?date=-300`;
    // let query = `http://localhost:3000/posts?_page=${page}&_limit=${perPage}q=${searchTerm}`;
    let query = `http://localhost:3000/posts?q=${searchTerm}&_page=${page}&_limit=${perPage}`;
    console.log('query: ', query);
    axios.get(query)
      .then(data => {
        console.log('search results: ', data);
        setSearchResults(data.data);
        setReady(true);
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
    if(ready) {
      return (
        <React.Fragment>
          <Search
            value={searchTerm}
            onChange={handleSearchChange}
            onSubmit={handleSubmit}
            display={ready}
          />
          <List
            list={searchResults}
            display={ready}
          />
        </React.Fragment>
      )
    } else {
      return (
        <Search
          value={searchTerm}
          onChange={handleSearchChange}
          onSubmit={handleSubmit}      
          display={ready}
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

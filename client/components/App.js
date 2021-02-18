import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './Search.js';
import List from './List.js';
import ReactPaginate from 'react-paginate';

function App() {
  const [page, setPage] = useState(1);
  const [ready, setReady] = useState(false);
  const [perPage, setPerPage] = useState(8);
  const [lastPage, setLastPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function fetchResults() {
    let query = `http://localhost:3000/posts?q=${searchTerm}&_page=${page}&_limit=${perPage}`;
    axios.get(query)
      .then(data => {
        console.log('search results: ', data);
        setSearchResults(data.data);
        // setReady(true);
        getLastPage(data.headers.link);
      })
      .catch(err => console.log('fetch error: ', err));
  }
  
  function getLastPage(headerLink) {
    // console.log('headerLink: ', headerLink);
    let arr = headerLink.split(',');
    // console.log('header arr: ', arr);
    let str = arr[2].substring(arr[2].indexOf('page=') + 5, arr[2].indexOf('&_limit'));
    // console.log('str: ', str);
    // console.log(parseInt(str))
    setLastPage(parseInt(str))
    setReady(true);
  }
  
  function handlePageClick(data) {
    console.log('page clicked: ', data.selected + 1);
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
          <div className="pagination-main">
          <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={lastPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </div>
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

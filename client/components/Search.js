import React from 'react';

const Search = ({value, onChange, onSubmit}) => {
  console.log('in Search');
  return (
    <div id="search" className="centered flex-parent flex-wrap-no flex-align-center flex-center">
      <div>

        <form className="center-text" onSubmit={(e) => onSubmit(e)} >

          <label>
          Search for a thing:
            <br></br>

            <input
              id="input-field"
              value={value}
              onChange={(e) => onChange(e)}
              type="text"
              name="name"
            />
          </label>

          <input type="submit" value="Submit" className="color-green" />
        </form>
      </div>
    </div>
  )
}

export default Search;
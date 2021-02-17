import React from 'react';
import Item from './Item.js';

const List = ({list}) => {
  console.log('list: ', list);
  let results = list.map((result, i) => {
    return (
      <Item item={result} key={i}/>
    )
  })
  return (
    <div className="search-results padding-bottom-15px">
      {results}
    </div>
  )
}

export default List;
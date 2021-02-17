import React from 'react';

const Item = ({item}) => {
  console.log('item: ', item);
  return (
    <div className="event flex-parent flex-column" >
       <div className="event-row event-date-row flex-parent flex-row">
        <div className="event-date-header">
          Date:
        </div>
        <div className="event-date margin-left-15px ">
          {item.date}
        </div>
       </div>
       <div className="event-row event-desc-row flex-parent flex-row">
        <div className="event-desc-header">
          Desc:
        </div>
        <div className="event-desc margin-left-15px">
          {item.description}
        </div>
       </div>
       <div className="event-row event-topic-row flex-parent flex-row">
        <div className="event-topic-header">
          Topic:
        </div>
        <div className="event-topic margin-left-15px">
          {item.category2}
        </div>
       </div>
    </div>
  )
}

export default Item;
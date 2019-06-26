import React from 'react';

var Event = (props) => {
  return (
    <div>
     {props.events.map(event => {
       return (
         <div key={event.date} className='event'>
           <ul>{"Event Date: " + event.date + "  Description: " + event.description} </ul>
         </div>
       )
     })}
    </div>
  );
}

export default Event;
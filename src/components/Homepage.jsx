import React from 'react';

export default function Homepage(props){
  console.log('props' + props);
  return(
    <div>
      <h3>{props.category}</h3>
      <a href={props.description}>{props.description}</a>
    </div>
  );
}

import React from 'react';
import MyRating from 'react-rating';

export default function Rating(props){
  console.log('props' + props);
  return(
    <div>
      <h3>{props.category}  {props.description}</h3>
      <h5>
        <MyRating readonly={true} initialRating={props.description} start={0} stop={10} /> 
      </h5>
    </div>
  );
}
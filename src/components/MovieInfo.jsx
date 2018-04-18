import React from 'react';
import Title from './Title';
import Description from './Description';
import Rating from './Rating';
import Homepage from './Homepage';
import {Row} from 'react-bootstrap';

export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px'
  };

    return(
      <div style={style}>
        <Row>
          <Title title={props.movie.title} />
        </Row>
        <Row>
          <Rating category={'Rating: '} description={props.movie.vote_average} />
        </Row>
        <Row>
          <Description category={'Overview'} description={props.movie.overview} />
          <Homepage category={'Homepage: '} description={props.movie.homepage} />
        </Row>
      </div>
    );
}

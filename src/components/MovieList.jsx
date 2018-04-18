import React , { Component } from 'react';
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class MovieList extends Component{

  render() {
  const style={
	display: 'flex',
	flexWrap: 'wrap'
  }

    let movies = this.props.movies.filter(function(movie) {
      return movie.poster_path != null;
    }).map(function(movie) {
        return(
          <Col xs={6} sm={6} md={4} key={movie.id} >
          <hr />
            <Link to={'/movie/'+movie.id} >
              <Poster 
                info id={movie.id} 
                path={movie.poster_path} 
                title={movie.title} 
                voteAverage={movie.vote_average} 
                release_date={movie.release_date} 
                responsive 
              />
            </Link>
          </Col>
        );
    });

    return(
      <Grid fluid={false}>
        <Row style={style}>
          {movies}
        </Row>
      </Grid>
    );
  }
}

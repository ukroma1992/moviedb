import React from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <SearchBar brand="Movies Database" searchText={''} />
        {this.props.children}
      </div>
    );
  }
}

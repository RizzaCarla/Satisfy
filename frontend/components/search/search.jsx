import React from 'react';

class Search extends React.Component {
  render() {
    return(
      <div>
        <input 
          type='text'
          placeholder='Search for Artists, Songs, or Podcasts'
        />
      </div>
    )
  }
}

export default Search;
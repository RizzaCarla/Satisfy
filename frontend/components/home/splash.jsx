import React from 'react';

class Splash extends React.Component {
  render() {
    return(
      <div className='splash-page'>
        <nav className='left-navbar'>
          <p className='text1'>Looking for music?</p>
          <h1 className='text2'>Start listening to the best new releases.</h1>
          <button className='redirectWebPlayer' >Open Web Player</button>
        </nav>
      </div>
    )
  }
}

export default Splash
import React from 'react';

const Splash = ({ user }) => {
  const loggedIn = () => (
      <div>
        <p>You are logged in!</p>
      </div>
  )

  const loggedOut = () => (
      <div className='splash-page'>
        <nav className='left-navbar'>
          <p className='text1'>Looking for music?</p>
          <h1 className='text2'>Start listening to the best new releases.</h1>
          <button className='redirectWebPlayer' >Open Web Player</button>
        </nav>
      </div>
  )


  console.log(`user: ${user}`)

  return user ? loggedIn() : loggedOut()
}

export default Splash
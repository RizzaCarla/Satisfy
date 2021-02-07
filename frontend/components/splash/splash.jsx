import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav-bar/navbar_container';

class Splash extends React.Component {

  handleRedirect() {
    if (this.props.userId != null) {
      return(
        <Link to='/home' className='redirectLink'>
          <button className='redirectWebPlayer'>Open Web Player</button>
         </Link>
      )
    } else {
      return(
        <div>
          <Link to='/login' className='redirectLink'>
            <button className='redirectWebPlayer' onClick={() => { alert("Login Required") }}>
                  Open Web Player
            </button>
          </Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <NavBarContainer />
        <div className='splash-page'>
          <nav className='left-navbar'>
            {/* <div> */}
              <p className='text1'>Looking for music?</p>
              <h1 className='text2'>Start listening to the best new releases.</h1>
              {this.handleRedirect()}
            {/* </div> */}
          </nav>
          <nav>
            <ul className='photos-list'>
              <li className='flex-item'>
                <img src={window.splash2} className="june"></img>
                {/* <i class="material-icons">&#xe039;</i> */}
              </li>
              <li className='flex-item'>
                <img src={window.splash3} className="tom"></img>
                {/* <i class="material-icons">&#xe039;</i> */}
              </li>
              <li className='flex-item'>
                <img src={window.splash4} className="surfaces"></img>
                {/* <i class="material-icons">&#xe039;</i> */}
              </li>
              <li className='flex-item'>  
                <img src={window.splash1} className="fkj"></img>
                {/* <i class="material-icons">&#xe039;</i> */}
              </li>
              <li className='flex-item'>
                <img src={window.splash6} className="eloise"></img>
                {/* <i class="material-icons">&#xe039;</i> */}
              </li>
              <li className='flex-item'>
                <img src={window.splash5} className="homemadekazoku"></img>
                {/* <i class="material-icons">&#xe039;</i> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Splash
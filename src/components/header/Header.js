import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {

  return (
    <header>
      <button className="logo" onClick={props.handleInfoBar}>
        <FontAwesomeIcon icon="basketball-ball" size="2x" color="#D6662C"/>&nbsp;&nbsp;
        <FontAwesomeIcon icon="bars" color="#fff"/>
      </button>
      <h2 className="main-heading">Basketball Neighborhood</h2>
      <nav>
        <ul>
          <li className="firstItem"><Link to="/">Home</Link></li>
          <li><Link to="/NeighborhoodMap">Map</Link></li>
          <li className="lastItem"><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

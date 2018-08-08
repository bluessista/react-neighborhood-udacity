import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Court extends Component {

  render() {
    const { title, type, handleInfoWindow, court } = this.props; // holt die properties aus dem JSON Objekt heraus
    return (
      <li 
        className='courts' 
        role="button"
        tabIndex={0}
        onClick={() => handleInfoWindow(court)}
        aria-labelledby={title}>
          <h3 className='title'>{title}</h3>
          <p className='type'>{type}</p>
      </li>
    )
  }
}

Court.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

Court.defaultProps = {
  locations: [
    { lat: 53.5550209, lng: 10.036504 },
    { lat: 53.5554536, lng: 10.0423304 },
    { lat: 53.5548407, lng: 10.0571391 },
    { lat: 53.5525692, lng: 10.071432 },
    { lat: 53.5494322, lng: 10.0807785 }
  ]
}

export default Court;

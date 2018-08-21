import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Court extends Component {
  render() {
    const { title, type, handleInfoWindow, court, imageUrl } = this.props; // holt die properties aus dem JSON Objekt heraus
    return (
      <li 
        className='courts' 
        role="button"
        tabIndex={0}
        onClick={(event) => handleInfoWindow(event, court)}
        aria-labelledby={title}>
        <span><img className="courtImage" src={imageUrl} alt={title} /></span>
        <div>
            <h3 className='title'>{title}</h3>
            <p className='type'>{type}</p>
        </div>
      </li>
    )
  }
}

Court.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Court;

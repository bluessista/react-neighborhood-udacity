import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Map from './Map';

class Container extends Component {
  render() {
    const style = {
        width: '100vw',
        height: '84vh',
        position: 'relative',
        top: '8vh'
    }
    const {courts, className, clickedCourt, bounce, openedInfoWindow, input, handleInfoWindow } = this.props;

    return (
      <div style={style} className={className}>
        <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDF_Cu5_zu45wknOjk-3ovbjAZQyw_3PlY&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            courts={courts}
            input={input}
            clickedCourt={clickedCourt}
            bounce={bounce}
            openedInfoWindow={openedInfoWindow}
            handleInfoWindow={handleInfoWindow}
        />
      </div>

    )
  }
}

export default Container;

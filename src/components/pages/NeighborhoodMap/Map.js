import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import PropTypes from 'prop-types';
import { compose } from 'recompose';

const Map = compose(
    withScriptjs,
    withGoogleMap)(props => 
      <GoogleMap
        defaultZoom= { props.zoom }
        defaultCenter={ props.initialCenter }
      >
        {props.courts
            .filter((court) => (
                court.title
                .toLowerCase()
                .indexOf(props.input.toLowerCase()) >= 0
            ))
            .map((court) => (
                <Marker 
                    key={court.title}
                    position={ court.position }
                    title={court.title}
                    onClick={() => props.handleInfoWindow(court)}
                    animation={
                        props.bounce &&
                        props.clickedCourt.title === court.title
                        ? 1
                        : 0
                    }
                > 
                {props.clickedCourt.title === court.title && (
                    <InfoWindow onCloseClick={props.handleInfoWindow(court)}>
                        {
                            <div>
                                <h3>{court.title}</h3>
                                <span>{court.address}</span>
                            </div>
                        }
                    </InfoWindow>
                )}
                </Marker>
            ))}
      </GoogleMap>
  );

  Map.propTypes = {
    zoom: PropTypes.number,
    initialCenter: PropTypes.object.isRequired
  }
  
  Map.defaultProps = {
    zoom: 12,
    // Hamburg, by default
    initialCenter: {
      lat: 53.550383,
      lng: 9.992369
    }
  }


export default Map;

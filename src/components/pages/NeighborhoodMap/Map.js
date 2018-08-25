import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import PropTypes from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';

const Map = compose(
    withStateHandlers(
        () => ({ error: null }),
      ),
      lifecycle({
        componentDidMount() {
          window.gm_authFailure = () => {
            alert("Attention: There occured an error while loading data from Google maps API. You'll find more info in your console.");
          };
        },
        componentDidCatch(error, errorMsg) {
          this.setState({ error: error});
          alert("An error occured with loading Google Maps: " + error + "Please find more details in the console");
        }
      }),
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
                    onClick={(event) => props.handleInfoWindow(event, court)}
                    animation={
                        window.google.maps.Animation.BOUNCE &&
                        props.clickedCourt.title === court.title ? 1 : 0
                    }
                > 
                {props.clickedCourt && props.clickedCourt.title === court.title && (
                    <InfoWindow onCloseClick={(event) => props.handleInfoWindow(event, court)}>
                        {
                            <div tabIndex={0}>
                                <h3>{court.title}</h3>
                                <p>{court.address}</p>
                                <img src={court.imageUrl} alt={court.title} width="60%"/>
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

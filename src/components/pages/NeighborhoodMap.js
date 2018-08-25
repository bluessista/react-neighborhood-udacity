import React, { Component } from 'react';
import Court from './NeighborhoodMap/Court';
import Container from './NeighborhoodMap/Container';


class NeighborhoodMap extends Component {
  render() {
    const { courts, input, handleInfoWindow, clickedCourt, isBouncing, isOpen } = this.props;

    return (
      <div className="container-fluid">
        <div className="infoBar" style={{display:'block'}}>
          <div className="search">
            <input 
              type="text"
              role="search"
              id="filter-input"
              placeholder="Filter Courts"
              aria-labelledby="input search courts"
              className="input-search"
              value={input}
              onChange={event => this.props.refreshInput(event.target.value)}
            />
          </div>
          <ul>
            {courts
                .filter(court => 
                    court.title
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                )
                .map(court =>
                    <Court
                        key={court.title}
                        title={court.title}
                        type={court.type}
                        address={court.address}
                        handleInfoWindow={handleInfoWindow}
                        court={court}
                        imageUrl={court.imageUrl}
                    />
            )}
          </ul>
          <br/>
        </div>
        <Container 
            className={'map'} 
            role="application"
            courts={courts}
            handleInfoWindow={handleInfoWindow}
            clickedCourt={clickedCourt}
            isBouncing={isBouncing}
            isOpen={isOpen}
            input={input}
        />
      </div>
    )
  }
}

export default NeighborhoodMap;

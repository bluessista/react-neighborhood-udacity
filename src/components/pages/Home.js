import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-fluid">
        <div className="page">
            <h1>Basketball Neighborhood Map</h1>
            <Link to="/NeighborhoodMap"><button>Click here to find the Court to play Basketball</button></Link> 
            <Link to="/Contact"><button>Click here to send more Courts for my Map</button></Link>
            <p>To complete the project you'll have the following tasks:</p>
            <br/>
            <h3>Task 1: Interface Design</h3>
            <div className="table">
                <div className="criteria" style={{}}>
                <h4>CRITERIA</h4>
                <p>Responsiveness</p>
                <p>Usability</p>
                </div>
                <div className="specs">
                <h4>SPECIFICATIONS</h4>
                <p>All application components render on-screen in a responsive manner.</p>
                <p>All application components are usable across modern desktop, tablet, and phone browsers.</p>
                </div>
            </div>
            <br/>
            <h3>Task 2: Application Functionality</h3>
            <div className="table">
            <div className="criteria" style={{}}>
                <h4>CRITERIA</h4>
                <p>Location Filter</p>
                <p>List View</p>
                <p>Map and Markers</p>
            </div>
            <div className="specs">
                <h4>SPECIFICATIONS</h4>
                <p>Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.</p>
                <p>A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
                Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
                List functionality is responsive and runs error free.</p>
                <p>Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.
                Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).
                Any additional custom functionality provided in the app functions error-free.</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Home;

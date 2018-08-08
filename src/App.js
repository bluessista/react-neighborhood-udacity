import React, { Component} from 'react';
import { Route } from 'react-router-dom';

// Font Awesome React Component
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketballBall, faBars, faAnchor } from '@fortawesome/free-solid-svg-icons';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NeighborhoodMap from './components/pages/NeighborhoodMap';

// styling
import './assets/css/default.min.css';

library.add(faBasketballBall, faBars, faAnchor);

class App extends Component {
    state = {
        input: '',
        allCourts: [],
        clickedCourt: {},
        openedInfoWindow: false,
        bounce: false
    }

    // grab the places from a json
    componentDidMount() {
        this.setState({ allCourts: require('./json/CourtMarkers.json')})
    }

    refreshInput = input => {
        this.setState({ input });
    }

    // clear input query for the next search
    clearInput = () => {
        this.setState({ input: '' })
    }

    // if a marker is clicked, the infowindow should open and bounce
    handleInfoWindow = court => {
        if (court === this.state.clickedCourt) {
          this.setState({
            clickedCourt: court,
            openedInfoWindow: !this.state.openedInfoWindow,
            bounce: !this.state.bounce
          });
        } else {
          this.setState({
            clickedCourt: court
          });
        }
    };

    // toggle info bar, if it is available in the DOM
    handleInfoBar = () => {
        var infoBar = document.querySelector('.infoBar');
        if (infoBar){
            if (infoBar.style.display === 'none') {
                infoBar.style.display = 'block';
            } else {
                infoBar.style.display = 'none';
            }
        }
    }
    render() {
        return ( 
            <div className = "App" >
                <Header handleInfoBar = {
                    this.handleInfoBar
                }
                />
                <Route exact path = '/'
                component = {
                    Home
                }
                />
                <Route exact path = '/NeighborhoodMap'
                render = {() =>
                    <NeighborhoodMap 
                        courts = { this.state.allCourts }
                        input = {this.state.input}
                        refreshInput={this.refreshInput}
                        handleInfoWindow={this.handleInfoWindow}
                        clickedCourt={this.state.clickedCourt}
                        bounce={this.state.bounce}
                        openedInfoWindow={this.state.openedInfoWindow}
                    />} / >
                    <Route exact
                    path = '/Contact'
                    component = {
                        Contact
                    }
                    />
                <Footer />
            </div>
            );
        }
    }

    export default App;
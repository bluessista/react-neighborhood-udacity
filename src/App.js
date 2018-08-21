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
        bounce: false,
        flickrProps: {
            api_key: '70aa4bcc6cdc6c38fc32f1f9438a218b',
            method: 'flickr.favorites.getPublicList',
            user_id: '155986398@N02',
            format: 'json',
            nojsoncallback: 1
        }
    }

    // grab the places from a json
    componentDidMount() {
        this.setState({ allCourts: require('./json/CourtMarkers.json')})
        // fetch images for the courts from flickr API
        this.fetchFlickrImages()
    }

    // fetch a list of flickr photos from my flickr account
    fetchFlickrImages = async () => {
        fetch(`https://api.flickr.com/services/rest/?method=${this.state.flickrProps.method}&api_key=${this.state.flickrProps.api_key}&user_id=${this.state.flickrProps.user_id}&format=${this.state.flickrProps.format}&nojsoncallback=${this.state.flickrProps.nojsoncallback}`)
            .then(response => response.json())
            .then(data => {
                for(let i = 0; i < this.state.allCourts.length; i++) {
                    this.state.allCourts[i].imageUrl = `https://farm${data.photos.photo[i].farm}.staticflickr.com/${data.photos.photo[i].server}/${data.photos.photo[i].id}_${data.photos.photo[i].secret}.jpg`;
                }
                this.setState({})
            })
            .catch(err => {
                console.log('Flickr API cannot fetch data. Error: '+ err);
            })
    }

    refreshInput = input => {
        this.setState({ input });
    }

    // clear input query for the next search
    clearInput = () => {
        this.setState({ input: '' })
    }

    // if a marker is clicked, the infowindow should open and bounce
    handleInfoWindow = (event, court) => {
        if (court === this.state.clickedCourt) {
          this.setState({
            clickedCourt: court,
            openedInfoWindow: !this.state.openedInfoWindow
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
                <Route path = '/NeighborhoodMap'
                render = {() =>
                    <NeighborhoodMap 
                        courts={ this.state.allCourts }
                        input={ this.state.input }
                        refreshInput={ this.refreshInput }
                        handleInfoWindow={ this.handleInfoWindow }
                        clickedCourt={ this.state.clickedCourt }
                        bounce={ this.state.bounce }
                        openedInfoWindow={ this.state.openedInfoWindow }
                    />} / >
                    <Route path = '/Contact'
                        component = { Contact }
                    />
                <Footer />
            </div>
            );
        }
    }

    export default App;
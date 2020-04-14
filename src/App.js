import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Place from './components/places/Place';

import PlacesState from './context/places/PlacesState';
import WeatherState from './context/weather/WeatherState';

import './App.css';

function App() {
  return (
    <PlacesState>
      <WeatherState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/:place/:name" component={Place} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </WeatherState>
    </PlacesState>
  );
}

export default App;

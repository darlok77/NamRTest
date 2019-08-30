import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import CompareCities from './components/compareCities'
import WeatherMap from './components/weatherMap'
import Header from './components/header'

/* Class Routes */
class Routes extends Component {
  /**
    * Render.
    * return {String}.
  */
  /*  <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
  */
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/compareCities" component={CompareCities} exact />
              <Route path="/weatherMap" component={WeatherMap} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes

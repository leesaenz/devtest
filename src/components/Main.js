import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import Vehicles from './Vehicles'
import Service from './Service'
import Locations from './Locations'
import Contact from './Contact'
import Settings from './Settings'

const Main = () => (
  <main className="content">
    <Route exact path='/' component={Dashboard}/>
    <Route path='/analytics' component={Analytics}/>
    <Route path='/vehicles' component={Vehicles}/>
    <Route exact path='/service' component={Service}/>
    <Route exact path='/locations' component={Locations}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/settings' component={Settings}/>
  </main>
)

export default Main;

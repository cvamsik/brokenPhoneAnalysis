import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './Login/Login'
import signUp from './Signup/Signup'
import landingPage from './LandingPage/LandingPage'
import Navbarhome from './NavBar/Navbarhome'

import userPage from './UserPage/UserPage'
import adminPage from './AdminPage/AdminPage'
import servicePage from './ServicePage/ServicePage'
import stateServices from './ServicePage/StateServices'
import editservicePage from './ServicePage/EditService'
import viewMyServices from './AdminPage/ViewServices'
import CategoryPage from './CategoryPage/CategoryPage'
import ContactPage from './Contact/Contact'
import Questionaire from './Questionaire/Questionaire'
import EstimatePrice from './EstimatePrice/EstimatePrice'

// Create a Main Component
class Main extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          {/* Render Different Component based on Route */}
          <Route path='/' component={Navbarhome} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/' exact component={landingPage} />
          <Route path='/signUp' component={signUp} />
          <Route path='/userPage' component={userPage} />
          <Route path='/addService' component={adminPage} />
          <Route path='/service/:id' component={servicePage} />
          <Route path='/serviceDetails/:id' component={editservicePage} />
          <Route path='/serviceDelete/:id' component={servicePage} />
          <Route path='/Contact' component={ContactPage} />
          <Route path='/Questionaire' component={Questionaire} />
          <Route path='/estimateprice' component={EstimatePrice} />
          <Route exact path='/stateServices/:id' component={stateServices} />
          <Route path='/viewServices' component={viewMyServices} />
          <Route path='/newCategory' component={CategoryPage} />
        </div>
      </BrowserRouter>
    )
  }
}
// Export The Main Component
export default Main

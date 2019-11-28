import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './Login/Login'
import signUp from './Signup/Signup'
import landingPage from './LandingPage/LandingPage'
import Navbarhome from './NavBar/Navbarhome'

import userPage from './UserPage/UserPage'
import adminPage from './AdminPage/AdminPage'
import ContactPage from './Contact/Contact'
import Questionaire from './Questionaire/Questionaire'
import EstimatePrice from './EstimatePrice/EstimatePrice'
import faq from './FAQ/faq'

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
          <Route path='/signUp' exact component={signUp} />
          <Route path='/userPage' exact component={userPage} />
          <Route path='/addService' exact component={adminPage} />
          <Route path='/Contact' exact component={ContactPage} />
          <Route path='/Questionaire' exact component={Questionaire} />
          <Route path='/estimateprice' exact component={EstimatePrice} />
          <Route path='/faq' exact component={faq} />
      
        </div>
      </BrowserRouter>
    )
  }
}
// Export The Main Component
export default Main
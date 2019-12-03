import React, { Component } from 'react'
import gif3 from '../../images/1253802.gif'
import gif from '../../images/ezgif.com-resize.gif'
import gif4 from '../../images/ezgif.com-crop.gif'
import gif2 from '../../images/SciFi_LoaderBlue.gif'

class About extends Component {
  goToLogin = e => {
    window.location.replace('/Login/')
  }
  render () {
    return (
      <div className='faqcontent'>
        <div className='py-0'>
          <div className='about container' id='about'>
            <div className='row'>
              <div className='px-0 col-md-20 text-center mx-auto'>
                <h3 className='text-primary display-4'>
                  <br />

                  {/* <img src={gif2} height="500px" witdh="1900px"></img> */}
                  {/* <img src={gif4} height="500px" witdh="1000px"></img> */}
                  <br />
                  <b>Phone broken ? No worries we are here </b>
                </h3>
                <button class='btn btn-outline-info' onClick={this.goToLogin}>
                  Estimator
                </button>
                <h2 className='my-3'>- Our Mission -</h2>
                <h1>To provide the best and fair prices to customers</h1>
                <p className='mb-3'>
                  The pain of losing a phone is extreme. Our daily life stops
                  functioning perfectly. We want to provide a clean and fair
                  menthod of phone exchange and recycle for better green.
                </p>{' '}
                <h2 className='text-primary display-6'>
                  <b> What you can do</b>
                </h2>
                <iframe
                  width='650'
                  height='372'
                  src='https://www.youtube.com/embed/__sidP3SY-0'
                />
                <h2 className='text-primary display-6'>
                  <b> What and How are we gonna do!</b>
                </h2>
                <iframe
                  width='650'
                  height='372'
                  src='https://www.youtube.com/embed/p4LnEafIzsk'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About

import React, { Component } from 'react';
import Card from '../Cards/Card'


class Contact extends Component {
  render() {
    return (
    <div>
      <div className="py-5">
        <div className="about container" id="contact">
          <div className="row">
            <div className="px-5 col-md-8 text-center mx-auto">
              <h3 className="text-primary display-4">
                <b>Contact us</b>
              </h3>
              <h4 className="my-3">
              - We are listening all time -
              </h4>
              <h1>Thank you for your interest in Phone2Cash</h1>
              <p className="mb-3">
              We're interested in hearing from you. Look at our options below for contact information
              </p>{" "}
              <h2 className="text-primary display-6">
                <b> email: duvvurisrihari@gmail.com 
                   </b>
              </h2>
              <Card/>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default Contact;

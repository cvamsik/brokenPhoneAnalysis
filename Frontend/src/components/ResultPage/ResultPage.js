import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Route } from "react-router-dom";
import gif2 from "../../images/SciFi_LoaderBlue.gif";
import { Redirect } from 'react-router';



export default class ResultPage extends Component {
  render() {
    
    return (
      <div class='landing'>
       {/* <SlideshowComponent /> */}
        <div> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h4 className="my-3">
        - Your details are -
        </h4>
        <h4 className="my-3">
        - Your brand is - {localStorage.getItem('Brand')}
        </h4><h4 className="my-3">
        - Your model is - {localStorage.getItem('Model')}
        </h4><h4 className="my-3">
        - Your estimated price is - 
        </h4>

        </div>
        
      </div>
    );
  }
}
import React, { Component } from 'react';
import { MDBRow } from "mdbreact";
import './HomeLanding.css';

class HomeLanding extends Component {
    state = {  }
    render() { 
        return (  
            <div className="landinggrid" >
                <MDBRow className="masonry-with-flex" style={{
                    
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  
}}>
        <div >
          sdfghjkl
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
        <div>
          5
        </div>
        <div>
          6
        </div>
        <div>
          7
        </div>

      </MDBRow>


            </div>


        );
    }
}
 
export default HomeLanding;
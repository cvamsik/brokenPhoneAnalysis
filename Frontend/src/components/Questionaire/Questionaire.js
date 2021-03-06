import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'
import { Redirect } from 'react-router'

class Questionnaire extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Qs: [
        'Does the device power on ?',
        'Does the screen fully light up ?',
        'Are there cracks anywhere ?'
      ],
      Q0: 'A',
      Q1: 'B',
      Q2: 'C'
    }
    this.handle = this.handle.bind(this)
  }
  handle = e => {
    e.preventDefault()
    console.log('hi')
    console.log(e.target.value + e.target.id)
    let QNo = e.target.id
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value })
  }
  onnext =e =>{
    e.preventDefault()
    localStorage.setItem('Q0',this.state.Q0)
    localStorage.setItem('Q1',this.state.Q1)
    localStorage.setItem('Q2',this.state.Q2)
    this.props.history.push('/uploadpicture')
  }
  render () {
    let Questions = this.state.Qs.map((Q, index) => (
      <div class='container' align='center' key={index + 1}>
        <div class='card w-75'>
          <div class='card-body'>
            <h5 class='card-title'>{Q}</h5>

            <div class='btn-group' data-toggle='buttons'>
              <label class='btn btn-outline-info active '>
                <input
                  type='radio'
                  name='options'
                  id={'Q' + index}
                  value='yes'
                  autoComplete='off'
                  checked
                  onClick={this.handle}
                />
                Yes
              </label>
              <label class='btn btn-outline-info'>
                <input
                  type='radio'
                  name='options'
                  id={'Q' + index}
                  value='no'
                  autoComplete='off'
                  onClick={this.handle}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <br/>   

      </div>
      
    ))
    return (
      <div className="estimatecontent">
      <div class='container' align='center'>
        <h3 class="display-4">Few Answers Please</h3>
        <br/>
        <p>{Questions}</p>
        <button className='btn btn-outline-info' onClick={this.onnext}> Get Estimate</button>
        {this.state.Q0}
        {this.state.Q1}
        {this.state.Q2}
      </div>
      </div>
    )
  }
}
export default Questionnaire

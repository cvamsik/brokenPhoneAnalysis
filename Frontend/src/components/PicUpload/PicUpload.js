import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'
import { Redirect } from 'react-router'
import { ROOT_URL } from '../../URLSettings'
import { FLASK_URL } from '../../URLSettings'
import logo from './upload.png'

class PicUpload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFile: null,
      selectedImg: null
    }
  }
  onChangeHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedImg: URL.createObjectURL(event.target.files[0])
    })
    this.setState({ selectedFile: event.target.files[0], loaded: 0 })
  }
  //   uploadImage = e => {
  //     e.preventDefault()
  //     const formData = new FormData()
  //     let email = sessionStorage.getItem('email')
  //     formData.append('myImage', this.state.file, email)
  //     const config = {
  //       headers: {
  //         'content-type': 'multipart/form-data'
  //       }
  //     }
  //     axios
  //       .post(`${ROOT_URL}/users/uploadpicture`, formData, config)
  //       .then(response => {
  //         let data = { email: email }
  //         axios.post(`${ROOT_URL}/userimage`, data).then(response => {
  //           // update the state with the response data
  //           console.log('Axios get:', response.data)
  //           this.setState({
  //             img: 'data:image/png;base64, ' + response.data
  //           })
  //         })
  //         console.log('The file is successfully uploaded')
  //       })
  //       .catch(error => {})
  //     // prevent page from refresh
  //   }

  onClickHandler = event => {
    event.preventDefault()
    const data = new FormData()
    // this.setState({selectedImg: })

    data.append('file', this.state.selectedFile)
    console.log(...data)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    
    axios.post(`${ROOT_URL}/users/uploadpicture`, data, config).then(res => {
      console.log('Response' + JSON.stringify(res))
    })
  }

  hitFlask = event => {
    event.preventDefault()
    const data = new FormData()
    // this.setState({
    //   selectedImg: URL.createObjectURL(event.target.files[0])
    // })
    data.append('file', this.state.selectedFile)
    console.log(...data)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    // axios.defaults.withCredentials = true
    axios.post(`${FLASK_URL}/`, data).then(res => {
      console.log('Response' + JSON.stringify(res.data))
      if(res.data[0]){
        localStorage.setItem('ModelValue',res.data[0])
        this.props.history.push('/loading')
      }
      else{
        window.alert("Image Invalid")
      }
    })
    
  }

  render () {
    return (
      <div
        class='container-fluid'
        align='center'
        style={{ marginTop: '100px' }}
      >
        <table>
          <td>
            <div class='container' style={{ marginTop: '100px' }}>
              <div class='row'>
                <div class='col-md-6'>
                  <form
                    align='center'
                    onSubmit={this.hitFlask}
                    enctype='multipart/form-data'
                  >
                    {this.state.selectedImg ? (
                      <div class='form-group'>
                        <img
                          class='preview-img'
                          style={{ borderRadius: '20px' }}
                          src={this.state.selectedImg}
                          alt='Preview Image'
                          width='200'
                          height='200'
                        />
                      </div>
                    ) : (
                      <div class='form-group'>
                        <img
                          class='preview-img'
                          src={logo}
                          alt='Preview Image'
                          width='200'
                          height='200'
                        />
                      </div>
                    )}
                    <input
                      class='form-control btn  btn-outline-info'
                      type='file'
                      onChange={this.onChangeHandler}
                      name='file'
                    />
                    <br />
                    <br />
                    {this.state.selectedFile ? (
                      <div class='form-group'>
                        <input
                          type='submit'
                          value='Upload'
                          className='form-control btn  btn-info'
                        />
                      </div>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class='container' style={{ marginTop: '100px' }}>
              <p>Model details</p>
              <p>Brand: {localStorage.getItem('Brand')}</p>
              <p>Model: {localStorage.getItem('Model')}</p>
            </div>
          </td>
        </table>
      </div>
    )
  }
}
export default PicUpload


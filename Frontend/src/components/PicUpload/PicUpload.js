import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'
import { Redirect } from 'react-router'
import { ROOT_URL } from '../../URLSettings'
import { FLASK_URL } from '../../URLSettings'

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
    this.setState({
      selectedImg: URL.createObjectURL(event.target.files[0])
    })
    data.append('file', this.state.selectedFile)
    console.log(...data)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    axios.defaults.withCredentials = true
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
    })
  }

  render () {
    return (
      <div
        class='container-fluid'
        align='center'
        style={{ marginTop: '100px' }}
      >
        <div class='container' align='center' style={{ marginTop: '100px' }}>
          <div class='row'>
            <div class='col-md-6'>
              <form onSubmit={this.hitFlask} enctype='multipart/form-data'>
                <input
                  type='file'
                  onChange={this.onChangeHandler}
                  name='file'
                />
                <input type='submit' value='Upload' />
              </form>
              {/* <form
                onSubmit={this.onClickHandler}
                enctype='multipart/form-data'
              >
                <div class='form-group files'>
                  <label>Upload Your File </label>
                  <input
                    type='file'
                    name='file'
                    class='form-control btn  btn-outline-info'
                    multiple=''
                    onChange={this.onChangeHandler}
                  />
                </div>
                {this.state.selectedImg ? (
                  <div class='form-group'>
                    <img
                      class='preview-img'
                      // src='http://simpleicon.com/wp-content/uploads/account.png'
                      src={this.state.selectedImg}
                      alt='Preview Image'
                      width='200'
                      height='200'
                    />
                  </div>
                ) : null}
                {this.state.selectedFile ? (
                  <div class='form-group'>
                    <button
                      type='submit'
                      className='form-control btn  btn-info'
                    >
                      Upload
                    </button>
                  </div>
                ) : null}
              </form> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PicUpload

import React, { Component } from 'react'
import './backgroundTab.css'
import { appendScript } from './background.js'

class backgroundtab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'home'
    }

    // ChangeHandler for NavigationBar
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount () {
    appendScript('./background.js')
  }

  changeHandler = event => {
    this.setState({ status: event.target.name })
    console.log('Status => ', event.target.name)
  }
  render () {
    return (
      <div className='container'>
        <div className='row fakeDiv'></div>
        <div className='dataHolder'>
          <div className='socialMediaHolder'>
            <div className='topBackGround'></div>
            <div className='profileImage'>
              <img src='images/mine.jpg' alt='mine' height='10%' width='60%' />
            </div>
            <div className='row socializeRow'>
              <div className='socialization'>
                I <b>socialize</b> On
              </div>
            </div>
            <div className='row socializationLinks'>
              <ul id='socialList'>
                <li>
                  <a
                    href='https://www.github.com/jatinkmr'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-github-square'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/jatinkumarkamboj/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:kumar.jatin873@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-google-plus'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/jatinkrkamboj'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/ijatinkrkamb0j/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/jatin.kamboj.37'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa fa-facebook-square'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='contentHolder'>
            <div className='contentHeading bg-dark'>
              <ul id='headingList' className='nav'>
                <li className='nav-item' onClick={this.changeHandler}>
                  <button
                    type='button'
                    className='btn btn-link active'
                    name='home'
                  >
                    <span>
                      <i className='fa fa-home'></i>
                    </span>
                    <br />
                    Home
                  </button>
                </li>
                <li className='nav-item' onClick={this.changeHandler}>
                  <button
                    type='button'
                    className='btn btn-link'
                    name='profile'
                  >
                    <span>
                      <i className='fa fa-user' aria-hidden='true'></i>
                    </span>
                    <br />
                  Profile
                  </button>
                </li>
                <li className='nav-item' onClick={this.changeHandler}>
                  <button
                    type='button'
                    className='btn btn-link'
                    name='contact'
                  >
                    <span>
                      <i className='fa fa-envelope' aria-hidden='true'></i>
                    </span>
                    <br />
                  Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className='contentData'>
              {this.state.status === 'home' ? 'Home' : null}
              {this.state.status === 'profile' ? 'profile' : null}
              {this.state.status === 'contact' ? 'Contact' : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default backgroundtab

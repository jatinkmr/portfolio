import React, { Component } from 'react'
import './backgroundTab.css'

class backgroundtab extends Component {
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
              <ul>
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
            contentHolder
          </div>
        </div>
      </div>
    )
  }
}

export default backgroundtab

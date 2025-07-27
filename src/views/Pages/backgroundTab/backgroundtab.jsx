import React, { Component } from 'react'
import './backgroundTab.css'
import HomeTab from '../homeTab/hometab.jsx'
import ProfileTab from '../profileTab/profiletab.jsx'
import ContactTab from '../contactUs/contact.jsx'
import AboutTab from '../aboutTab/aboutTab.jsx'

// class backgroundtab
class backgroundtab extends Component {
  state = {
    status: 'home'
  };

  // ChangeHandler function for changing the tab
  changeHandler = event => {
    this.setState({ status: event.target.name })
    // console.log('Status => ', event.target.name)
  }

  // render function which render's all the content
  render() {
    const { status } = this.state;
    return (
      <div className='container'>
        <div className='col-md-12'>
          <div className='row fakeDiv'></div>
          <div className='row dataHolder'>
            <div className='socialMediaHolder'>
              <div className='topBackGround'></div>
              <div className='profileImage'>
                <img src='images/mine.jpg' alt='mine' height='10%' width='60%' data-toggle='tooltip' title='Jatin Kumar "Kamboj"' />
              </div>
              <div className='row socializeRow'>
                {/* <div className='socialization mx-auto text-center'>
                  I <strong>socialize</strong> On
              </div> */}
                <p className='a mx-auto text-center'>
                  Software Engineer
                </p>
              </div>
              <div className='row socializationLinks justify-content-center'>
                <ul id='socialList'>
                  <li>
                    <a
                      href='https://www.github.com/jatinkmr'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip' title='GitHub'
                    >
                      <i className='fab fa-github'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/jatinkumarkamboj/'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip' title='LinkedIn'
                    >
                      <i className='fab fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='mailto:kumar.jatin873@gmail.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip' title='Google(gMail)'
                    >
                      <i class="fa-brands fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/jatinkrkamboj'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip' title='Twitter'
                    >
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/ijatinkrkamb0j/'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip' title='InstaGram'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/jatin.kamboj.37'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-toggle='tooltip' title='FaceBook'
                    >
                      <i className='fab fa-facebook-square'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='contentHolder'>
              <div className='contentHeading bg-dark'>
                <ul id='headingList' className='nav justify-content-center'>
                  <li className='nav-item' onClick={this.changeHandler}>
                    <button
                      type='button'
                      className={`btn btn-link px-1 ${status === "home" ? "active" : ""}`}
                      name='home'
                      data-toggle='tooltip' title='Home'
                    >
                      Home
                    </button>
                  </li>
                  <li className='nav-item' onClick={this.changeHandler}>
                    <button type='button' className={`btn btn-link px-1 ${status === "profile" ? "active" : ""}`} name='profile' data-toggle='tooltip' title='Profile'>
                      Profile
                    </button>
                  </li>
                  <li className='nav-item' onClick={this.changeHandler}>
                    <button type='button' className={`btn btn-link px-1 ${status === "about" ? "active" : ""}`} name='about' data-toggle='tooltip' title='About Me'>
                      About
                    </button>
                  </li>
                  <li className='nav-item' onClick={this.changeHandler}>
                    <button type='button' className={`btn btn-link px-1 ${status === "contact" ? "active" : ""}`} name='contact' data-toggle='tooltip' title='Contact'>
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              <div className='contentData'>
                {status === 'home' ? <HomeTab /> : null}
                {status === 'profile' ? <ProfileTab /> : null}
                {status === 'about' ? <AboutTab /> : null}
                {status === 'contact' ? <ContactTab /> : null}
              </div>
            </div>
          </div>
          <div className='row footerContent'>
            <p className='text-right'>Copyright &copy; 2020 Jatin Kumar "Kamboj"</p>
          </div>
        </div>
      </div>
    )
  }
}

// export backgroundtab class
export default backgroundtab

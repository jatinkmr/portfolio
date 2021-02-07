import React, { Component } from 'react'
import './hometab.css'

//Class Hometab
class HomeTab extends Component {
  render () {
    return (
      <div className='row mainDiv fade-in'>
        <div className='col-md-12'>
          <div className='intro'>
            <h1>
              <div className='hello'>
                <span className='a b'>H</span>
                <span className='a'>e</span>
                <span className='a'>y</span>
              &nbsp;
              <span className='a b'>T</span>
                <span className='a'>h</span>
                <span className='a'>e</span>
                <span className='a'>r</span>
                <span className='a'>e</span>
                <span className='a'>.</span>
                <span className='a'>.</span>
                <span className='a'>.</span>
                <span className='a'>!</span>
                <span className='a'>!</span>
              </div>
              <div className='myName'>
                <span className='a b'>I</span>
                <span className='a'>'</span>
                <span className='a'>m</span>
              &nbsp;
              <span className='jImage'>
                  <img src='images/j.png' alt='J' />
                </span>
                <span className='a b'>a</span>
                <span className='a b'>t</span>
                <span className='a b'>i</span>
                <span className='a b'>n</span>
              &nbsp;
              <span className='a b'>K</span>
                <span className='a b'>u</span>
                <span className='a b'>m</span>
                <span className='a b'>a</span>
                <span className='a b'>r</span>
                <span className='a'>,</span>
              </div>
              <div className='developer'>
                <span className='a b'>W</span>
                <span className='a'>e</span>
                <span className='a'>b</span>
              &nbsp; &nbsp;
              <span className='a b'>D</span>
                <span className='a'>e</span>
                <span className='a'>v</span>
                <span className='a'>e</span>
                <span className='a'>l</span>
                <span className='a'>0</span>
                <span className='a'>p</span>
                <span className='a'>e</span>
                <span className='a'>r</span>
                <span className='a'>!</span>
              </div>
            </h1>
            <div className='desig'>
              <p>
                <span className='a'>MERN Stack </span>
              &nbsp;
              <span className='a b'>/</span>
              &nbsp;
              <span className='a'>FULL Stack</span>
              </p>
            </div>
            <div className='coffee'>
              P.S.{' '}
              <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="I">
                <span className='a iLove'>
                  <i className='fa fa-italic' aria-hidden='true'></i>
                </span>{' '}
              </span>
              <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Love">
                <span className='a iLove'>
                  <i className='fa fa-heart' aria-hidden='true'></i>
                </span>{' '}
              </span>
              <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Coffee">
                <span className='a coffeeColor'>
                  <i className='fa fa-coffee' aria-hidden='true'></i>
                </span>
              </span>
            </div>
          </div>
          <div className='resumeHolder'>
            <div className='resumeHeader'>
              <div className='resumeHeaderContent'>
                Some <b>Other</b> points
            </div>
            </div>
            <div className='resumeDiv'>
              <a
                href={process.env.PUBLIC_URL + '/resume/resume.pdf'}
                download='resume.pdf'
              >
                <div className='resumeButton'>
                  <i className='fa fa-file-pdf-o'></i>&nbsp; &nbsp;
                Resume&nbsp;[.pdf]
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export class HomeTab
export default HomeTab

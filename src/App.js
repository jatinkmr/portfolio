import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import BackgroundTab from './views/Pages/backgroundTab/backgroundtab.jsx'

const loading = () => (
  <div className='animated fadeIn pt-3 text-center'>Loading...</div>
)

class App extends Component {
  render () {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              path='/'
              name='Background'
              render={props => <BackgroundTab {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App

import React, { Component } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import BackgroundTab from './views/Pages/backgroundTab/backgroundtab.jsx'

const loading = () => (
  <div className='animated fadeIn pt-3 text-center'>Loading...</div>
)

class App extends Component {
  render () {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Routes>
            <Route
              path='/'
              element={<BackgroundTab />}
            />
          </Routes>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App

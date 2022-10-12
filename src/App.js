import React from 'react'

import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { Test } from './pages/test'

function App() {
  return (
    <div>
      {/* <AppHeader /> */}
      <Test />
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </main>
      {/* <AppFooter /> */}
    </div>
  )
}

export default App;
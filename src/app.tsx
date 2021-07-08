import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Example from '@/pages/Example/index'
import MainLayout from './layout/MainLayout'

export default function App() {
  return (
    <Router>
      <Route path='/' component={MainLayout} exact />
      <Route path='/example' component={Example} exact/>
    </Router>
  )
}

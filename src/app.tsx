import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TakePhoto from '@/pages/TakePhoto/index'
import MainLayout from './layout/MainLayout'
import Vconsole from 'vconsole';
import './global.scss';

export default function App() {

  useEffect(() => {
    const ENV_TYPE = process.env.REACT_APP || 'dev';
    (ENV_TYPE !== 'prod') && new Vconsole()
  }, [])

  return (
    <Router>
      <Route path='/' component={MainLayout} exact />
      <Route path='/TakePhoto' component={TakePhoto} exact/>
    </Router>
  )
}

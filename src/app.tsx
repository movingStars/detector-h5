import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from '@/pages/Home/index'
import Mine from '@/pages/Mine/index'
import MainLayout from './layout/MainLayout'

export default function App() {
  return (
    <Router>
      <Route path='/'>
        {/* MainLayout 中包含了 antd-mobile tabbar */}
        {/* 默认跳转到 首页 */}
        <Redirect to='/home' />
        <Route path='/home' render={(props) => <MainLayout {...props} children={<Home />}></MainLayout>} />
        <Route path='/mine' render={(props) => <MainLayout {...props} children={<Mine />}></MainLayout>} />
      </Route>
    </Router>
  )
}

import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import Home from '@/pages/Home/index'
import Mine from '@/pages/Mine/index'
import './MainLayout.scss';

const MainLayout = ({children}: any) => {
  const [selected, setSelected] = useState('home');

  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor='#666666'
        tintColor='#666666'
        barTintColor='white'
      >
        <TabBar.Item
          title='首页'
          key='home'
          icon={<div className='home-icon' />}
          selectedIcon={<div className='home-selected-icon' />}
          selected={selected === 'home'}
          onPress={() => {
            setSelected('home');
          }}
        >
          <Home />
        </TabBar.Item>
        <TabBar.Item
          title='个人中心'
          key='mine'
          icon={<div className='mine-icon' />}
          selectedIcon={<div className='mine-selected-icon' />}
          selected={selected === 'mine'}
          onPress={() => {
            setSelected('mine');
          }}
        >
          <Mine />
        </TabBar.Item>
      </TabBar>
    </div>
  )
}

export default MainLayout;

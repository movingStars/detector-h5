import React from 'react';
import { TabBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = ({children}: any) => {
  const history = useHistory();
  const pathname = history.location.pathname

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
          selected={pathname === '/home'}
          onPress={() => {
            history.push('/home')
          }}
        >
          { pathname === '/home' ? children : null }
        </TabBar.Item>
        <TabBar.Item
          title='个人中心'
          key='mine'
          icon={<div className='mine-icon' />}
          selectedIcon={<div className='mine-selected-icon' />}
          selected={pathname === '/mine'}
          onPress={() => {
            history.push('/mine')
          }}
        >
          { pathname === '/mine' ? children : null }
        </TabBar.Item>
      </TabBar>
    </div>
  )
}

export default MainLayout;

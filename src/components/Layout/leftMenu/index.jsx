import React from 'react';
import { Menu, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './index.less';

const { SubMenu } = Menu;

const LeftMenu = ({data}) => {



  return (
    <div className={styles.leftWrap}>
      <div className={styles.leftTitle}>Test</div>
      <div>
        {
          data.length > 0 ? 
          (
            <Menu
              theme="light"
              defaultSelectedKeys={data[0].path}
              defaultOpenKeys={data[0].path}
              selectedKeys={window.location.pathname}
              mode="inline"
            >
              {
                data.map(item => (
                  item.showMenu ?
                    item.children ?
                    <SubMenu key={item.path} title={
                      <span>
                        <span>{item.name}</span>
                      </span>
                    }>
                      {}
                    </SubMenu>
                    :
                    <Menu.Item key={item.path}>
                       <NavLink to={item.path} />
                      {item.name}
                    </Menu.Item>
                  :
                  ''
                ))
              }
            </Menu>
          )
          :
          <Spin />
        }
      </div>
    </div>
  )
}

export default LeftMenu
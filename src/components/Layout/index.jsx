import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import routerConfig from '@/routers/index';
import styles from './index.less';
import LeftMenu from './leftMenu';

const MenuData = [
  {
    path: '/function/demo1',
    name: 'demo1',
    showMenu: true
  },
  {
    path: '/function/home',
    name: 'home',
    showMenu: true
  }
]

const Basic = props => {
  
  return (
    <div className={styles.globalWrap}>
      <Layout className={styles.layout}>
        <Sider>
          <LeftMenu data={MenuData} />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content className={styles.content}>
            {props.children}
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>
  )
}
export default Basic;
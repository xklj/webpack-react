import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import routerConfig from '@/routers/index';

const Basic = props => {
  
  return (
    <div>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ minHeight: '80vh'}}>
            {props.children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
export default Basic;
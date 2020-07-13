import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import styles from './index.less';
import history from '../../utils/history';
import ScrollTop from '@/components/ScrollTop/index.jsx';


class Login extends Component {
  render () {
    return (
      <div className={styles.loginWrap}>
        <ScrollTop />
        <Row>
          <Col>Job</Col>
        </Row>
        <Row justify='center'>
          <Col span={12}>
            <Form
              name='login'
              layout='vertical'
              // onFinish={onFinish}
            >
              <Form.Item
                label='username'
                name='username'
                rules={[
                  {
                    require: true,
                    message: 'Please input your username!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='password'
                name='password'
                rules={[
                  {
                    require: true,
                    message: 'Please input your password!'
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Row justify='center'>
                <Col>
                  <Button type="primary" onClick={() => {
                    history.push('./demo1')
                  }}>demo1</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Login;
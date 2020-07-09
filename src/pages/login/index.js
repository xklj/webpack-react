import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import styles from './index.less';
import history from '../../utils/history'



class Login extends Component {


  render () {
    return (
      <div className={styles.loginWrap}>
        <Row>
          <Col>Job</Col>
        </Row>
        <Form
          name='login'
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
        </Form>
        <Button type="primary" onClick={() => {
          history.push('./demo1')
        }}>demo1</Button>
      </div>
    )
  }
}
export default Login;
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import history from '@/utils/history';
import styles from './index.less';



function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

function mapStateToProps(state) {
  return { 
    login: state.login
  }
}





const Login = props => {
  // const [form] = Form.useForm();
  const [success, setSuccess ] = useState(false);

  const onFinish = value => {
    props.dispatch({
      type: 'login/fetchLogin',
      payload: value,

    })
  }

  useEffect(() => {
    setSuccess(props.login.success);
    if(success) {
     history.push('/function/demo1')
    }
  })



  return (
    <div className={styles.loginWrap}>
      <Row justify='center'>
        <Col className={styles.title}>Private</Col>
      </Row>
      <Row justify='center'>
        <Col span={8} className={styles.loginBox}>
          <Form
            name='login'
            onFinish={onFinish}
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
                <Button type="primary" htmlType='submit'>Login</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
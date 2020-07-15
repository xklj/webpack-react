import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import styles from './index.less';
import history from '../../utils/history';



// const layout = {
//   labelCol: { span: 3},
//   wrapperCol: {span: 21}
// }

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


class Login extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'login/fetchLogin',
      payload: {a:1}
    })
  }
  render () {
    return (
      <div className={styles.loginWrap}>
        <Row justify='center'>
          <Col className={styles.title}>Private</Col>
        </Row>
        <Row justify='center'>
          <Col span={8} className={styles.loginBox}>
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
              <Row justify='center'>
                <Col>
                  <Button type="primary" onClick={() => {
                    history.push('./demo1')
                  }}>Login</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
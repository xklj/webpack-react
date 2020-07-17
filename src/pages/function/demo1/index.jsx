import React, { Component } from 'react';
import { Button } from 'antd';
import history from '@/utils/history';
class Demo1 extends Component {
  render () {
    return (
      <div>
        <Button onClick={() => {history.push('/function/home')}}>demo1</Button>
      </div>
    )
  }
}
export default Demo1;
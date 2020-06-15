import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './index.css';
import App from './pages/Layout/index';

class Main extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <App />
      </div>
    )
  }
}
ReactDom.render(<Main />, document.getElementById('app'));

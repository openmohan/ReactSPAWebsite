import React from 'react';
import styles from './app.css';
import LayoutPage from './components/LayoutPage.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
          <LayoutPage/>
      </div>
    )
  }
}

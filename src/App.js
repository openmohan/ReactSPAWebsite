import React from 'react';
import styles from './app.css';
import LayoutPage from './components/LayoutPage.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="height100">
      {this.props.children && React.cloneElement(this.props.children,{data: this.props , dispatch:this.props.dispatch  }) }
      </div>    
        </div>
    )
  }
}

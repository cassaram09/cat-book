import React, { PropTypes, Component } from 'react';
import Header from './common/header';

// the top level component that will hold our entire application. 
class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;  
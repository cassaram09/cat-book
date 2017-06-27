import React, {Component, PropTypes}  from 'react'
import {connect} from 'react-redux';  

class CatPage extends Component {
  render(){
    return(
      <div>
        I'm a cat page.
      </div>
    )
  }
};

CatPage.propTypes = {
  cat: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    
  }
}

export default connect(mapStateToProps)(CatPage);
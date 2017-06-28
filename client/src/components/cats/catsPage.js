import React, {Component, PropTypes}  from 'react'
import {connect} from 'react-redux';  
import * as catActions from '../../actions/catActions';
import CatList from './catList';
import CatPage from './catPage';
import { Link } from 'react-router'

// container component that stores a list of the cats.
// this component renders both the cat list as well as
// the show page for the selected cat. 
// this component gets cats from the redux store

class CatsPage extends Component {
  render(){
    return(
      <div className="col-md-12">
        <h1>
          Cats
          <Link to={'/cats/new'} className='btn btn-primary'>
            +cat
          </Link>
        </h1>
        <div className="col-md-4">
          <CatList cats={this.props.cats} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    )
  }
};

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    cats: state.cats
  }
}

export default connect(mapStateToProps)(CatsPage);
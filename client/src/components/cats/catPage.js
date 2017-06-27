import React, {Component, PropTypes}  from 'react'
import {connect} from 'react-redux';  
import HobbyList from './hobbyList'; 

class CatPage extends Component {
  render(){
    return(
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.cat.name}</h1>
        <p>breed: {this.props.cat.breed}</p>
        <p>weight: {this.props.cat.weight}</p>
        <p>temperament: {this.props.cat.temperament}</p>
        <HobbyList hobbies={this.props.catHobbies} />
      </div>
    )
  }
};

CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired
};

function collectCatHobbies(hobbies, cat) {  
  debugger
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      return hobby;
    }
  })
  return selected.filter(el => el != undefined)
}

function mapStateToProps(state, ownProps) { 
debugger 
  let cat = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
  let catHobbies = []
  const catId = ownProps.params.id;
  if (state.cats.length > 0 && state.hobbies > 0) {
    cat = Object.assign({}, state.cats.find(cat => cat.id == catId))
    if (cat.hobby_ids.length > 0) {
      catHobbies = collectCatHobbies(state.hobbies, cat)
    }
  }
  return {cat: cat, catHobbies: catHobbies};
};

export default connect(mapStateToProps)(CatPage);
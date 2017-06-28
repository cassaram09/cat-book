// container component that stores the cat show details and create/edit form

import React, {Component, PropTypes}  from 'react'
import {connect} from 'react-redux';  
import HobbyList from './hobbyList'; 
import {bindActionCreators} from 'redux'; 
import * as catActions from '../../actions/catActions';
import CatForm from './catForm'

class CatPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      cat: this.props.cat,
      catHobbies: this.props.catHobbies,
      checkBoxHobbies: this.props.checkBoxHobbies
    }

    // toggle edit form
    this.toggleEdit = () => {
      this.setState({isEditing: !this.state.isEditing})
    }

    // update cat attributes
    this.updateCatState = (event) => {
      const field = event.target.name;
      const cat = this.state.cat;
      cat[field] = event.target.value;
      return this.setState({cat: cat});
    }

    //update checkboxes for cat hobbies
    this.updateCatHobbies = (event) => {
      const cat = this.state.cat;
      const hobbyId = event.target.value;
      const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id == hobbyId)[0];
      const checked = !hobby.checked;
      hobby['checked'] = !hobby.checked;
      if (checked) {
        cat.hobby_ids.push(hobby.id);
      } else {  
        cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
      }
      this.setState({cat: cat});
    }

    this.saveCat = (event) => {
      event.preventDefault();
      this.props.actions.updateCat(this.state.cat);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: nextProps.cat});
    }
    if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
      this.setState({catHobbies: nextProps.catHobbies, checkBoxHobbies: nextProps.checkBoxHobbies});
    }
  }

  render(){
    // return the cat edit form or cat show page
    if( this.state.isEditing ){
      return (
        <div className="col-md-8 col-md-offset-2">
          <h1>Edit {this.props.cat.name} <button onClick={this.toggleEdit}>edit</button></h1>
          <CatForm 
          cat={this.state.cat} 
          hobbies={this.state.checkBoxHobbies}
          onSave={this.saveCat} 
          onChange={this.updateCatState} 
          onHobbyChange={this.updateCatHobbies}/>
        </div>
      )
    }
    return(
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.cat.name}</h1>
        <p>breed: {this.state.cat.breed}</p>
        <p>weight: {this.state.cat.weight}</p>
        <p>temperament: {this.state.cat.temperament}</p>
        <HobbyList hobbies={this.state.catHobbies} />
        <button onClick={this.toggleEdit} 
          className="btn btn-default">edit</button>
      </div>
    )
  }
};


// Component Validations
CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired,
  checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// returns all hobbies with add attribute of checked
// checked is true if hobby belongs to cat; else false
function hobbiesForCheckBoxes(hobbies, cat=null) {  
  debugger
  return hobbies.map(hobby => {
    if (cat && cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      hobby['checked'] = true;
    } else {
      hobby['checked'] = false;
    }
    return hobby;
  });
}

// collect all of the cat's hobbies 
// use the cats hobby_ids array to map and ilter from hobbies array
function collectCatHobbies(hobbies, cat) {  
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      return hobby;
    }
  })
  return selected.filter(el => el != undefined)
}


function mapStateToProps(state, ownProps) { 
  const stateHobbies = Object.assign([], state.hobbies)
  let checkBoxHobbies = [];
  let cat = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []};
  let catHobbies = []
  const catId = ownProps.params.id;
  
  if (catId && state.cats.length > 0 && state.hobbies.length > 0) {
    cat = state.cats.filter(cat => cat.id == catId)[0]
    if (cat.hobby_ids.length > 0) {
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
      catHobbies = collectCatHobbies(stateHobbies, cat);
    } else {
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies)
    }
  } 
    return {cat: cat, checkBoxHobbies: checkBoxHobbies, catHobbies: catHobbies};
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CatPage);
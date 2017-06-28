// container component that stores the cat show details and create/edit form

import React, {Component, PropTypes}  from 'react'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux'; 
import * as catActions from '../../actions/catActions';
import CatForm from './catForm'

class NewCatPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      cat: {
        name: '', 
        breed: '', 
        weight: '', 
        temperament: '', 
        hobby_ids: []
      },
      saving: false
    }

    this.redirect= () =>{

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
      const hobby = this.props.checkBoxHobbies.filter(hobby => hobby.id == hobbyId)[0];
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
      this.props.actions.createCat(this.state.cat);
    }
  }

  render(){
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>New Cat</h1>
        <CatForm 
        cat={this.state.cat} 
        hobbies={this.props.checkBoxHobbies}
        onSave={this.saveCat} 
        onChange={this.updateCatState} 
        onHobbyChange={this.updateCatHobbies}/>
      </div>
    )
  }
};


// Component Validations
NewCatPage.propTypes = {
  checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// returns all hobbies with add attribute of checked
// checked is true if hobby belongs to cat; else false
function hobbiesForCheckBoxes(hobbies, cat=null) {  
  return hobbies.map(hobby => {
    if (cat && cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      hobby['checked'] = true;
    } else {
      hobby['checked'] = false;
    }
    return hobby;
  });
}

function mapStateToProps(state, ownProps) {  
  let checkBoxHobbies = [];
  if (state.hobbies.length > 0) {
    checkBoxHobbies = hobbiesForCheckBoxes(Object.assign([], state.hobbies));
  }

  return {
    checkBoxHobbies: checkBoxHobbies
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCatPage);  

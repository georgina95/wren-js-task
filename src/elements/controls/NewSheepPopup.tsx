import * as React from 'react';
import { Field } from '../field';
import { Sheep } from '../sheep';
import { Gender } from '../../base';

type popupState = { name: string, gender: Gender };
type popupProps = { field: Field };

export class NewSheepPopup extends React.Component<popupProps, popupState> {

  constructor(props: any) {
    super(props);
    this.state = {name: '', gender: Gender.Male};

    this.onNameChange = this.onNameChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onPressAdd = this.onPressAdd.bind(this);
  }

  render() {
    return (
      <div className="modal fade" id="newSheepPopup" aria-labelledby="newSheepModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            
            <div className="modal-header">
              <h5 className="modal-title" id="newSheepModalLabel">Add new sheep</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>


            <div className="modal-body">
              <form id='newSheepForm'>
                <label >Name:</label>
                <input type="text" id="fname" name="fname" 
                  value={this.state.name} onChange={this.onNameChange}/>
              </form>  
              <label >Gender:</label>
              <select id="gender" name="genderlist" form="newSheepForm"
                value={this.state.gender} onChange={this.onGenderChange}>
                {  Object.values(Gender).map(value => 
                    (
                      <option
                        aria-selected="true"
                        key={value}
                        value={value} >
                        {value}
                    </option>
                    )
                  )
                }
              </select>
               
            </div>


            <div className="modal-footer">
              <button type="button" className="btn" onClick={this.onClose}>Close</button>
              <button type="button" className="btn" onClick={this.onPressAdd} >Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onNameChange(event: any) {
    this.setState({name: event.target.value});
  }

  onGenderChange(event: any) {
    this.setState({gender: event.target.value});
  }

  onClose() {
    let popup = document.getElementById("newSheepPopup");
    if(popup) {
        popup.style.opacity = '0';
        popup.style.display = 'none';
    }
  }

  onPressAdd() {
    let nameField = document.getElementById('fname');
    let genderField = document.getElementById('gender');
    if(nameField && genderField) {

      let isAllValid = this.validateFields(nameField, genderField);
      if(isAllValid) {
        this.submitSheep();
      }
    }

    this.onClose();
  }

  validateFields(nameField: HTMLElement, genderField: HTMLElement) {
    let isAllValid = true;

    if(!this.state.name || !this.isNameUnique(this.state.name)) {
      nameField.classList.add("invalid");
      isAllValid = false;
    }
    else {
      nameField.classList.remove("invalid");
    }

    if(!this.state.gender ) {
      genderField.classList.add("invalid");
      isAllValid = false;
    }
    else {
      genderField.classList.remove("invalid");
    }

    return isAllValid;
  }

  submitSheep() {
    let newSheep = React.createElement(
      Sheep, 
      {
          name: this.state.name,
          gender: this.state.gender,
          parent1: null,
          parent2: null,
          branded: false
      },
      null
    );
    let herd = window.field.state.herd;
    herd.push(newSheep);
    
    window.field.setState({
      herd: herd
    });
  }

  isNameUnique(name: string) {
    return (name)? true: false;
  }
}

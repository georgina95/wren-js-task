import * as React from 'react';
import { Sheep } from '../sheep';
import { Gender } from '../../base';

type popupState = { name: string, gender: string, parent1: React.ReactElement | null , parent2: React.ReactElement | null 
                    parent1name: string, parent2name: string};
type popupProps = { };

export class BreedPopup extends React.Component<popupProps, popupState> {

  constructor(props: any) {
    super(props);
    this.state = { 
      name: '', 
      gender: '', 
      parent1: null, 
      parent2: null,
      parent1name: "",
      parent2name: ""
    };


    this.initState = this.initState.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPressBreed = this.onPressBreed.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onPressAdd = this.onPressAdd.bind(this);
  }

  render() {
    return (
      <div className="modal fade" id="breedPopup" aria-labelledby="breedModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            
            <div className="modal-header">
              <h5 className="modal-title" id="breedModalLabel">Breed</h5>
            </div>


            <div className="modal-body">
              <div id="breedButtonBox">
                <button onClick={this.onPressBreed}>Breed</button>
              </div>
              <div id="successfulBreeding">
                <form id='breedForm'>
                  <label htmlFor="parent1" >Parent1:</label>
                  <input type="text" id="parent1" name="parent1name" 
                    value={this.state.parent1name} readOnly={true} />

                  <label htmlFor="parent2">Parent2:</label>
                  <input type="text" id="parent2" name="parent2name" 
                    value={this.state.parent2name} readOnly={true} />

                  <label htmlFor="newborngender">Gender:</label>
                  <input type="text" id="newborngender" name="gender" 
                    value={this.state.gender} readOnly={true} />

                  <label htmlFor="newbornname">Name:</label>
                  <input type="text" id="newbornname" name="fname" 
                    value={this.state.name} onChange={this.onNameChange}/>
                </form>  
              </div>
              <div id="unsuccessfulBreeding">
                <p>
                  The breeding was unsuccessful.
                </p>
              </div>
               
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



  onPressBreed () {
    let pair = window.field.breed();
    let isConcieved = Math.floor(Math.random() * 2);

    if(isConcieved && pair) {
      let randomgender = Math.floor(Math.random() * 2);
      let newgender = Gender[randomgender];

      this.setState({
        name: this.state.name,
        gender: newgender, 
        parent1: pair.parent1,
        parent2: pair.parent2,
        parent1name: pair.parent1.props.name,
        parent2name: pair.parent2.props.name
      });

      this.setVisibility("successfulBreeding", true);
      this.setVisibility("unsuccessfulBreeding", false);
    }
    else {
      this.setVisibility("unsuccessfulBreeding", true);
      this.setVisibility("successfulBreeding", false);
    }
  }

  setVisibility(elementid: string, isvisible: boolean) {
    let element = document.getElementById(elementid);
    if(element) {
      element.style.display = (isvisible) ? 'grid' : 'none';
    }
  }

  onNameChange(event: any) {
    this.setState({name: event.target.value});
  }

  onClose() {
    this.initState();

    let popup = document.getElementById("breedPopup");
    if(popup) {
        popup.style.opacity = '0';
        popup.style.display = 'none';
    }

    this.setVisibility("successfulBreeding", false);
    this.setVisibility("unsuccessfulBreeding", false);
  }

  onPressAdd() {
    let nameField = document.getElementById('fname');
    if(nameField) {
      if(!this.state.name || !this.isNameUnique(this.state.name)) {
        nameField.classList.add("invalid");
      }
      else {
        nameField.classList.remove("invalid");
        this.submitSheep();
        
        this.onClose();
      }
    }
  }

  submitSheep() {
    let newSheep = React.createElement(
      Sheep, 
      {
          name: this.state.name,
          gender: this.state.gender,
          parent1: this.state.parent1,
          parent2: this.state.parent2
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
    let existing = document.getElementById("sheep_" + name);
    return (!existing)? true: false;
  }

  initState() {
    this.state = { 
      name: '', 
      gender: "", 
      parent1: null, 
      parent2: null,
      parent1name: "",
      parent2name: ""
    };
  }
}

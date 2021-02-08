import * as React from 'react';

type ButtonProps = { text: string };
type ButtonState = {  };

export class AddSheepButton extends React.Component<ButtonProps, ButtonState> {
    render() {
        return (
            <button type="button" 
                className="btn btn-outline-success controlButton" 
                data-bs-toggle="modal" data-bs-target="#newSheepPopup"
                onClick={this.onClickAddNewSheep} >
                {this.props.text}
            </button>
        );
    }

    onClickAddNewSheep() {
        let popup = document.getElementById("newSheepPopup");
        if(popup) {
            popup.style.opacity = '1';
            popup.style.display = 'block';
        }
        console.log("ADD PRESSED");
    }
}
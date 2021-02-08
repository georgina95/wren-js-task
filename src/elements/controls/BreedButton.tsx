import * as React from 'react';

type ButtonProps = { text: string };
type ButtonState = {  };

export class BreedButton extends React.Component<ButtonProps, ButtonState> {
    render() {
        return (
            <button type="button" 
                className="btn btn-outline-success controlButton" 
                data-bs-toggle="modal" data-bs-target="#breedPopup"
                onClick={this.onClickBreed} >
                {this.props.text}
            </button>
        )
    }

    onClickBreed() {
        let popup = document.getElementById("breedPopup");
        if(popup) {
            popup.style.opacity = '1';
            popup.style.display = 'block';
        }
    }
}
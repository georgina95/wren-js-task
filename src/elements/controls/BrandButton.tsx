import * as React from 'react';

type ButtonProps = { text: string };
type ButtonState = {  };

export class BrandButton extends React.Component<ButtonProps, ButtonState> {
    render() {
        
        return (
            <button type="button" 
                className="btn btn-outline-success controlButton"
                onClick={this.onClickBrandSheep} >
                {this.props.text}
            </button>
        );
    }

    onClickBrandSheep() {
        window.field.brandRandomSheep();
    }
}
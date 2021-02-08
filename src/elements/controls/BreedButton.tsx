import * as React from 'react';

type ButtonProps = { text: string };
type ButtonState = {  };

export class BreedButton extends React.Component<ButtonProps, ButtonState> {
    render() {
        return React.createElement('button', { className: 'btn btn-outline-success controlButton' }, `${this.props.text}`);
    }
}
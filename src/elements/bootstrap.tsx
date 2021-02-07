import * as React from 'react';

type ToggleProps = {};
type ToggleState = { isToggleOn: boolean };

export class ToggleButton extends React.Component<ToggleProps, ToggleState> {
    constructor(props: any) {
        super(props);
        this.state = { isToggleOn: false };

        this.onToggleNavbar = this.onToggleNavbar.bind(this);
    }

    render() {
        return (
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#controlPanelCollapsableContent" aria-controls="controlPanelCollapsableContent"
                aria-expanded="false" aria-label="Toggle navigation" onClick={this.onToggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
        );
    }

    onToggleNavbar() {
        let displayValue = (!this.state.isToggleOn)? '-webkit-box' : 'none';
        let collapsablePanel = document.getElementById("controlPanelCollapsableContent");

        if(collapsablePanel) {
            collapsablePanel.style.display = displayValue;
        }
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }
}

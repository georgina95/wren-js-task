import * as React from 'react';
import { ToggleButton } from './bootstrap';
import { Field } from './field';
import { AddSheepButton } from './controls/AddSheepButton';
import { BreedButton } from './controls/BreedButton';
import { BrandButton } from './controls/BrandButton';

type PanelProps = { title: string, field: Field };
type PanelState = {  };

export class ControlPanel extends React.Component<PanelProps, PanelState> {
    title: string;
    field: Field;

    constructor(props: any) {
        super(props);
        this.title = this.props.title;
        this.field = this.props.field;
    }
    
    render() {
        let content = this.getNavbarContent();
        return React.createElement(
            'nav',
            { className: 'navbar navbar-light navbar-expand-lg bg-light' },
            content
        );
        
    }

    getNavbarContent() {
        let title = React.createElement('span', { className: 'pageTitle' }, this.title);
        let toggleButton = React.createElement(ToggleButton);

        let collapsableContent = this.getCollapsableContent();        
        
        return React.createElement(
            'div',
            { className: 'container-fluid' },
            title, 
            toggleButton,
            collapsableContent
        );
    }

    getCollapsableContent() {
        let addButton = React.createElement(AddSheepButton, { text: 'Add sheep' });
        let breedButton = React.createElement(BreedButton, { text: 'Breed' });
        let brandButton = React.createElement(BrandButton, { text: 'Brand' });
        
        return React.createElement(
            'div',
            { className: 'collapse navbar-collapse controlPanelContent', id: 'controlPanelCollapsableContent'},
            addButton, breedButton, brandButton
        );

    }
}

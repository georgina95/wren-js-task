import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Field } from './elements/field';
import { ControlPanel } from './elements/controlPanel';
import { NewSheepPopup } from './elements/controls/NewSheepPopup';
import { BreedPopup } from './elements/controls/BreedPopup';


function main() {
    
    let field = React.createElement(
        Field, 
        { }
    );

    let controlPanel = React.createElement(
        ControlPanel, 
        { 
            title: 'SheepHerding',
            field: field
        }
    );

    let newsheeppopup = React.createElement(
        NewSheepPopup,
        { }
    );


    let breedpopup = React.createElement(
        BreedPopup,
        { }
    );
    

    let container = React.createElement(
        'div', 
        { className: 'appcontainer' }, 
        controlPanel, field, newsheeppopup, breedpopup
    );

    ReactDOM.render(
        container,
        document.getElementById('app')
    );
}

main();

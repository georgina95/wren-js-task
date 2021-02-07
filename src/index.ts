import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Field } from './elements/field';
import { ControlPanel } from './elements/controlPanel';


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

    let container = React.createElement(
        'div', 
        { className: 'appcontainer' }, 
        controlPanel, field
    );
    
    let d = ReactDOM.render(
        container,
        document.getElementById('app')
    );

        console.log(d);
}

main();

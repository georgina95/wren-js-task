import * as React from 'react';

declare global {
    interface Window {
        field: Field;
    }
}

type FieldProps = {  };
type FieldState = { herd: Array<React.ReactElement> };

export class Field extends React.Component<FieldProps, FieldState> {
    constructor(props: any) {
        super(props);
        this.state = {
            herd: []
        };

        window.field = this;
     }

    render() {
        return React.createElement(
            'div',
            { id: 'field', className: 'field' },
            this.state.herd
        );
        
    }

    brandRandomSheep() {
        /*
        let unBranded = this.props.children.filter(sheep => sheep.props.branded == false );
        let herdSize = unBranded.length;
        let randomNumber = Math.floor(Math.random() * herdSize);
        let sheep = unBranded[randomNumber];

        var element = document.getElementById("sheep.props.name");
        element.classList.add("branded");
        sheep.props.branded = true;
        */
    }

    breed() {
        /*
        let males = this.herd.filter(sheep => sheep.props.gender == Gender.Male);
        let fertileM = males.filter(sheep => sheep.props.branded == false);

        let females = this.herd.filter(sheep => sheep.props.gender == Gender.Female);
        let fertileF = females.filter(sheep => sheep.props.branded == false);

        return ( fertileF.length > 0 && fertileM.length > 0 ) ? this.getRandomPair(fertileF, fertileM) : null;
        */
    }

    getRandomPair( females: Array<React.ReactElement>, males: Array<React.ReactElement> ) {
        let random1 = Math.floor(Math.random() * males.length);
        let random2 = Math.floor(Math.random() * females.length);

        return {
            parent1: males[random1],
            parent2: females[random2]
        }
    }
    
}

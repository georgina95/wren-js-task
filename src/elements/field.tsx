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

        this.brandRandomSheep = this.brandRandomSheep.bind(this);

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
        let unBranded = this.state.herd.filter(sheep => sheep.state.branded == false );
        let herdSize = unBranded.length;
        let randomNumber = Math.floor(Math.random() * herdSize);
        let sheep = unBranded[randomNumber];

        var element = document.getElementById("sheep_" + sheep.props.name);
        if(element) {
            element.classList.add("branded");
            sheep.setState({
                branded: true
            });
        }*/

        
        let unBranded = this.getUnBrandedSheep();
        let herdSize = unBranded.length;
        let randomNumber = Math.floor(Math.random() * herdSize);
        let sheep = unBranded[randomNumber];
        
        if(sheep) {
            sheep.classList.add("branded");
        }
    }

    getUnBrandedSheep() {
        let herd = document.getElementsByClassName("icon-sheep");
        let unBranded = [];
        for(let currsheep of herd) {
            if( !currsheep.classList.contains("branded") ){
                unBranded.push(currsheep);
            }
        }

        return unBranded;
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

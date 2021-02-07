import * as React from 'react';
import { Sheep } from './sheep';
import { Gender } from '../base';


type FieldProps = {  };
type FieldState = {  };

export class Field extends React.Component<FieldProps, FieldState> {
    herd: Array<React.ReactElement>;

     constructor(props: any) {
        super(props);
        this.herd = [];
     }

    render() {
        return React.createElement(
            'div',
            { id: 'field', className: 'field' }
        );
        
    }

    addNewSheep(name: string, gender: Gender, parent1: Sheep | null, parent2: Sheep | null) {
        let newSheep = React.createElement(
            'Sheep', 
            {
                name: name,
                gender: gender,
                parent1: parent1,
                parent2: parent2,
                field: this
            },
            null
        );

        this.herd.push(newSheep);
        
    }

    brandRandomSheep() {
        let unBranded = this.herd.filter(sheep => sheep.props.branded == false );
        let herdSize = unBranded.length;
        let randomNumber = Math.floor(Math.random() * herdSize);
        let sheep = unBranded[randomNumber];

        sheep.props.brand();
    }

    breed() {
        let males = this.herd.filter(sheep => sheep.props.gender == Gender.Male);
        let fertileM = males.filter(sheep => sheep.props.branded == false);

        let females = this.herd.filter(sheep => sheep.props.gender == Gender.Female);
        let fertileF = females.filter(sheep => sheep.props.branded == false);

        return ( fertileF.length > 0 && fertileM.length > 0 ) ? this.getRandomPair(fertileF, fertileM) : null;
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

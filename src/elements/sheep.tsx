import * as React from 'react';
import { Gender } from '../base';
import { Field } from './field';

type MyProps = { name: string, gender: Gender, parent1: Sheep, parent2: Sheep, branded: boolean, field: Field };
type MyState = {};

export class Sheep extends React.Component<MyProps, MyState> {
        name: string;
        gender: Gender;
        parent1: Sheep;
        parent2: Sheep;
        branded: boolean;
        field: Field;

        constructor(props: any) {
                super(props);
                this.name = this.props.name;
                this.gender = this.props.gender;
                this.parent1 = this.props.parent1;
                this.parent2 = this.props.parent2;
                this.field = this.props.field;
                this.branded = false;

        }

        render() {
                return React.createElement(
                        'img',
                        { src: './assets/icons/icon_small_transparent.png' }
                    );

        }

        brand() {
                this.branded = true;
        }
}

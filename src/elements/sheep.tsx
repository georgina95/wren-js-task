import * as React from 'react';
import { Gender } from '../base';

type MyProps = { name: string, gender: Gender, parent1: Sheep, parent2: Sheep, branded: boolean };
type MyState = {};

export class Sheep extends React.Component<MyProps, MyState> {
        constructor(props: any) {
                super(props);
        }

        render() {
                return (
                        <div key={this.props.name} className='icon-sheep'>
                                <p>s S &#x73;</p>
                                {this.props.name}
                        </div>
                );

        }
}

import * as React from 'react';
import { Gender } from '../base';

type MyProps = { name: string, gender: Gender, parent1: Sheep, parent2: Sheep };
type MyState = { branded: boolean};

export class Sheep extends React.Component<MyProps, MyState> {
        constructor(props: any) {
                super(props);
                this.state = {
                        branded: false
                }
        }

        render() {
                let id = "sheep_" + this.props.name;
                let styleclass = "icon-sheep " + "sheep-" + this.props.gender;
                return (
                        <div key={this.props.name} className={styleclass} id={id}>
                                <p className="sheep-placeholder"></p>
                                {this.props.name}
                        </div>
                );

        }
}


import React, { Component } from 'react'
// npm i shallow-equal;

export class A07ShallowEqual extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            name: 'NolBu',
            ary: ['React', 'Angular', 'Vue']
        }
    }

    changeName = () => {
        this.setState({name: 'NolBu'});
    };
    changeObject = () => {
        this.setState({ary: ['React', 'Angular', 'Vue1']})
    };

    componentDidMount() {
        const ary = ['Angular', 'React'];
        const one = ['Angular', ary];
        const two = ['Angular', ary];
        const three = ['Angular', ['Angular', 'React']];


        const obj = {name: 'NolBu', age: 30};
        var obj1 = {title: 'Shallow', obj: obj}
        var obj2 = {title: 'Shallow', obj: obj}
        var obj3 = {title: 'Shallow', obj: {name: 'NolBu', age: 30}}
    }

    render() {
        console.log("---------- render() Method ----------")
        return (
            <div>
                <h3>A06 Shallow Equals Array</h3>

                <div>
                    Name: {this.state.name} <br />
                    Ary: {this.state.ary[0]}<br />

                    <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
                    <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
                </div>
            </div>
        )
    }
}

export default A07ShallowEqual

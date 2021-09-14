
import React, { PureComponent } from 'react'

export class A06PureComponent extends PureComponent {
    
    constructor(props){
        super(props);

        this.state = {
            name: 'NolBu',
            ary: ['React', 'Angular', 'Vue']
        }
    }

    /*
    // PureComponent는 Data를 비교하는 shouldComponentUpdate가 이미 정의되어 있으므로 재 정의하면 에러 
    shouldComponentUpdate(props, state) {
        console.log(props, state);
        console.log(state, this.state);
        if(state.name === this.state.name) return false;
        else return true;
    }
    */

    changeName = () => {
        this.setState({name: 'NolBu'});
    }
    changeObject = () => {
        this.setState({ary: ['React', 'Angular', 'Vue']})
    }

    render() {
        console.log("---------- render() Method ----------")
        return (
            <div>
                <h3>A05 PureComponent</h3>

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

export default A06PureComponent

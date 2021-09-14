import React from "react";

function A08WithComponent(Comp, params) {
    const obj = {
        name: 'NolBu',
        age: 20
    };
    // return <Comp />

    // High Order Component
    return class InnerComp extends React.Component {
        constructor() {
            super();
            this.name = 'HungBu'
            this.state = {
                age: 10,
            }
        };
        
        changeAge = () => this.setState( {age: 100} )

        render() {
            return (
                <div>
                    <h5>With Component: {params}</h5>
                    <Comp name={this.name} obj={obj} age={this.state.age}
                        chagneAge={this.chagneAge} />
                </div>
                
            )
        }
    }
    
}
export default A08WithComponent;
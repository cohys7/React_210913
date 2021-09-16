
import React from 'react';
import { Route, Link } from 'react-router-dom';

const A05ChildComponent = () => {

    return (
        <div>
            <h5>Children Component</h5>
            <div>This is Children Component</div>
            <br />
            
            <div>
                <Link to="/A07ChildComponent">ONE</Link> | &nbsp; 
                <Link to="/A07ChildComponent/two/100"> TWO</Link> |  &nbsp;
                <Link to="/A07ChildComponent/three"> THREE</Link>
            </div>
            
            <hr />

            <Route path="/A07ChildComponent"    exact       render={ () => (
                <div>
                    <h6>ONE Component</h6>
                    <div>This is one Component</div>    
                </div>
            )} />

            <Route path="/A07ChildComponent/two/:id"        render={ ( {match} ) => (
                <div>
                    <h6>TWO Component</h6>
                    <div>This is two Component</div>
                    <br />

                    <div>
                        Id: {match.params.id}
                    </div>
                </div>
            )} />

            <Route path="/A07ChildComponent/three"          render={ () => (
                <div>
                    <h6>THREE Component</h6>
                    <div>This is three Component</div>    
                </div>
            )} />
        </div>
    )
}
export default A05ChildComponent;
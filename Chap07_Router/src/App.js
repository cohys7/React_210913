
import 'bootstrap/dist/css/bootstrap.css';
import React, { Suspense } from 'react';
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';

// npm i react-router react-router-dom
// npm i react-loader-spinner
import Loader from 'react-loader-spinner'

import A01FunctionProps from './components/A01FunctionProps'
import A02FunctionState from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05MatchParam from './components/A05MatchParam'

// 528 page
// import A06Arguments from './components/A06Arguments'
// import A07ChildComponent from './components/A07ChildComponent'
// import NotFoundComponent from './components/NotFoundComponent'

const A06Arguments = React.lazy( () => import('./components/A06Arguments') )
const A07ChildComponent = React.lazy( () => import('./components/A07ChildComponent') )
const NotFoundComponent = React.lazy( () => import('./components/NotFoundComponent') )

// react-router-config

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  const style = {
      color: 'orange',
      fontWeight: 'bold'
  }

  return (
    <div className="card-body">
        <h1>Chap07 Router</h1>

        <NavLink activeStyle={style} to="/">Index Page</NavLink> | {' '}
        <NavLink activeStyle={style} to="/index">Index Page</NavLink> | {' '}
        <Link to="/A01FuncProps">A01FunctionProps</Link> | {' '}
        <Link to="/A02FuncState">A02FuncState</Link> | {' '}
        <Link to="/A03Currency">A03Currency</Link> | <Link to="/Currency">Currency</Link> | {' '}
        <Link to="/A04History">A04History</Link> | {' '}
        <Link to="/A05MatchParam/5/data/NolBu">A05MatchParam</Link> | {' '}
        <Link to="/A05MatchParam/3/data/HumgBu">A05MatchParam</Link> | {' '}
        <NavLink activeStyle={style} to="/A06Arguments?id=5&name=BangJa&age=20&address=Seoul#ABC">A06Arguments</NavLink> | {' '}
        <NavLink activeStyle={style} to="/A07ChildComponent">A07ChildComponent</NavLink> | {' '}
        <NavLink activeStyle={style} to="/ABC">ABC</NavLink> | {' '}
        <hr />


        {/* 매칭되는 패스가 발견되면 표시하고 이 스위치 구문을 벗어나게 한다. */}
        <Switch>
             {/* 링크에 따라 출력될 View를 정의한다 */}
            <Redirect from="/"  to="/index" exact />
            <Route path="/index"                render={ () => (<div>
                                                    <h3>Index Page</h3>
                                                    <div>Welcome to home page</div>
                                                </div>)}  />
            <Route path="/A01FuncProps"     render={ () => <A01FunctionProps name="NolBu" age={30} user={user} arr={ary} onPlus={onPlus} isChecked /> } />
            <Route path="/A02FuncState"     component={ A02FunctionState } /> {/* props 값 전달 없이 표시만 할 경우  */}
            <Route path={ ["/A03Currency", '/Currency'] }      component={ A03Currency } />
            <Route path='/A04History'       component={ A04History } />
            {/* 
                path base로 데이터 전달 
                /A05MatchParam/5/data/nolbu => id라는 변수에 5가 name에는 nolbu 대입되어 전달된다. 
            */}
            <Route path="/A05MatchParam/:id/data/:name/"    component={ A05MatchParam } />

            {/* <Suspense fallback={<div>로딩증.....</div>}> */}
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/A06Arguments'       component={ A06Arguments }  exact/>
                    <Route path='/A07ChildComponent'       component={ A07ChildComponent } />
                    <Route path='*'       component={ NotFoundComponent } />
                </Switch>
            </Suspense>
            
        </Switch>
    </div>
  );
}

export default App;

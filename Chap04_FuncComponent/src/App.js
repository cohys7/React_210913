
import 'bootstrap/dist/css/bootstrap.css'

import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03FuncEvent from './components/A03FuncEvent'

function App() {
    const user = {name: 'HungBu', age: 20};
    const ary = [10, 20];
    const onPlus = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
        <h1>Chap04 Function Component</h1>

        <A03FuncEvent /><br />
        
        <A02FuncState /><br/>

        <A01FuncProps name="NolBu" age={20} 
            user={user} arr={ary} onPlus={onPlus} isChecked>
            This is App Content
        </A01FuncProps>
    </div>
  );
}

export default App;

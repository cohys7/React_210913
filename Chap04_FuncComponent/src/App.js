
import 'bootstrap/dist/css/bootstrap.css'

import A01FuncProps from './components/A01FuncProps'

function App() {
  return (
    <div className="card-body">
        <h1>Chap04 Function Component</h1>

        <A01FuncProps name="NolBu" age={20} >
            This is App Content
        </A01FuncProps>
    </div>
  );
}

export default App;

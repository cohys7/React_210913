import 'bootstrap/dist/css/bootstrap.css';

import ColorBox from './components/ColorBox'
import SelectColor from './components/SelectColor'
import TodoTemplate from './components/TodoTemplate'

// Context
// Provider(제공자): 기본값을 value속성에 초기화, 
// Consumer(사용자): value 값을 꺼내 씀.
import ColorBoxContext from './modules/ColorBoxContext'
import { SelectColorProvider } from './modules/SelectColorContext'
import { TodoListProvider } from './modules/TodoContext'

function App() {
  return (
    <div className="card-body">
        <h1>Chap10 Context</h1>
        
        <ColorBoxContext.Provider value={ {color: 'orange', moduleName: 'ColorBox Module'} }>
            <SelectColorProvider>
                <ColorBox />
                <SelectColor />
            </SelectColorProvider>
        </ColorBoxContext.Provider>
        
        <hr />
        <TodoListProvider>
            <TodoTemplate />
        </TodoListProvider>
        
        </div>
  );
}

export default App;

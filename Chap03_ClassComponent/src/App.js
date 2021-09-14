
import 'bootstrap/dist/css/bootstrap.css';

import A01ClassProps from './components/A01ClassProps'
import A02ClassState from './components/A02ClassState'
import A03ClassEvent from './components/A03ClassEvent'
import A04CreateDOM from './components/A04CreateDOM'

function App() {

    const user = {name: 'NolBu', age: 30};
    const ary = [10, 20];
    const onPlus = (x, y) => `${x} + ${y} = ${x + y}`;

    return (
        <div className="card-body">
            <h1>Chap03 Class Component</h1>

            <A04CreateDOM /><br />
            
            <A03ClassEvent /><br />

            <A02ClassState /><br />

            1. 상위 컴퍼넌트에서 하위 컴퍼넌트에 테이터를 전달: 속성 형태로 사용한다 <br />
            <A01ClassProps name="HungBu" age={20} user={user} arr={ary} 
                    onPlus={onPlus} isChecked>
                <div>이 요소는 App에서 작성한 컨텐츠</div>
            </A01ClassProps>
        </div>
    );
}

export default App;

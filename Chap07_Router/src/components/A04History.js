
import React from 'react';
import { useHistory } from 'react-router';

const A02ProductComponent = ( props ) => {

    // const { history } = props;
    const history = useHistory();

    const goBack = () => {
        history.goBack();       // 뒤로 가기
    }
    const goForward = () => {
        history.goForward();       // 앞으로 가기
    }
    const goHome = () => {
        history.push('/');       // 지정한 페이지로 이동
    }
    const goURL = (url) => {
        history.push(url);
    }
    

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button onClick={goBack}>BACK</button>
                <button onClick={goForward}>FORWARD</button>
                <button onClick={goHome}>HOME</button>
                <button onClick={ () => goURL('/A02FuncState') }>PARAMETER</button>
            </div>
        </div>
    )
}
export default A02ProductComponent;
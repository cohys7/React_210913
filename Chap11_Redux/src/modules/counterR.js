
// Event 이름
const INCREASE_COUNT = 'COUNTER/INCREASE';
const DECREASE_COUNT = 'COUNTER/DECREASE';

// Action: reducer함수를 호출하면서 action에 전달할 값을 리턴한다.
// state의 값을 변경하기 전까지의 로직을 구현한다.
export const increaseAction = (num) => {
    let value = Number(num);
    if(isNaN(value)) value = 0;
    return {type: INCREASE_COUNT, payload: value};
}
export const decreaseAction = () => ( {type: DECREASE_COUNT} );

// Reducer
const init = {
    cnt: 0,
    reduxName: 'Counter Reducer'
}
function CounterR(state = init, action) {
    switch(action.type) {
        case INCREASE_COUNT:
            return {...state, cnt: state.cnt + action.payload}
        case DECREASE_COUNT:
            return {...state, cnt: state.cnt - 1}
        default:
            return state;
    }
}
export default CounterR;
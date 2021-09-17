
import { createAction, handleActions } from 'redux-actions'

// Event 이름
const INCREASE_COUNT = 'COUNTER/INCREASE';
const DECREASE_COUNT = 'COUNTER/DECREASE';

export const increaseAction = createAction(INCREASE_COUNT, (num) => {
    let value = Number(num);
    if(isNaN(value)) value = 0;
    return value;                   // 이 값을 payload라는 변수에 담아서 전달한다
})
export const decreaseAction = createAction(DECREASE_COUNT)


// Reducer
const init = {
    cnt: 0,
    reduxName: 'Counter Reducer'
}
const CounterR = handleActions({
    [INCREASE_COUNT]: (state, action) => ({...state, cnt: state.cnt + action.payload}),
    [DECREASE_COUNT]: (state, action) => ({...state, cnt: state.cnt - 1})
}, init);

export default CounterR;

import { createAction, handleActions } from 'redux-actions'

const COUNTER_INCREASE = 'COUNTER/INCREASE';
const COUNTER_DECREASE = 'COUNTER/DECREASE'; 

export const increaseAction = createAction(COUNTER_INCREASE, (num) => {
    num = num + 1;
    // setTimeout( () => {
    //     return num
    // }, 2000);
    return num;
});
export const decreaseAction = createAction(COUNTER_DECREASE);

export const increaseActionAsync = (num) => (dispatch) => {
    console.log('async')
    setTimeout( () => {
        dispatch( increaseAction(num) );
    }, 2000)
}

const init = {
    num: 0,
    moduleName: 'Counter Module',
}

const counterR = handleActions({
    [COUNTER_INCREASE]: (state, action) => ({...state, num: state.num + action.payload}),
    [COUNTER_DECREASE]: (state, action) =>({...state, num: state.num - 1})
}, init);
export default counterR;

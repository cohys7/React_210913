const INCREASE_COUNT = 'COUNTER/INCREASE';
const DECREASE_COUNT = 'COUNTER/DECREASE';

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

function createStore( reducer ) {
    
    let state = reducer(undefined, '');
    // console.log(state);

    const getState = function() {
        return {...state};
    }

    const dispatch = (action) => {
        console.log(action);
        state = reducer(state, action)
    }

    // 사용한 곳에 전파..

    return {
        getState,
        dispatch
    }
}

const store = createStore(CounterR);
// console.log(store.state);            // Error
console.log(store.getState());

store.dispatch( {type: INCREASE_COUNT, payload: 100} );
console.log(store.getState());

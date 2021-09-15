
import React, { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'

const CHANGE_NUM = 'CHANGE/NUM';
const CHANGE_STR = 'CHANGE/STR';
const CHANGE_TODAY = 'CHANGE/TODAY';
const ADD_LIST = 'ADD_LIST';

// redux는 외부에서 호추하는 action만 하나 더 존재한다.

const reducer = (state, action) => {
    console.log(state);
    console.log(action);        // {type: 'CHANGE_NUM', payload: '3'}
    switch(action.type) {
        case CHANGE_NUM:
            let value = Number(action.payload.value);   // action.payload => evt.target => evt.target.value
            if(isNaN(value)) value = 0;
            return {...state, [action.payload.name]: value };
        case CHANGE_STR:
            return {...state, [action.payload.name]: action.payload.value };
        case CHANGE_TODAY:
            return {...state, today: action.payload };
        case ADD_LIST:
            return {...state, list: state.list.concat(state.avg) };    // state에서 바로 참조
        default: 
            return state;
    }
    // return state;
}

const A06Hook = () => {

    const [data, dispatch] = useReducer( reducer, {
        num: 0,
        str: '',
        today: new Date(),
        avg: '',
        list: []
    });
    const numRef = useRef();

    useEffect( () => {
        numRef.current.style.backgroundColor = 'orange';
    }, []);

    useEffect( () => {
        setTimeout( () => {
            dispatch( {type: CHANGE_TODAY, payload: new Date()} );
        }, 3000);
    }, []);


    // Event
    // dispatch => 리렌더링을 하지 않을 것을 보장.
    const changeNumber = useCallback( (evt) => dispatch( {type: CHANGE_NUM, payload: evt.target} ), []);
    const changeString = (evt) => dispatch( {type: CHANGE_STR, payload: evt.target} )
    const addList = () => dispatch( {type: ADD_LIST} );

    const getAverage = (ary) => {
        console.log('계산중...');
        if(ary.length === 0) return 0;
        const total = ary.reduce( (x, y) => x + y );
        return total / ary.length;
    }

    const getAverageMemo = useMemo( () => {
        return getAverage(data.list);
    }, [data.list])

    return (
        <div>
            <h3>A06. Reducer</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" ref={numRef}
                        value={data.num} onChange={changeNumber} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control"
                        value={data.str} onChange={changeString} /><br />

                Today: {data.today.toLocaleString()}<br />
                <br />

                Avg: {data.avg} / {getAverageMemo}
                    <div className="input-group">
                        <input type="text" name="avg" className="form-control"
                             value={data.avg} onChange={changeNumber}/>
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
                    {
                        data.list.map( (item, i) => <span key={i}>{item} </span>)
                    }
            </div>
        </div>
    )
}

export default A06Hook

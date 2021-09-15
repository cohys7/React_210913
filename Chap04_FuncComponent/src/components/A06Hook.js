
import React, { useCallback, useEffect, useReducer, useRef } from 'react'

const reducer = (state, action) => {
    console.log(state);
    console.log(action);        // {type: 'CHANGE_NUM', payload: '3'}
    switch(action.type) {
        case 'CHANGE_NUM':
            return {...state, num: action.payload };
        case 'CHANGE_STR':
            return {...state, str: action.payload };
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


    // Event
    const changeData = useCallback( (evt) => dispatch( {type: 'CHANGE_NUM', payload: evt.target.value} ), []);
    const changeString = (evt) => dispatch( {type: 'CHANGE_STR', payload: evt.target.value} )


    return (
        <div>
            <h3>A06. Reducer</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" ref={numRef}
                        value={data.num} onChange={changeData} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control"
                        value={data.str} onChange={changeString} /><br />

                Today: {data.today.toLocaleString()}<br />
                <br />

                Avg: {data.avg}
                    <div className="input-group">
                        <input type="text" name="avg" className="form-control" />
                        <button className="btn btn-outline-primary btn-sm">ADD</button>
                    </div>
                    
            </div>
        </div>
    )
}

export default A06Hook


import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const A05Hook = () => {

    // useState Hook
    const [data, setData] = useState({
        num: 0,
        str: ''
    });
    const [today, setToday] = useState(new Date());
    const [avg, setAvg] = useState('');
    const [list, setList] = useState([]);

    // event 리스너가 어느 경우만 새롭게 만들 것인가를 지정 => useCallback()
    // useCallback( listener, [의존관계가 있는 변수 또는 함수] ) => 의존관계가 있는 변수가 변경될때만 함수를 새로 작성한다.
    const changeData = useCallback( (evt) => setData( {...data, [evt.target.name]: evt.target.value} ) , [data]);
    const changeAvg = useCallback( (evt) => {
        let value = Number(evt.target.value);
        if(isNaN(value)) value = 0;
        setAvg(value);
    }, []);                 // 최초에 1번만 작성되고 리 렌더링 되더라도 새롭게 만들어지지 않는다.

    // useCallback에 []이 없으면 useCallback을 기술하지 않은 것과 동일.
    /*
    const addList = useCallback( () => {
        setList(list.concat(avg))
    }, [list, avg]);
    */
    const addList = useCallback( () => {
        setList( (list) => list.concat(avg) )
    }, [avg]);

    // useCallback => event listener 관리
    // useEffect => lifeCycle 관리
    // useState => state 변수 등록 및 수정
    // useRef => DOM과 연결.
    // useMemo => 사용자 정의 함수를 관리
    const getAverage = (ary) => {
        console.log('계산중...');
        if(ary.length === 0) return 0;
        const total = ary.reduce( (x, y) => x + y );
        return total / ary.length;
    }

    const getAverageMemo = useMemo( () => {
        return getAverage(list);
    }, [list])


    // useEffect
    useEffect( () => {
        setTimeout( () => {
            setToday(new Date());
        }, 3000);
    }, [data]);         // shouldComponentUpdate() dom이 완성되고 난 후 1번만 실행.

    // DOM과 연결하는 Hook => useRef()
    const numRef = useRef();

    useEffect( () => {
        numRef.current.style.border = '1px solid orange';
        numRef.current.focus();
    }, []);             // componentDidMount() dom이 완성되고 난 후 1번만 실행.

    return (
        <div>
            <h3>A05. useState, useEffect</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control" ref={numRef}
                        value={data.num} onChange={changeData} /><br />
                Str: {data.str}
                    <input type="text" name="str" className="form-control"
                        value={data.str} onChange={changeData} /><br />
                Today: { today.toLocaleString() }<br />
                <br />

                Avg: {avg} / {getAverageMemo}
                    <div className="input-group">
                        <input type="text" name="avg" className="form-control"
                            value={avg} onChange={changeAvg} />
                        <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
                    </div>
                    
                    {
                        list.map( (item, i) => <span key={i}>{item} </span>)
                    }
            </div>
        </div>
    )
}

export default A05Hook

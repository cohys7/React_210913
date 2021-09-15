
import React, { useEffect, useRef, useState } from 'react'

function A03FuncEvent() {

    // DOM 참조 Hook
    const nameRef = useRef();
    const ageRef = useRef();

    // DOM이 모두 렌더링 된 후 실행 componentDidMount
    useEffect( () => {
        console.log('useEffect');
        nameRef.current.style.border = '1px solid orange';
        nameRef.current.focus();
    }, []);     // [] 없으면 shouldComponetUpdate 역할, 있으면 componentDidMount와 동일한 역할

    // useState Hook
    const [data, setData] = useState({
        name: 'NolBu',
        age: 20,
        date: '2021-12-25',
        sports: 'baseball',
        isChecked: false,
        language: new Set(['Angular']),
        baseball: 'NC',
        four: [],
    });

    const changeString = (evt) => {
        const newData = {...data, [evt.target.name]: evt.target.value}
        setData(newData);
    };
    const changeNumber = (evt) => setData( {...data, [evt.target.name]: Number(evt.target.value)} );
    const changeCheck = () => setData( {...data, isChecked: !data.isChecked} );
    const changeCheckbox = (evt) => {
        if(data.language.has(evt.target.value)) {
            data.language.delete(evt.target.value);
        } else {
            data.language.add(evt.target.value);
        }
        const ary = Array.from(data.language);
        setData( {...data, language: new Set(ary)} )
    };
    const changeSelectBox = (evt) => {
        const elem = evt.target;
        const value = [...elem.selectedOptions].map( item => item.value )
        setData( {...data, four: value} )
    }
    const sendData = (evt) => {
        evt.preventDefault();
        console.log(data);
        ageRef.current.value = 0;
    }

    return (
        <div>
            <h3>A03 Function Component Event & Form</h3>

            <form>
                Name: {data.name}
                    <input type="text" name="name" className="form-control" ref={nameRef}
                        value={data.name} onChange={changeString} />
                Age: {data.age}
                    <input type="text" name="age" className="form-control" ref={ageRef}
                        value={data.age} onChange={changeNumber}/>
                Date: {data.date}
                    <input type="date" name="date" className="form-control"
                        value={data.date} onChange={changeString} />

                RadioButton: {data.sports}<br />
                    <div className="form-check">
                        <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
                            defaultChecked={data.sports === 'baseball'} onChange={changeString} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
                            defaultChecked={data.sports === 'soccer'} onChange={changeString}  />
                        <label htmlFor="soccer" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                            defaultChecked={data.sports === 'basketball'} onChange={changeString} />
                        <label htmlFor="basketball" className="form-check-label">농구</label>
                    </div>

                CheckBox One: {data.isChecked ? '동의' : '동의 안함'} <br />
                    <div className="form-check">
                        <input type="checkbox" id="check" className="form-check-input"
                            defaultChecked={data.isChecked} onChange={changeCheck}/>
                        <label htmlFor="check" className="form-check-label">동의</label>
                    </div>

                CheckBox: { Array.from(data.language) }<br />
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                            defaultChecked={data.language.has('Angular')} onChange={changeCheckbox} />
                        <label htmlFor="baseball" className="form-check-label">야구</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="React" id="react" className="form-check-input" 
                            defaultChecked={data.language.has('React')} onChange={changeCheckbox}/>
                        <label htmlFor="react" className="form-check-label">축구</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" 
                            defaultChecked={data.language.has('Vue')} onChange={changeCheckbox}/>
                        <label htmlFor="vue" className="form-check-label">농구</label>
                    </div>

                SelectBox: {data.baseball} <br/>
                    <select name="baseball" className="form-control" value={data.baseball} onChange={changeString} >
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                
                SelectBox Multi: {data.four}<br />
                    <select name="four" multiple size="3" className="form-control"
                        value={data.four} onChange={changeSelectBox}>
                        <option>NC</option>
                        <option>두산</option>
                        <option>엘지</option>
                    </select>
                    <br />

                <button type="submit" onClick={sendData}>SEND</button>
            </form>
        </div>
    )
}

export default A03FuncEvent

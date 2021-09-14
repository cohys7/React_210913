
import React, { Component, createRef } from 'react'

export class A03ClassEvent extends Component {

    constructor() {
        super();

        this.nameRef = createRef();     // JSX의 DOM 요소와 연결된다.
        this.ageRef = createRef();      // 함수 컴퍼넌트의 경우는 useRef()라는 Hook을 이용한다.
    }

    // window.onload와 마찬가지로 모든 DOM 요소가 화면에 출력된 후에 발생하는 이벤트
    componentDidMount() {
        // console.log(this.nameRef.current);
        // JavaScript의 대상 객체를 ref의 current로 참조 가능
        this.nameRef.current.style.border = '1px solid orange';
        this.nameRef.current.focus();
    }

    state = {
        name: 'NolBu',
        age: 30,
        date: '2021-12-25',
        sports: 'soccer',
        language: new Set( ['Angular', 'Vue'] ),     // Set => 중복 값은 1개로 취급된다.
        isChecked: false,
        baseball: 'NC',
        four: [],
    };

    changeName = (evt) => {
        // console.log(evt.target);
        // console.log(evt.target.value)
        // this.setState( {name: 'ABC'} )
        this.setState( {name: evt.target.value} )
    }

    changeAge = (evt) => this.setState( {age: evt.target.value} )
    
    changeString = (evt) => this.setState( { [evt.target.name]: evt.target.value} );
    changeNumber = (evt) => {
        // evt.preventDefault();
        let value = Number(evt.target.value);
        if(isNaN(value)) value = 0;     // throw new Error('숫자 형식이 아닙니다');
        this.setState( { [evt.target.name]: value} );
    }
    changeChecked = () => this.setState( {isChecked: !this.state.isChecked} );

    changeCheckBox = (evt) => {
        if(this.state.language.has(evt.target.value)) {
            this.state.language.delete(evt.target.value);
        }else{
            this.state.language.add(evt.target.value);
        }
        const newSet = new Set( Array.from(this.state.language) );
        this.setState( {language: newSet} );
    }

    changeSelectBox = (evt) => {
        const elem = evt.target;        // selectBox
        // console.log(elem.selectedOptions);
        const value = [...elem.selectedOptions].map( item => item.value );
        this.setState( {four: value} );
    }

    sendData = (evt) => {
        evt.preventDefault();       // submit이 되면 지정된 페이지에 값을 전송하는 기본 기능을 취소해라 
        // console.log(this.state);

        const value = {
            ...this.state,
            language: Array.from(this.state.language)       // Set 객체를 Array 객체로 변환.
        }
        console.log(JSON.stringify(value));

        // JSON.stringify => JavaScript의 object를 json 객체로 변환
        // JSON.parse => object를 JavaScript 객체로 변환

        this.ageRef.current.value = 0;

    }

    render() {
        return (
            <div>
                <h3>A03 Class Component Event & Form</h3>

                <form>
                    form 요소의 value 속성은 변경을 할 목적으로 기술. 변경하는 이벤트를 함깨 기술하지 않으면 에러.<br />
                    Name: {this.state.name}
                        <input type="text" name="name" className="form-control" ref={this.nameRef}
                                        value={this.state.name} onChange={this.changeString} />
                    Age: {this.state.age + 100} 
                        <input type="text" name="age" className="form-control" ref={this.ageRef}
                                        value={this.state.age} onChange={this.changeNumber} />
                    Date: {this.state.date}
                        <input type="date" name="date" className="form-control" 
                                        value={this.state.date} onChange={this.changeString}/>

                    RadioButton: {this.state.sports}<br />
                        <div className="form-check">
                            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
                                    defaultChecked={this.state.sports === 'baseball'} onChange={this.changeString} />
                            <label htmlFor="baseball" className="form-check-label">야구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                                    defaultChecked={this.state.sports === 'soccer'} onChange={this.changeString} />
                            <label htmlFor="soccer" className="form-check-label">축구</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
                                    defaultChecked={this.state.sports === 'basketball'} onChange={this.changeString}  />
                            <label htmlFor="basketball" className="form-check-label">농구</label>
                        </div>

                    CheckBox One: {this.state.isChecked ? '동의' : '동의 안함'}<br />
                        <div className="form-check">
                            <input type="checkbox" id="check" className="form-check-input" 
                                    value={this.state.isChecked} onChange={ this.changeChecked } />
                            <label htmlFor="check" className="form-check-label">동의</label>
                        </div>

                    CheckBox: { Array.from(this.state.language) } <br />
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input" 
                                    defaultChecked={this.state.language.has('Angular')} onChange={this.changeCheckBox} />
                            <label htmlFor="baseball" className="form-check-label">앵귤러</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="React" id="react" className="form-check-input" 
                                    defaultChecked={this.state.language.has('React')} onChange={this.changeCheckBox} />
                            <label htmlFor="react" className="form-check-label">리엑트</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                                    defaultChecked={this.state.language.has('Vue')} onChange={this.changeCheckBox} />
                            <label htmlFor="vue" className="form-check-label">뷰</label>
                        </div>

                    SelectBox: {this.state.baseball}<br/>
                        <select name="baseball" className="form-control" 
                                    value={this.state.baseball} onChange={this.changeString}>
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    
                    SelectBox Multi: {Array.from(this.state.four) }<br />
                        <select name="four" multiple size="3" className="form-control" 
                                value={this.state.four} onChange={this.changeSelectBox}>
                            <option>NC</option>
                            <option>두산</option>
                            <option>엘지</option>
                        </select>
                    <br />

                    <button type="submit" onClick={this.sendData}>SEND</button>
                </form>
            </div>
        )
    }
}

export default A03ClassEvent

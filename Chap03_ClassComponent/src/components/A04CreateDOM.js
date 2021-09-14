
import React, { Component } from 'react'

export class A05CreateDOM extends Component {

    constructor(props) {
        super(props);
        this.baseArray = ['NC', '두산', '엘지', 'KT', '키움'];
    }

    state = {
        teamOne: '',
        teamTwo: '',
        isChecked: false,
        baseObject:[
            {id: 1, team: 'NC', value: 'NC'},
            {id: 2, team: '두산', value: 'Doosan'},
            {id: 3, team: '엘지', value: 'LG'},
        ]
    };

    changeValue = (evt) => this.setState( {[evt.target.name]: evt.target.value} );
    addTeam = () => this.setState({baseObject: this.state.baseObject.concat({id: 4, team: '삼성', value:"Samsung"})});
    addArray = () => {
        this.baseArray.push('추가 데이터');
        // 강제 화면 리 렌더링
        this.forceUpdate();
    }

    showHide = () => this.setState({isChecked: !this.state.isChecked});

    makeDOM = () => this.baseArray.map( item => <option key={item}>{item}</option> );

    render() {
        return (
            <div>
                <h3>A04 Make DOM</h3>
                
                SelectBox: {this.state.teamOne}<br/>
                <select name="teamOne" className="form-control" onChange={this.changeValue}>
                    <option>선택해주세요</option>
                    { this.baseArray.map( (item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </select>

                SelectBox: {this.state.teamTwo}<br/>
                <select name="teamTwo" className="form-control" onChange={this.changeValue}>
                    <option value="">선택해주세요</option>
                    { this.makeDOM() }
                </select>

                <table className="table">
                    <thead>
                        <tr>
                            <th>NO</th><th>Team</th><th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.baseObject.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.team}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                { this.state.isChecked && 
                    <div className="input-group">
                        <input type="text" className="form-control" name="teamOne" value={this.state.teamOne} onChange={this.changeValue} />
                        <button className="btn btn-outline-primary btn-sm" onClick={this.addArray}>ADD</button>
                    </div>
                }
                <br />
                
                <button className="btn btn-outline-primary btn-sm" onClick={this.addTeam}>ADD TEAM</button>
                <button className="btn btn-outline-primary btn-sm" onClick={this.showHide}>{this.state.isChecked ? 'HIDE' : 'SHOW'}</button>
            </div>
        )
    }
}

export default A05CreateDOM


import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function AddContact() {

    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        tel: '',
        address: ''
    });
    const changeData = (evt) => setData({...data, [evt.target.name]: evt.target.value});

    const sendData = () => {
        history.push('/proceed');
    }

    return (
        <div className="container-fluid">
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name" value={data.name} onChange={changeData} />
            Tel: <input type="text" className="form-control" name="tel" value={data.tel} onChange={changeData} />
            Address: <input type="text" className="form-control" name="address" value={data.address} onChange={changeData} />
            <br />
            <button className="btn btn-outline-primary" onClick={sendData}>ADD</button>
        </div>
    )
}

export default AddContact

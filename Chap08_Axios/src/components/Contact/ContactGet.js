
import React from 'react'
import { useHistory } from 'react-router';

function AddContact(props) {

    const { contact, deleteContact } = props;
    const history = useHistory();

    const goUpdatePage = () => {
        history.push('/updateContact');
    }

    const deleteContactEvent = (no) => {
        deleteContact(no, () => history.push('/getContactList'));
    }

    return (
        <div className="container-fluid">
            <h3>Get Contact</h3>

            <div>
                Name: <input type="text" className="form-control" disabled defaultValue={contact && contact.name} />
                Tel: <input type="text" className="form-control" disabled  defaultValue={contact && contact.tel}/>
                Address: <input type="text" className="form-control" disabled  defaultValue={contact && contact.address}/>
            </div>
            <br />
            <button className="btn btn-outline-primary" onClick={goUpdatePage}>수정</button>
            <button className="btn btn-outline-primary" onClick={ () => deleteContactEvent(contact && contact.no) }>삭제</button>
        </div>
    )
}

export default AddContact

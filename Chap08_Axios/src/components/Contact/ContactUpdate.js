
import React from 'react'

function AddContact( props ) {

    const {contact, setContact, updateContact } = props;
    const changeContact = (evt) => setContact({
        ...contact,
        [evt.target.name]: evt.target.value
    });

    return (
        <div className="container-fluid">
            <h3>Update Contact</h3>

            <div>
                Name: <input type="text" className="form-control" name="name" value={contact && contact.name} onChange={changeContact} />
                Tel: <input type="text" className="form-control" name="tel" value={contact && contact.tel} onChange={changeContact}  />
                Address: <input type="text" className="form-control" name="address"  value={contact && contact.address} onChange={changeContact}  />
            </div>
            <br />
            <button className="btn btn-outline-primary" onClick={ () => updateContact(contact && contact.no) }>UPDATE</button>
        </div>
    )
}

export default AddContact

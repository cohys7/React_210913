
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import { getContextActionAsync } from './../../modules/contactR'

const GetContactList = (props) => {

    const { contactList } = props;
    const dispatch = useDispatch();
    const history = useHistory()

    const goGetContact = (no) => {
        dispatch(getContextActionAsync(no));
        history.push('/getContact')
    }

    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Tel</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    { contactList && contactList.contacts.map( contact => (
                        <tr key={contact.no}>
                            <td>{contact.no}</td>
                            <td><Link to="#" onClick={() => goGetContact(contact.no) }>{contact.name}</Link></td>
                            <td>{contact.tel}</td>
                            <td>{contact.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetContactList

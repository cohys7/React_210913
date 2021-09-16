
import React from 'react'
import { Link } from 'react-router-dom';

const GetContactList = (props) => {

    const { contactList, getContact } = props;

    const getContactEvent = (no) => {
        getContact(no);
        // 여기서 이동하는 history.push('/getContact')를 사용하면 페이제 데이터 표시 안됨.
        // 먼저 페이지가 이동되고 나서 데이터나 늦게 서버로부터 가져와서 contact에 감긴다
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
                            <td><Link to="#" onClick={ () => getContactEvent(contact.no) }>{contact.name}</Link></td>
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

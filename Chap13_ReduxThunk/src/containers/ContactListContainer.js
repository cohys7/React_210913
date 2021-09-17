
import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import ContactGetList from './../components/Contact/ContactGetList'
import { getContextListActionAsync } from './../modules/contactR'

function ContactListContainer() {
    const error = useSelector(state => state.contactR.error);
    const loading = useSelector(state => state.contactR.loading.GET_CONTACTLIST);
    const contactList = useSelector(state => state.contactR.contactList);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getContextListActionAsync() )
    }, [])

    return (
        <div>
            { error && <h1>Error 발생: {error}</h1> }
            { loading && <h1>Loading....</h1>}
            { contactList && <ContactGetList contactList={contactList} /> }
        </div>
    )
}

export default ContactListContainer

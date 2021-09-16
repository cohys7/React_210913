import React, { useCallback, useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';
import axios from 'axios'

import ContactHeader from './Contact/ContactHeader'
import ContactHome from './Contact/ContactHome'
import ContactAdd from './Contact/ContactAdd'
import ContactUpdate from './Contact/ContactUpdate'
import ContactGet from './Contact/ContactGet'
import ContactGetList from './Contact/ContactGetList'

function ContactApp() {

    const baseURL = 'http://localhost:8080/contacts/';
    const [contactList, setContactList] = useState();
    const [contact, setContact] = useState({
        name: '', tel: '', address: ''
    });

    const history = useHistory();

    const getContactList = useCallback( () => {
        axios.get(baseURL, {params: {pageno: 1, pagesize: 10}})
        .then( resp => setContactList(resp.data) )
        .catch( error => console.log(error) )
    }, []);

    const getContact = useCallback( (no) => {
        axios.get(baseURL + no)               
        .then( resp => {
            setContact(resp.data);
            history.push('/getContact');
        })
        .catch( error => console.log(error) )
    }, [history]);

    const deleteContact = useCallback( (no, callback) => {
        axios.delete(baseURL + no)
        .then( resp => {
            // history.push('/getContactList');
            callback();                 // history.push('/getContactList');
            getContactList();
        })
        .catch( error => console.log(error) )
    }, [getContactList]);

    const updateContact = useCallback( (no) => {
        axios.put(baseURL + no, contact)
        .then( resp => {
            history.push('/getContactList');
            getContactList();
        } )
        .catch( error => console.log(error) )
    }, [history, contact, getContactList]);

    const addContact = useCallback( () => {
        axios.post(baseURL, contact)                 // 'http://localhost:8080/contacts/100';
        .then( resp => {
            history.push('/getContactList');
            getContactList();
        } )
        .catch( error => console.log(error) )
    }, [history, getContactList, contact]);

    useEffect( () => {
        getContactList();
    }, [getContactList]);

    return (
        <div className="card-body">
            <ContactHeader />

            <Switch>
                <Route path="/"                 component={ContactHome}         exact/>
                <Route path="/getContactList"   render={ () => <ContactGetList contactList={contactList} getContact={getContact} /> } />
                <Route path="/getContact"       render={ () => <ContactGet contact={contact} deleteContact={deleteContact} />} />
                <Route path="/addcontact"       render={ () => <ContactAdd  contact={contact} setContact={setContact} addContact={addContact} /> } />
                <Route path="/updateContact"    render={ () => <ContactUpdate contact={contact} setContact={setContact} updateContact={updateContact} /> } />
                <Route                          render={() => <h3>Not Found</h3>} />
            </Switch>
        </div>
    )
}

export default ContactApp

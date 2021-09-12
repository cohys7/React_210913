import React from 'react'
import { Route, Switch } from 'react-router';

import ContactHeader from './Contact/ContactHeader'
import ContactHome from './Contact/ContactHome'
import ContactAdd from './Contact/ContactAdd'
import ContactUpdate from './Contact/ContactUpdate'
import ContactGet from './Contact/ContactGet'
import ContactGetList from './Contact/ContactGetList'

function ContactApp() {

    return (
        <div className="card-body">
            <ContactHeader />

            <Switch>
                <Route path="/"                 component={ContactHome}         exact/>
                <Route path="/getContactList"   render={ () => <ContactGetList /> } />
                <Route path="/getContact"       render={ () => <ContactGet />} />
                <Route path="/addContact"       render={ () => <ContactAdd /> } />
                <Route path="/updateContact"    render={ () => <ContactUpdate /> } />
                <Route                          render={() => <h3>Not Found</h3>} />
            </Switch>
        </div>
    )
}

export default ContactApp

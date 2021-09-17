
import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'
import produce from 'immer'

const GET_CONTACTLIST = "CONTACT/GET_CONTACTLIST";
const GET_CONTACTLIST_SUCCESS = "CONTACT/GET_CONTACTLIST_SUCCESS";
const GET_CONTACTLIST_FAILURE = "CONTACT/GET_CONTACTLIST_FAILURE";

const GET_CONTACT = "CONTACT/GET_CONTACT";
const GET_CONTACT_SUCCESS = "CONTACT/GET_CONTACT_SUCCESS";
const GET_CONTACT_FAILURE = "CONTACT/GET_CONTACT_FAILURE";

const ADD_CONTACT = "CONTACT/ADD_CONTACT";
const ADD_CONTACT_SUCCESS = "CONTACT/ADD_CONTACT_SUCCESS";
const ADD_CONTACT_FAILURE = "CONTACT/ADD_CONTACT_FAILURE";

const baseURL = 'http://localhost:8080/contacts/';
const baseLONG = 'http://localhost:8080/contacts_long/';

const getContextListActionStart = createAction(GET_CONTACTLIST)
const getContextListActionSuccess = createAction(GET_CONTACTLIST_SUCCESS, resp => resp )
const getContextListActionError = createAction(GET_CONTACTLIST_FAILURE, error => error.message )

// Action
export const getContextListActionAsync = () => (disparch) => {
    disparch(getContextListActionStart())
    axios.get(baseLONG, {params: {pageno: 1, pagesize: 10}})
    .then(
        (resp) => disparch( getContextListActionSuccess(resp.data) )
    )
    .catch(
        (error) => disparch( getContextListActionError(error) )
    )
}

export const getContextActionAsync = (no) => (disparch) => {
    disparch( { type: GET_CONTACT } )
    axios.get(baseURL + no)
    .then(
        (resp) => disparch( { type: GET_CONTACT_SUCCESS, payload: resp.data } )
    )
    .catch(
        (error) => disparch( { type: GET_CONTACT_FAILURE, payload: error.message } )
    )
}


const init = {
    loading: {
        GET_CONTACTLIST: false,
        GET_CONTACT: false,
        ADD_CONTACT: false,
    },
    contactList: null,
    contact: null,
    error: null,
}
const contactR = handleActions({
    // Get List
    [GET_CONTACTLIST]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                GET_CONTACTLIST: true
            },
            contactList: null,
            error: null,
        };
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                GET_CONTACTLIST: false
            },
            contactList: action.payload
        };
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                GET_CONTACTLIST: false
            },
            error: action.payload
        };
    },
    // Get
    [GET_CONTACT]: (state, action) => {
        return produce(state, draft => {
            draft.loading.GET_CONTACT = true;
            draft.contact = null;
            draft.error = null;
        });
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
        return produce(state, draft => {
            draft.loading.GET_CONTACT = false;
            draft.contact = action.payload;
        });
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
        return produce(state, draft => {
            draft.loading.GET_CONTACT = false;
            draft.error = action.payload;
        });
    },
    // Add
    [ADD_CONTACT]: (state, action) => {
        return 
    },
    [ADD_CONTACT_SUCCESS]: (state, action) => {
        return ;
    },
    [ADD_CONTACT_FAILURE]: (state, action) => {
        return ;
    },
}, init);
export default contactR;

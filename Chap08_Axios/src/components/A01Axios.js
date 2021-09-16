
import React, { useEffect, useState } from 'react'

// npm i axios
import axios from 'axios'

function A01Axios() {
    
    const baseURL = 'http://localhost:8080/contacts/';
    const [data, setData] = useState();

    const getContactList = () => {
        // axios.get(baseURL, {params: {pageno: 1, pagesize: 10}})
        // .then( resp => setData(resp.data) )
        // .catch( error => setData(error) )
        axios({
            method: 'GET',
            url: baseURL,
            params: {params: {pageno: 1, pagesize: 10}},
        })
        .then( resp => setData(resp.data ))
        .catch( error => setData(error) )
    };

    const getContactListAync = async() => {
        // await axios.get(baseURL, {params: {pageno: 1, pagesize: 10}})
        // .then( resp => setData(resp.data) )
        // .catch( error => setData(error) )
        try {
            console.log('start')
            let result = await axios.get(baseURL, {params: {pageno: 2, pagesize: 10}})
            setData(result.data);

            console.log('2page end')

            result = await axios.get(baseURL, {params: {pageno: 3, pagesize: 10}})
            setData(result.data);

            console.log('3page end')
        }catch(error) {
            setData(error);
        }

    };

    const getContact = (no) => {
        axios.get(baseURL + no)                 // 'http://localhost:8080/contacts/100';
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    };

    const addContact = () => {
        const data = {
            "name":"강감찬",
            "tel":"010-2222-3339",
            "address":"서울시"
        }
        axios.post(baseURL, data)                 // 'http://localhost:8080/contacts/100';
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    };

    const updateContact = (no) => {
        const data = {
            "name":"강감찬",
            "tel":"010-2222-1111",
            "address":"Busan"
        }
        axios.put(baseURL + no, data)
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    };

    const deleteContact = (no) => {
        axios.delete(baseURL + no)
        .then( resp => setData(resp.data) )
        .catch( error => setData(error) )
    };

    useEffect( () => {
        getContactList();
    }, [])

    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button onClick={getContactList}>DATA LIST</button>
            <button onClick={getContactListAync}>DATA LIST ASYNC</button>
            <button onClick={ () => getContact(100) }>GET</button>
            <button onClick={ addContact }>ADD</button>
            <button onClick={ () => updateContact('1631775021508') }>UPDATE</button>
            <button onClick={ () => deleteContact('1631775021508') }>DELETE</button><br />
            <br />
            
            <textarea cols="100" rows="15" defaultValue={JSON.stringify(data, null, 4)}></textarea>
        </div>
    )
}

export default A01Axios

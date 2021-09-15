
// npm i immer
import React, { useCallback, useState } from 'react'
import produce from 'immer'

function A08Immer() {
    const [person, setPerson] = useState({
        name: '',
        info: {
            address: '',
            tel: [10, 20, 30],
            etc: {
                one: '',
                two: ''
            }
        }
    });

    const changeName = useCallback( () => {
        setPerson({
            ...person,
            name: 'NolBu'
        })
    }, [person]);

    const changeAddress = useCallback( () => {
        setPerson({
            ...person,
            info: {
                ...person.info,
                address: 'Busan'
            }
        })
    }, [person]);

    const changeOne = useCallback( () => {
        setPerson({
            ...person,
            info: {
                ...person.info,
                etc: {
                    ...person.info.etc,
                    one: '댑따리 복잡하네...'
                }
            }
        })
    }, [person]);

    const addArray = useCallback( () => {
        setPerson({
            ...person,
            info: {
                ...person.info,
                tel: person.info.tel.concat(1000)
            }
        })
    }, [person]);

    const changeNameImmer = (name) => {
        const newPerson = produce(person, draft => {
            draft.name = name;
        });
        setPerson(newPerson);
    }

    const changeAddressImmer = () => {
        const newPerson = produce(person, draft => {
            draft.info.address = 'Seoul';
        });
        setPerson(newPerson);
    }
    const changeOneImmer = () => {
        const newPerson = produce(person, draft => {
            draft.info.etc.one = '간단하네...';
        });
        setPerson(newPerson);
    };

    const addArrayImmer = () => {
        const newPerson = produce(person, draft => {
            draft.info.tel.push( Math.ceil(Math.random() * 100) );
        });
        setPerson(newPerson);
    };

    const updateArrayImmer = (index, value) => {
        const newPerson = produce(person, draft => {
            draft.info.tel[index] = value;
        });
        setPerson(newPerson);
    };

    const deleteArrayImmer = (index) => {
        const newPerson = produce(person, draft => {
            draft.info.tel.splice(index, 1);
        });
        setPerson(newPerson);
    }


    return (
        <div>
            <h3>A08. Immer</h3>
            
            Name: {person.name}<br />
            Address: {person.info.address}<br />
            One: {person.info.etc.one}<br />
            Ary: {person.info.tel.map( (item, i) => <span key={i}>{item} </span>)}

            <br />
            <button onClick={changeName}>Name</button>
            <button onClick={changeAddress}>Address</button>
            <button onClick={changeOne}>One</button>
            <button onClick={addArray}>ADD</button>
            <br />

            <button onClick={ () => changeNameImmer('ABC') }>Name</button>
            <button onClick={ changeAddressImmer }>Address</button>
            <button onClick={ changeOneImmer }>One</button>

            <button onClick={ addArrayImmer }>ADD</button>
            <button onClick={ () => updateArrayImmer(0, 2000) }>UPDATE</button>
            <button onClick={ () => deleteArrayImmer(1) }>DELETE</button>
        </div>
    )
}

export default A08Immer

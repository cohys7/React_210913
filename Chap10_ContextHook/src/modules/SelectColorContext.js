// SelectColorContext.js

import { createContext, useState } from 'react'

const SelectColorContext = createContext({
    state: {
        color: '',
        bgColor: ''
    },
    action: {
        setColor: () => {},
        setBgColor: () => {}
    }
});

function SelectColorProvider(props) {
    const [color, setColor] = useState('orange');
    const [bgColor, setBgColor] = useState('gray');

    const value = {
        state: { color, bgColor },          // 객체의 키와 value 값이 동일하면 생략 가능.
        action: { setColor, setBgColor }
    }
    return (
        <SelectColorContext.Provider value={value}>
            {props.children}
        </SelectColorContext.Provider>
    )
}
const SelectColorConsumer = SelectColorContext.Consumer;

export { SelectColorProvider, SelectColorConsumer }


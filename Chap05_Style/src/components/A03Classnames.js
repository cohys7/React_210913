
import React from 'react'

// npm i classnames
import cs from 'classnames'

import './css/A03Style.css'
import two from './css/A02Style2.module.css'

function A03Classnames() {
    
    const text = 'text';
    const isChecked = true;

    return (
        <div>
            <h3 className={cs('bg', 'text', 'space')}>A03 ClassNames Module</h3>
            <h3 className={cs('bg', text, 'space')}>A03 ClassNames Module</h3>
            <h3 className={cs('bg', {'text': true, 'space': isChecked})}>A03 ClassNames Module</h3>
            <h3 className={cs('bg', {[text]: true, 'space': isChecked})}>A03 ClassNames Module</h3>

            <h3 className={ cs(two.title, {[two.reverse]: isChecked}) }>A03 ClassNames Module</h3>
        </div>
    )
}

export default A03Classnames;

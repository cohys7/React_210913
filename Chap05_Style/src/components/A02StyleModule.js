
import React from 'react'

// css에 XXX.module.css 형태로 기술하고 js의 module처럼 import
import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A02StyleModule() {
    return (
        <div>
            <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
            <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
            <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
        </div>
    )
}

export default A02StyleModule;

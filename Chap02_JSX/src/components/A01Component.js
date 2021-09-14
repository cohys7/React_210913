import { useState } from "react";

function A01Component() {
    const name = 'A01 Component';

    // Hook
    const [username, setUsername] = useState('BangJa');

    const changeUsername = () => setUsername('HangDan');

    return (
        <div>
            <h3>A01 Component</h3>
            <div>This is A01 Component 한글 문제 없음.</div>
            <div>
                Name: {name} <br />
                UserName: {username}<br />
                <button onClick={changeUsername}>Click</button>
            </div>
        </div>
    )
}
export default A01Component
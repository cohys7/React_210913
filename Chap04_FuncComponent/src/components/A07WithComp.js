import { useState } from "react";

function A07WithComp(Comp, params) {
    const obj = { name: 'HungBu', age: 20 };

    return function InnerComponent(props) {

        const [address, setAddress] = useState('Seoul');
        const changeAddress = () => setAddress('Busan');

        return (
            <div>
                <h3>A07 Width Component: {params}</h3>
                color: {props.color}<br />
                <Comp {...props} obj={obj} address={address} changeAddress={changeAddress} />
            </div>
        )
    }
}
export default A07WithComp;
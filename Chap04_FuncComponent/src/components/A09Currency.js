import React, { useState } from 'react'

function A09Currency() {

    const [data, setData] = useState({
        qty: 3,
        cost: 5,
        inCurr: 'USD'
    });

    const currencies = ['USD', 'EUR', 'CNY'];
    const rate = { USD: 1, EUR: 1.35, CNY: 6.87 };

    const changeNumber = (evt) => setData({...data, [evt.target.name]: Number(evt.target.value)});
    const changeString = (evt) => setData({...data, [evt.target.name]: evt.target.value});

    const onTotal = () => {
        const value = currencies.map( item => {
            const result = (data.cost * data.qty * rate[data.inCurr] / rate[item]).toFixed(2);
            return <span>{item}: {result} {' '}</span>
        });
        return value;
    }

    return (
        <div>
            <h3>A09 Currency</h3>

            Qty: <input type="text" name="qty" className="form-control" value={data.qty} onChange={changeNumber} />
            Cost: <input type="text" name="cost" className="form-control" value={data.cost} onChange={changeNumber}  />
            Country: 
                <select className="form-control" name="inCurr"  value={data.inCurr} onChange={changeString} >
                    {currencies.map( item => <option key={item}>{item}</option>)}
                </select>
            <br/>

            <div>Total: {data.qty * data.cost}</div>
            <div>Total: {onTotal()}</div>
        </div>
    )
}

export default A09Currency;

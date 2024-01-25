import React, { useEffect, useState } from "react"
export default function MyHooksTest(props) {
    
    let [count, setCount] = useState(0)
    let [data, setData] = useState({})

    useEffect(() => {
        console.log("11233");
    })

    function changeCount() {
        setCount(count + 1)
    }
    
    function changeData(params) {
        setData({
            one: 'name'
        })
    }
    
    return <div>
        <button onClick={changeCount}>count= {count}</button>
        <button onClick={changeData}>data =  = {data.one}</button>
    </div>
} 
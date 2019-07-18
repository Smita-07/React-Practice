import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greatHandler("smita",10)}>Great Parent</button>
        </div>
    )
}

export default ChildComponent

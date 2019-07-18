import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["smita","jyoti","madhav"]
    // const persons = [
    //     {
    //         name: "smita",
    //         age: 10,
    //         location: "bokaro"
    //     },
    //     {
    //         name: "jyoti",
    //         age: 10,
    //         location: "bokaro"
    //     },
    //     {
    //         name: "madhav",
    //         age: 10,
    //         location: "bokaro"
    //     },
    //     {
    //         name: "jayanth",
    //         age: 10,
    //         location: "bokaro"
    //     }
    // ]
    const nameList = names.map((value,index) => <h2 key={index}>{value}</h2>)
    // const personList = persons.map(value =>(
    //     <Person person = {value}></Person>
    // )
    //)
    return (
        <div>

{nameList}
           
        
            {/* <h1>{name[0]}</h1>
            <h1>{name[1]}</h1>
            <h1>{name[2]}</h1> */}
        </div>
    )
}

export default NameList

import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>My name is  {person.name} , My age is {person.age} and my location is {person.location}</h1>
        </div>
    )
}

export default Person

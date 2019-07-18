import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        // return (
        //     <div>
        //         <h1>Hello world</h1>
        //     </div>
        // )

        return React.createElement('div',
        {id:'s1',className:'dummy'},
        React.createElement('h1',null,'smita'));
    }
}

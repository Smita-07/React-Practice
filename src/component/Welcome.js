import React, { Component } from 'react'

class Welcome extends Component {
    
    render() {
        const {name}=this.props
        return <h1>Hello {name} a.k.n </h1>
        
    }
}

export default Welcome;

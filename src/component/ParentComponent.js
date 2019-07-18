import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName:"parent"
    }
    this.greatParent = this.greatParent.bind(this)
}

greatParent(childName,number){
    alert(`hello ${this.state.parentName} from ${childName} \`\ ${number}`)
}

    render() {
        return (
            <div>
            <ChildComponent greatHandler={this.greatParent}/>
            </div>
        )
    }
}

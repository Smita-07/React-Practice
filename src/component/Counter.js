import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount=(count)=>{
        this.setState({
            count:this.state.count+1
        // },()=>{console.log('CallValue',this.state.count);}

        // )
//console.log(this.state.count)
        })
    }

    fiveIncrement(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
    
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={()=>this.fiveIncrement()}>Increment</button>
            </div>
        )
    }
}


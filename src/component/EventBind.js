import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        //this.clickHanler = this.clickHanler.bind(this)
    }
    // clickHanler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })

    //     console.log(this)
    // }

    clickHanler=()=>{
        this.setState({
            message:"good bye"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHanler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHanler()}>Click</button> */}
                <button onClick={this.clickHanler}>Click</button>
            </div>
        )
    }
}

export default EventBind

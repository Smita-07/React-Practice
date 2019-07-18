import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state={
          message:"Welcome Smita"
        }
      }

      changeMessage=()=>{
          this.setState({
              message:"thanks for subscribing"
          })
          }
      
    render() {
        return (
            <div>
             <h1> {this.state.message}</h1>
             <button onClick={()=>this.changeMessage()}>Click here</button>
            </div>
        )
    }
}

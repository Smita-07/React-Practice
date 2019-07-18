import React, { Component } from 'react'

export default class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isloggedIn: true
        }
    }

    render() {



        return this.state.isloggedIn && <div>Welcome Smita</div>
        // if (this.state.isloggedIn) {
        //     return (
        //         <div>Welcome Smita</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Jyoti</div>
        //     )

        // let message;
        // if(this.state.isloggedIn){
        //     message = <div>Welcome Smita</div>
        // }
        // else {message = <div>Welcome jyoti</div>}


        // // return (
        // //     <div>
        // //         <div>Welcome Smita</div>
        // //         <div>Welcome Jypti</div>
        // //     </div>
        // // )
        // return <div>{message}</div>
        // return(
        //     this.state.isloggedIn?
        //     <div>Welcome smita</div> :
        //     <div>Welcome jyoti</div>
        // )
    }


}

import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello'
import Message from './component/Message'
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';


const createSubscribe=()=>{
  console.log("Thanks for subscribing")
}
class App extends Component {

  

  render() {
    return (
      <div className="App">

        
        {/* { <Greet name="smita">
          <button>Add</button>
        </Greet>
        <Greet name="jyoti"></Greet>
        <Greet name="madhav"></Greet>

       <Welcome/>
       <Welcome/>
       <Welcome/>
    <Hello/>  } */}
    {/* <Message/> */}
    {/* <Welcome name = "smita"></Welcome>
    <Greet name = "smita"></Greet>
    <Counter/> */}
    {/* <FunctionClick/> */}
    {/* <ClassClick/> */}
    {/* <EventBind/> */}
    {/* <ParentComponent/> */}
    {/* <UserGreeting/> */}
    {/* <NameList/> */}
    {/* <StyleSheet primary = {true}/> */}
<Inline/>
      </div>
    );
  }
}
export default App;

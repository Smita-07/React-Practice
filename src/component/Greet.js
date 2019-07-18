import React from "react";
//import {Image} from "react-native";

const Greet = props => {
    const {name} =props
    return (
        <div>
            <h1>
                {name}

            </h1>
            {/* {props.children} */}
            {/* <Image source = {require("./img.jpeg")}></Image> */}
        </div>)
}
export default Greet;
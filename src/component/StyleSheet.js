import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div className = {`${className} font-xl`}>
            <h1>My name is Smita</h1>
        </div>
    )
}

export default StyleSheet
